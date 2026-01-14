import { ServerClient } from 'postmark'

export default defineEventHandler(async (event) => {
  // Only allow POST requests
  if (event.node.req.method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  try {
    const body = await readBody(event)
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      })
    }

    // Get Postmark token from environment variable
    const postmarkToken = process.env.POSTMARK_TOKEN
    if (!postmarkToken) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Email service not configured'
      })
    }

    // Initialize Postmark client
    const client = new ServerClient(postmarkToken)

    // Get recipient email from environment variable (default to info@constanteng.com)
    const recipientEmail = process.env.CONTACT_EMAIL || 'info@constanteng.com'

    // Send email via Postmark
    const emailResponse = await client.sendEmail({
      From: process.env.POSTMARK_FROM_EMAIL || 'noreply@constanteng.com',
      To: recipientEmail,
      Subject: `Contact Form: ${subject}`,
      HtmlBody: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      TextBody: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
Subject: ${subject}

Message:
${message}
      `,
      ReplyTo: email
    })

    // Send confirmation email to the user (only if same domain during pending approval)
    // Extract domain from From email
    const fromEmail = process.env.POSTMARK_FROM_EMAIL || 'noreply@constanteng.com'
    const fromDomain = fromEmail.split('@')[1]
    const userDomain = email.split('@')[1]
    
    // Only send confirmation if same domain (required during Postmark pending approval)
    if (fromDomain === userDomain) {
      try {
        await client.sendEmail({
          From: fromEmail,
          To: email,
          Subject: 'Thank you for contacting CONSTANT Engineering',
          HtmlBody: `
            <h2>Thank you for contacting CONSTANT Engineering plc</h2>
            <p>Dear ${name},</p>
            <p>We have received your message and will get back to you as soon as possible.</p>
            <p><strong>Your message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <p>Best regards,<br>CONSTANT Engineering plc</p>
          `,
          TextBody: `
Thank you for contacting CONSTANT Engineering plc

Dear ${name},

We have received your message and will get back to you as soon as possible.

Your message:
${message}

Best regards,
CONSTANT Engineering plc
          `
        })
      } catch (confirmationError) {
        // Log but don't fail the whole request if confirmation email fails
        console.warn('Failed to send confirmation email:', confirmationError)
      }
    } else {
      console.log(`Skipping confirmation email - user domain (${userDomain}) doesn't match from domain (${fromDomain}) during pending approval`)
    }

    return {
      success: true,
      message: 'Email sent successfully',
      messageId: emailResponse.MessageID
    }
  } catch (error) {
    console.error('Error sending email:', error)
    
    let statusCode = 500
    let message = 'Failed to send email'
    
    if (error && typeof error === 'object') {
      // Handle Postmark API errors
      if ('statusCode' in error) {
        statusCode = Number(error.statusCode) || 500
      }
      
      // Extract error message from Postmark response
      if ('message' in error) {
        message = String(error.message)
      } else if ('ErrorCode' in error && 'Message' in error) {
        // Postmark API error structure
        message = String((error as any).Message)
      } else if ('response' in error && error.response) {
        const response = (error as any).response
        if (response.Message) {
          message = String(response.Message)
        } else if (response.message) {
          message = String(response.message)
        }
      }
    }
    
    throw createError({
      statusCode,
      statusMessage: message
    })
  }
})

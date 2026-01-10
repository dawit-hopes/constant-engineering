<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="px-6 lg:px-12 py-24 lg:py-32 border-b border-gray-200">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0 }"
        class="mx-auto max-w-4xl text-center"
      >
        <h1 class="text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-6">
          Get in Touch
        </h1>
        <p class="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Let's discuss how CONSTANT Engineering can help power your industry
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="px-6 lg:px-12 py-24">
      <div class="mx-auto max-w-7xl">
        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Contact Form -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="200"
          >
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Send us a message</h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="+251 9XX XXX XXX"
                />
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  required
                  class="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="6"
                  required
                  class="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full rounded-full bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else class="flex items-center justify-center">
                  <Icon name="heroicons:arrow-path" class="h-5 w-5 animate-spin mr-2" />
                  Sending...
                </span>
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="300"
            class="space-y-8"
          >
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <div class="space-y-6">
                <!-- Office Address -->
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0">
                    <div class="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon name="heroicons:map-pin" class="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-1">Office Address</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Addis Ababa, Ethiopia<br />
                      Industrial Zone
                    </p>
                  </div>
                </div>

                <!-- Phone -->
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0">
                    <div class="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon name="heroicons:phone" class="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+251XXXXXXXXX" class="text-gray-600 hover:text-primary transition-colors">
                      +251 XX XXX XXXX
                    </a>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0">
                    <div class="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon name="heroicons:envelope" class="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@constantengineering.com" class="text-gray-600 hover:text-primary transition-colors">
                      info@constantengineering.com
                    </a>
                  </div>
                </div>

                <!-- Business Hours -->
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0">
                    <div class="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon name="heroicons:clock" class="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Additional Info -->
            <div class="pt-8 border-t border-gray-200">
              <p class="text-gray-600 leading-relaxed">
                For urgent inquiries or emergency support, please call our 24/7 emergency line. 
                Our team is always ready to assist with critical engineering needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // In a real application, you would send this to your backend
  console.log('Form submitted:', form.value)
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
  
  isSubmitting.value = false
  
  // Show success message (you can implement a toast notification here)
  alert('Thank you for your message! We will get back to you soon.')
}
</script>

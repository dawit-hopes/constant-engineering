# CONSTANT ENGINEERING plc - Website

A high-end industrial website built with Nuxt 3, Tailwind CSS, and Framer Motion, following the Tailwind Studio design aesthetic.

## Features

- **Studio-Style Design**: Bordered wrapper with rounded corners and sophisticated app-like feel
- **Apple-Style Mega Menu**: Full-width dropdown menu with smooth animations
- **Scroll Animations**: All sections animate on scroll using @vueuse/motion
- **Responsive Design**: Fully responsive across all device sizes
- **Modern Stack**: Nuxt 3, Tailwind CSS, and nuxt-icon

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

## Project Structure

```
constant/
├── assets/
│   └── css/
│       └── main.css          # Global styles
├── components/
│   └── Navbar.vue            # Navigation with mega menu
├── pages/
│   ├── index.vue             # Landing page
│   ├── about.vue              # About page
│   ├── contact.vue            # Contact page
│   └── products/
│       ├── index.vue          # Products listing
│       └── [id].vue           # Product detail page
├── app.vue                    # Main app wrapper
├── nuxt.config.ts             # Nuxt configuration
├── tailwind.config.js         # Tailwind configuration
└── package.json
```

## Design System

- **Primary Color**: #D11800 (International Orange/Red)
- **Typography**: Inter (Google Fonts)
- **Layout**: Studio-style bordered wrapper with rounded-3xl/4xl corners
- **Background**: Gray-100 outer, white inner container

## Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme.

### Content
Update product information in:
- `components/Navbar.vue` (mega menu products)
- `pages/products/index.vue` (product listings)
- `pages/products/[id].vue` (product details)

### Contact Information
Update contact details in `pages/contact.vue`.

## Email Configuration (Postmark)

The contact form uses Postmark to send emails. To set up:

1. **Create a Postmark account** at [https://postmarkapp.com](https://postmarkapp.com)

2. **Get your Server API Token** from your Postmark dashboard

3. **Create a `.env` file** in the project root with the following variables:
```env
POSTMARK_TOKEN=your-postmark-server-api-token-here
CONTACT_EMAIL=info@constanteng.com
POSTMARK_FROM_EMAIL=noreply@constanteng.com
```

4. **Verify your sender signature** in Postmark:
   - The `POSTMARK_FROM_EMAIL` must be a verified sender signature in your Postmark account
   - Go to Postmark dashboard → Signatures → Add a new signature

5. **Test the contact form** by submitting a message on the contact page

**Note**: The `.env` file is already in `.gitignore` and will not be committed to version control.

## License

Proprietary - CONSTANT ENGINEERING plc

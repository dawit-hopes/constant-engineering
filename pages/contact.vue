<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="pt-20 lg:pt-32 pb-12 bg-gradient-to-b from-slate-50 to-white">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0 }"
        class="mx-auto max-w-4xl px-6 lg:px-8 text-center"
      >
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          Get in Touch
        </h1>
        <p class="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Let's discuss how CONSTANT Engineering can help power your industry
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16 lg:py-24">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="100"
          >
            <h2 class="text-3xl font-bold text-slate-900 mb-8">Send us a message</h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="+251 9XX XXX XXX"
                />
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  required
                  class="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="6"
                  required
                  class="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
            :delay="200"
            class="space-y-8"
          >
            <!-- Contact Cards -->
            <div class="space-y-6">
              <!-- Phone -->
              <div class="bg-white rounded-xl border border-slate-200 p-6">
                <div class="flex items-center gap-4 mb-4">
                  <div class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="heroicons:phone" class="h-6 w-6 text-primary" />
                  </div>
                  <h3 class="text-lg font-semibold text-slate-900">Phone</h3>
                </div>
                <div class="space-y-2 pl-16">
                  <a
                    href="tel:+251924909098"
                    class="block text-slate-600 hover:text-primary transition-colors"
                  >
                    +251 924 909 098
                  </a>
                  <a
                    href="tel:+251911147101"
                    class="block text-slate-600 hover:text-primary transition-colors"
                  >
                    +251 911 147 101
                  </a>
                </div>
              </div>

              <!-- Email -->
              <div class="bg-white rounded-xl border border-slate-200 p-6">
                <div class="flex items-center gap-4 mb-4">
                  <div class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="heroicons:envelope" class="h-6 w-6 text-primary" />
                  </div>
                  <h3 class="text-lg font-semibold text-slate-900">Email</h3>
                </div>
                <div class="pl-16">
                  <a
                    href="mailto:info@constanteng.com"
                    class="text-slate-600 hover:text-primary transition-colors break-all"
                  >
                    info@constanteng.com
                  </a>
                </div>
              </div>

              <!-- Address -->
              <div class="bg-white rounded-xl border border-slate-200 p-6">
                <div class="flex items-center gap-4 mb-4">
                  <div class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="heroicons:map-pin" class="h-6 w-6 text-primary" />
                  </div>
                  <h3 class="text-lg font-semibold text-slate-900">Visit Us</h3>
                </div>
                <div class="pl-16 space-y-2 text-slate-600">
                  <p>KKare Building</p>
                  <p>Mozambique Street, Mexico Area</p>
                  <p>Addis Ababa, Ethiopia</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=KKare+Building+Mozambique+Street+Mexico+Area+Addis+Ababa"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-3 text-sm font-medium"
                  >
                    Get Directions
                    <Icon name="heroicons:arrow-right" class="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <!-- Map -->
            <div class="bg-white rounded-xl border border-slate-200 p-6">
              <h3 class="text-lg font-semibold text-slate-900 mb-4">Location</h3>
              <div class="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.8!2d38.7618!3d9.0054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1704900000000!5m2!1sen!2set"
                  width="100%"
                  height="300"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="w-full"
                  title="CONSTANT Engineering Office Location"
                ></iframe>
              </div>
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

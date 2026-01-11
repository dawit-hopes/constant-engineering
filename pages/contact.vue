<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24" style="background: linear-gradient(to bottom, #ffffff 0%, #fef2f2 20%, #fee2e2 40%, #fef2f2 60%, #ffffff 100%);">
      <div
        v-motion
        :initial="{ opacity: 0, y: 10 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="50"
        class="mx-auto max-w-4xl text-center"
      >
        <p class="text-sm font-semibold text-slate-600 mb-4 uppercase tracking-wider">
          Contact
        </p>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight tracking-tight">
          Get in
          <span class="relative inline-block text-primary">
            Touch
            <!-- Technical-style underline -->
            <svg
              class="absolute -bottom-2 left-0 w-full h-2 text-primary/50"
              viewBox="0 0 200 8"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 4 L198 4"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-dasharray="4,2"
              />
            </svg>
          </span>
        </h1>
        <p class="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto px-4">
          Let's discuss how CONSTANT Engineering plc can help power your industry
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-12 sm:py-16 lg:py-24 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-16">
          <!-- Contact Form - Takes 3 columns -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="100"
            class="lg:col-span-3"
          >
            <div class="bg-slate-50 rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200/50">
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
                Send us a message
              </h2>
              <p class="text-slate-600 mb-8 text-base sm:text-lg">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form @submit.prevent="handleSubmit" class="space-y-5 sm:space-y-6">
                <div class="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label for="name" class="block text-sm font-semibold text-slate-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label for="email" class="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div class="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label for="phone" class="block text-sm font-semibold text-slate-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      v-model="form.phone"
                      type="tel"
                      class="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="+251 9XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label for="subject" class="block text-sm font-semibold text-slate-900 mb-2">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      v-model="form.subject"
                      type="text"
                      required
                      class="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label for="message" class="block text-sm font-semibold text-slate-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="6"
                    required
                    class="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full sm:w-auto rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                >
                  <span v-if="!isSubmitting" class="flex items-center justify-center gap-2">
                    Send Message
                    <Icon name="heroicons:paper-airplane" class="h-5 w-5" />
                  </span>
                  <span v-else class="flex items-center justify-center gap-2">
                    <Icon name="heroicons:arrow-path" class="h-5 w-5 animate-spin" />
                    Sending...
                  </span>
                </button>
              </form>
            </div>
          </div>

          <!-- Contact Information - Takes 2 columns -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="150"
            class="lg:col-span-2 space-y-6"
          >
            <!-- Quick Contact Info -->
            <div class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/50 shadow-sm">
              <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-6 tracking-tight">
                Contact Information
              </h3>
              
              <div class="space-y-6">
                <!-- Phone -->
                <div class="flex items-start gap-4">
                  <div class="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="heroicons:phone" class="h-6 w-6 text-primary" />
                  </div>
                  <div class="flex-1">
                    <h4 class="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Phone
                    </h4>
                    <div class="space-y-1">
                      <a
                        href="tel:+251924909098"
                        class="block text-base text-slate-900 hover:text-primary transition-colors font-medium"
                      >
                        +251 924 909 098
                      </a>
                      <a
                        href="tel:+251911147101"
                        class="block text-base text-slate-900 hover:text-primary transition-colors font-medium"
                      >
                        +251 911 147 101
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Divider -->
                <div class="border-t border-slate-200"></div>

                <!-- Email -->
                <div class="flex items-start gap-4">
                  <div class="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="heroicons:envelope" class="h-6 w-6 text-primary" />
                  </div>
                  <div class="flex-1">
                    <h4 class="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Email
                    </h4>
                    <a
                      href="mailto:info@constanteng.com"
                      class="text-base text-slate-900 hover:text-primary transition-colors break-all font-medium"
                    >
                      info@constanteng.com
                    </a>
                  </div>
                </div>

                <!-- Divider -->
                <div class="border-t border-slate-200"></div>

                <!-- Address -->
                <div class="flex items-start gap-4">
                  <div class="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="heroicons:map-pin" class="h-6 w-6 text-primary" />
                  </div>
                  <div class="flex-1">
                    <h4 class="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Office Address
                    </h4>
                    <div class="space-y-1 text-base text-slate-900 font-medium">
                      <p>KKare Building</p>
                      <p>Mozambique Street, Mexico Area</p>
                      <p>Addis Ababa, Ethiopia</p>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/FFS3Wvaz4BxTKAje8"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-3 text-sm font-semibold"
                    >
                      Get Directions
                      <Icon name="heroicons:arrow-right" class="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Business Hours or Additional Info -->
            <div class="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 sm:p-8 border border-primary/20">
              <div class="flex items-start gap-4">
                <div class="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="heroicons:clock" class="h-6 w-6 text-primary" />
                </div>
                <div class="flex-1">
                  <h4 class="text-lg font-bold text-slate-900 mb-2">
                    We're Here to Help
                  </h4>
                  <p class="text-sm text-slate-600 leading-relaxed">
                    Our team is available to answer your questions and discuss your project needs. 
                    Reach out through any of the channels above, and we'll respond promptly.
                  </p>
                </div>
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

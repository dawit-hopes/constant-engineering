<template>
  <footer class="bg-slate-900 text-white">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
        <!-- Contact Information -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Contact Us</h3>
          <div class="space-y-4">
            <a
              href="tel:+251924909098"
              class="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
            >
              <Icon name="heroicons:phone" class="h-5 w-5" />
              <span>+251 924 909 098</span>
            </a>
            <a
              href="tel:+251911147101"
              class="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
            >
              <Icon name="heroicons:phone" class="h-5 w-5" />
              <span>+251 911 147 101</span>
            </a>
            <a
              href="mailto:info@constanteng.com"
              class="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
            >
              <Icon name="heroicons:envelope" class="h-5 w-5" />
              <span>info@constanteng.com</span>
            </a>
          </div>
        </div>

        <!-- Visit Us -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Visit Us</h3>
          <div class="space-y-4 text-slate-300">
            <p>KKare Building</p>
            <p>Mozambique Street, Mexico Area</p>
            <p>Addis Ababa, Ethiopia</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=KKare+Building+Mozambique+Street+Mexico+Area+Addis+Ababa"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-4"
            >
              Get Directions
              <Icon name="heroicons:arrow-right" class="h-4 w-4" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Quick Links</h3>
          <div class="space-y-3">
            <NuxtLink
              to="/"
              class="block text-slate-300 hover:text-white transition-colors"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="block text-slate-300 hover:text-white transition-colors"
            >
              About Us
            </NuxtLink>
            <NuxtLink
              to="/products"
              class="block text-slate-300 hover:text-white transition-colors"
            >
              Products
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="block text-slate-300 hover:text-white transition-colors"
            >
              Contact
            </NuxtLink>
            <a
              href="https://t.me/constantengineering"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <Icon name="heroicons:chat-bubble-left-right" class="h-5 w-5" />
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Map Section -->
      <div class="mb-12">
        <h3 class="text-lg font-semibold mb-6">Location</h3>
        <div class="rounded-lg overflow-hidden shadow-xl">
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

      <!-- Copyright -->
      <div class="border-t border-slate-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© Constant Engineering PLC. All Rights Reserved</p>
          <p>Designed by BootstrapMade</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

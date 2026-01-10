<template>
  <div class="min-h-screen">
    <div v-if="product">
      <!-- Hero Section -->
      <section class="px-6 lg:px-12 py-24 lg:py-32 border-b border-gray-200">
        <div class="mx-auto max-w-7xl">
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0 }"
            class="max-w-4xl"
          >
            <div class="mb-8">
              <Icon
                :name="product.icon"
                class="h-16 w-16 text-primary mb-6"
              />
            </div>
            <h1 class="text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-6">
              {{ product.name }}
            </h1>
            <p class="text-xl text-gray-600 leading-relaxed">
              {{ product.description }}
            </p>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="px-6 lg:px-12 py-24">
        <div class="mx-auto max-w-7xl">
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="200"
            class="mb-16"
          >
            <h2 class="text-4xl font-bold text-gray-900 mb-8">Key Features</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div
                v-for="(feature, index) in product.features"
                :key="index"
                class="flex items-start space-x-4"
              >
                <div class="flex-shrink-0">
                  <div class="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="heroicons:check" class="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ feature.title }}</h3>
                  <p class="text-gray-600">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Specifications -->
      <section class="px-6 lg:px-12 py-24 bg-gray-50 border-t border-gray-200">
        <div class="mx-auto max-w-7xl">
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="400"
          >
            <h2 class="text-4xl font-bold text-gray-900 mb-8">Specifications</h2>
            <div class="bg-white rounded-2xl border border-gray-200 p-8">
              <dl class="grid md:grid-cols-2 gap-6">
                <div
                  v-for="(spec, index) in product.specifications"
                  :key="index"
                  class="flex justify-between items-start py-4 border-b border-gray-100 last:border-0"
                >
                  <dt class="text-base font-medium text-gray-900">{{ spec.label }}</dt>
                  <dd class="text-base text-gray-600 text-right">{{ spec.value }}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="px-6 lg:px-12 py-24 border-t border-gray-200">
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visible="{ opacity: 1, scale: 1 }"
          :delay="600"
          class="mx-auto max-w-4xl text-center"
        >
          <h2 class="text-4xl font-bold tracking-tight text-gray-900 mb-6">
            Interested in {{ product.name }}?
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            Contact our team to discuss your requirements and get a customized quote
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center rounded-full bg-primary px-10 py-5 text-lg font-semibold text-white hover:bg-primary/90 transition-all hover:scale-105"
            >
              Get a Quote
              <Icon name="heroicons:arrow-right" class="ml-2 h-5 w-5" />
            </NuxtLink>
            <NuxtLink
              to="/products"
              class="inline-flex items-center justify-center rounded-full border-2 border-gray-300 px-10 py-5 text-lg font-semibold text-gray-700 hover:border-primary hover:text-primary transition-all"
            >
              View All Products
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>

    <!-- 404 State -->
    <div v-else class="px-6 lg:px-12 py-24">
      <div class="mx-auto max-w-2xl text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p class="text-lg text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
        <NuxtLink
          to="/products"
          class="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary/90 transition-all"
        >
          Browse All Products
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const productId = route.params.id

// Product database
const products = {
  'diesel-generators': {
    name: 'Diesel Generators',
    icon: 'heroicons:bolt',
    description: 'Industrial-grade diesel generators designed for reliable power generation in demanding environments. Available in various capacities from 50kVA to 2000kVA.',
    features: [
      {
        title: '24/7 Reliability',
        description: 'Engineered for continuous operation with minimal downtime and maximum efficiency.'
      },
      {
        title: 'Advanced Control Systems',
        description: 'State-of-the-art control panels with remote monitoring and automated start/stop capabilities.'
      },
      {
        title: 'Fuel Efficiency',
        description: 'Optimized engines that deliver maximum power output with minimal fuel consumption.'
      },
      {
        title: 'Comprehensive Support',
        description: 'Full maintenance programs and 24/7 technical support to keep your operations running.'
      }
    ],
    specifications: [
      { label: 'Power Range', value: '50kVA - 2000kVA' },
      { label: 'Voltage', value: '380V / 400V / 415V' },
      { label: 'Frequency', value: '50Hz / 60Hz' },
      { label: 'Fuel Type', value: 'Diesel' },
      { label: 'Cooling System', value: 'Radiator / Heat Exchanger' },
      { label: 'Warranty', value: '2 Years' }
    ]
  },
  'solar-energy': {
    name: 'Solar Energy Systems',
    icon: 'heroicons:sun',
    description: 'Complete solar power solutions from design to installation. Grid-tied and off-grid systems tailored to your energy needs.',
    features: [
      {
        title: 'High Efficiency Panels',
        description: 'Premium solar panels with efficiency ratings up to 22% for maximum energy generation.'
      },
      {
        title: 'Smart Inverters',
        description: 'Advanced inverters with monitoring capabilities and grid synchronization features.'
      },
      {
        title: 'Battery Storage',
        description: 'Optional battery systems for energy storage and backup power during outages.'
      },
      {
        title: 'Professional Installation',
        description: 'Expert installation by certified technicians ensuring optimal performance and safety.'
      }
    ],
    specifications: [
      { label: 'System Capacity', value: '1kW - 1MW+' },
      { label: 'Panel Efficiency', value: 'Up to 22%' },
      { label: 'Warranty', value: '25 Years (Panels), 10 Years (Inverters)' },
      { label: 'Installation Time', value: '1-3 Weeks' },
      { label: 'ROI Period', value: '5-7 Years' }
    ]
  },
  'hvac-systems': {
    name: 'HVAC Systems',
    icon: 'heroicons:wind',
    description: 'Complete heating, ventilation, and air conditioning solutions for commercial and industrial facilities.',
    features: [
      {
        title: 'Energy Efficient',
        description: 'Modern systems designed to minimize energy consumption while maintaining optimal comfort.'
      },
      {
        title: 'Smart Controls',
        description: 'Intelligent control systems with programmable schedules and remote access capabilities.'
      },
      {
        title: 'Air Quality',
        description: 'Advanced filtration systems that improve indoor air quality and reduce pollutants.'
      },
      {
        title: 'Custom Design',
        description: 'Tailored solutions designed specifically for your building layout and requirements.'
      }
    ],
    specifications: [
      { label: 'Capacity Range', value: '5 Tons - 500 Tons' },
      { label: 'Energy Rating', value: 'A++ / Inverter Technology' },
      { label: 'Warranty', value: '2-5 Years' },
      { label: 'Maintenance', value: 'Annual Service Contracts Available' }
    ]
  },
  'industrial-automation': {
    name: 'Industrial Automation',
    icon: 'heroicons:cpu-chip',
    description: 'Advanced automation and control systems using PLC, SCADA, and IoT technologies to optimize industrial processes.',
    features: [
      {
        title: 'PLC Programming',
        description: 'Custom PLC programs tailored to your specific manufacturing processes and requirements.'
      },
      {
        title: 'SCADA Systems',
        description: 'Supervisory control and data acquisition systems for real-time monitoring and control.'
      },
      {
        title: 'IoT Integration',
        description: 'Internet of Things connectivity for remote monitoring and predictive maintenance.'
      },
      {
        title: 'HMI Interfaces',
        description: 'User-friendly human-machine interfaces for intuitive operation and control.'
      }
    ],
    specifications: [
      { label: 'PLC Brands', value: 'Siemens, Allen-Bradley, Schneider' },
      { label: 'Communication', value: 'Ethernet, Modbus, Profibus' },
      { label: 'Support', value: '24/7 Technical Support' }
    ]
  },
  'metal-engineering': {
    name: 'Metal Engineering',
    icon: 'heroicons:wrench-screwdriver',
    description: 'Precision metal fabrication and custom engineering services for industrial applications.',
    features: [
      {
        title: 'Custom Fabrication',
        description: 'Tailored metalwork solutions designed and fabricated to your exact specifications.'
      },
      {
        title: 'Precision Machining',
        description: 'High-precision CNC machining for complex components and assemblies.'
      },
      {
        title: 'Quality Materials',
        description: 'Premium materials including stainless steel, aluminum, and specialized alloys.'
      },
      {
        title: 'Welding Services',
        description: 'Professional welding services using TIG, MIG, and arc welding techniques.'
      }
    ],
    specifications: [
      { label: 'Materials', value: 'Steel, Stainless Steel, Aluminum, Alloys' },
      { label: 'Capabilities', value: 'CNC Machining, Welding, Fabrication' },
      { label: 'Tolerance', value: '±0.01mm' }
    ]
  },
  'electrical-systems': {
    name: 'Electrical Systems',
    icon: 'heroicons:light-bulb',
    description: 'Complete electrical design, installation, and maintenance services for commercial and industrial facilities.',
    features: [
      {
        title: 'Design & Engineering',
        description: 'Comprehensive electrical system design following international standards and codes.'
      },
      {
        title: 'Installation',
        description: 'Professional installation by certified electricians ensuring safety and compliance.'
      },
      {
        title: 'Maintenance',
        description: 'Preventive and corrective maintenance programs to ensure system reliability.'
      },
      {
        title: 'Upgrades & Retrofits',
        description: 'System upgrades and retrofits to improve efficiency and meet new requirements.'
      }
    ],
    specifications: [
      { label: 'Voltage Range', value: 'Low Voltage (LV) to Medium Voltage (MV)' },
      { label: 'Standards', value: 'IEC, IEEE, Local Codes' },
      { label: 'Certification', value: 'Licensed Electricians' }
    ]
  },
  'maintenance-services': {
    name: 'Maintenance Services',
    icon: 'heroicons:wrench',
    description: 'Comprehensive maintenance programs to keep your systems running at peak performance.',
    features: [
      {
        title: 'Preventive Maintenance',
        description: 'Scheduled maintenance programs to prevent failures and extend equipment life.'
      },
      {
        title: '24/7 Emergency Support',
        description: 'Round-the-clock emergency response for critical system failures.'
      },
      {
        title: 'Service Contracts',
        description: 'Flexible service contracts tailored to your maintenance needs and budget.'
      },
      {
        title: 'Remote Monitoring',
        description: 'Advanced monitoring systems for real-time equipment health tracking.'
      }
    ],
    specifications: [
      { label: 'Response Time', value: '2-4 Hours (Emergency)' },
      { label: 'Coverage', value: 'All Equipment Types' },
      { label: 'Support', value: '24/7 Available' }
    ]
  },
  'consulting': {
    name: 'Engineering Consulting',
    icon: 'heroicons:document-text',
    description: 'Expert consulting services for complex engineering challenges, feasibility studies, and project planning.',
    features: [
      {
        title: 'Feasibility Studies',
        description: 'Comprehensive analysis to determine project viability and optimal solutions.'
      },
      {
        title: 'Project Planning',
        description: 'Detailed project planning including timelines, budgets, and resource allocation.'
      },
      {
        title: 'Technical Expertise',
        description: 'Access to experienced engineers across multiple disciplines.'
      },
      {
        title: 'Compliance & Standards',
        description: 'Ensuring all designs and implementations meet local and international standards.'
      }
    ],
    specifications: [
      { label: 'Service Areas', value: 'All Engineering Disciplines' },
      { label: 'Deliverables', value: 'Reports, Drawings, Specifications' },
      { label: 'Timeline', value: 'Project Dependent' }
    ]
  }
}

const product = products[productId] || null

useHead({
  title: product ? `${product.name} - CONSTANT Engineering` : 'Product Not Found - CONSTANT Engineering',
  meta: [
    {
      name: 'description',
      content: product ? product.description : 'Product not found'
    }
  ]
})
</script>

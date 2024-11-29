<template>
  <UContainer class="py-16 dark:bg-gray-900">
    <!-- Hero Section -->
    <div class="text-center space-y-8 mb-16 dark:text-gray-300">
      <h1 class="text-4xl font-bold">SSWiki</h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
        Your comprehensive resource for student services processes, templates, and key information.
      </p>
    </div>

    <!-- Features Grid -->
    <div class="grid md:grid-cols-3 gap-8 mb-16">
      <UCard v-for="feature in features" :key="feature.title">
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon :name="feature.icon" class="text-2xl text-primary" />
            <h2 class="text-xl font-semibold">{{ feature.title }}</h2>
          </div>
        </template>
        <p class="text-gray-600 dark:text-gray-300">{{ feature.description }}</p>
        <template #footer >
          <UButton
            :to="feature.link"
            color="primary"
            variant="solid"
            block
          >
            Explore {{ feature.title }}
          </UButton>
        </template>
      </UCard>
    </div>

    <!-- Quick Actions -->
    <div class="text-center dark:text-gray-300">
      <h2 class="text-2xl font-semibold mb-6">Quick Actions</h2>
      <div class="flex flex-wrap justify-center gap-4">
        <UButton
          v-for="action in quickActions"
          :key="action.label"
          :to="action.link"
          :icon="action.icon"
          size="lg"
          color="primary" 
          variant="solid"
        >
          {{ action.label }}
        </UButton>
      </div>
    </div>
  </UContainer>
</template>

<script setup>
const features = [
  {
    title: 'Processes',
    description: 'Step-by-step guides for handling student requests and administrative procedures.',
    icon: 'i-heroicons-clipboard-document-list',
    link: '/processes'
  },
  {
    title: 'Templates',
    description: 'Standardized forms and documents for common student service requests.',
    icon: 'i-heroicons-document-duplicate',
    link: '/templates'
  },
  {
    title: 'Key Information',
    description: 'Essential reference materials and important documentation.',
    icon: 'i-heroicons-information-circle',
    link: '/key-info'
  }
]

const quickActions = [
  {
    label: 'Search Processes',
    icon: 'i-heroicons-magnifying-glass',
    link: '/processes'
  },
  {
    label: 'View Templates',
    icon: 'i-heroicons-document',
    link: '/templates'
  },
  {
    label: 'Access Key Info',
    icon: 'i-heroicons-key',
    link: '/key-info'
  }
]
</script>

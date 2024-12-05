<template>
    <nav class="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
        <UButton color="primary" to="/" variant="link" class="dark:bg-gray-800">Home</UButton>
        <div class="flex space-x-2 items-center">
            <DarkModeButton  size="lg" class="mr-2"/>
            <UButton v-for="link in links" :key="link.to" :to="link.to" :label="link.label" variant="link" class="dark:bg-gray-800" />
        </div>
    </nav>
</template>

<script setup>
const links = [
    { label: 'Tools', to: '/tools' },
    { label: 'Processes', to: '/processes' },
    { label: 'Key Information', to: '/key-info' },
]

</script>


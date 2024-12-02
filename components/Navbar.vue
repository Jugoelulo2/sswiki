<template>
    <nav class="flex justify-between items-center p-4">
        <UButton color="primary" to="/">Home</UButton>
        <div class="flex space-x-2 items-center">
            <DarkModeButton  size="lg" class="mr-2"/>
            <UButton v-for="link in links" :key="link.to" :to="link.to" :label="link.label" />
        </div>
    </nav>
</template>

<script setup>
const links = [
    { label: 'Templates', to: '/templates' },
    { label: 'Processes', to: '/processes' },
    { label: 'Key Information', to: '/key-info' },
]

</script>


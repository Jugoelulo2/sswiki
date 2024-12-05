<template>
    <UContainer>
        <div class="max-w-4xl mx-auto">
            <!-- Header -->
            <h1 class="text-center text-3xl font-bold mb-8 pt-6">Key Information</h1>

            <!-- Search Bar -->
            <div class="mb-8">
                <UInput
                    v-model="searchQuery"
                    icon="i-heroicons-magnifying-glass"
                    placeholder="Search for information..."
                    class="max-w-md mx-auto"
                    size="lg"
                />
            </div>

            <!-- Menu Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                    v-for="item in filteredMenuItems"
                    :key="item.path"
                    class="transform transition-all duration-200 hover:-translate-y-1"
                >
                    <UButton
                        :to="item.path"
                        class="w-full h-full p-6 text-left flex items-center gap-3"
                        variant="outline"
                    >
                        <UIcon
                            :name="item.icon"
                            class="text-2xl flex-shrink-0"
                        />
                        <div>
                            <div class="font-medium text-lg">{{ item.title }}</div>
                            <div class="text-sm text-gray-500">{{ item.description }}</div>
                        </div>
                    </UButton>
                </div>
            </div>
        </div>
    </UContainer>
</template>

<script setup>
import { ref, computed } from 'vue';

const searchQuery = ref('');

const menuItems = [
    {
        title: 'Transport Card',
        path: '/key-info/transport-card',
        icon: 'i-heroicons-credit-card',
        description: 'Student transport card information and processes',
    },
    {
        title: 'Campus Codes',
        path: '/key-info/campus-codes',
        icon: 'i-heroicons-building-office-2',
        description: 'Reference for campus identification codes',
    },
    {
        title: 'Subject Codes',
        path: '/key-info/subject-codes',
        icon: 'i-heroicons-academic-cap',
        description: 'List of subject codes and their meanings',
    },
    {
        title: 'Banner Codes',
        path: '/key-info/banner-codes',
        icon: 'i-heroicons-code-bracket',
        description: 'Reference for banner system codes',
    },
    {
        title: 'Key Dates',
        path: '/key-info/key-dates',
        icon: 'i-heroicons-calendar',
        description: 'Important academic dates and deadlines',
    },
];

const filteredMenuItems = computed(() => {
    if (!searchQuery.value) return menuItems;
    const query = searchQuery.value.toLowerCase();
    return menuItems.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
});

useHead({
    title: 'Key Information',
})
</script>

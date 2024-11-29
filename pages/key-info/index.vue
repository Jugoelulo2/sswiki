<template>
    <UContainer>
        <h1 class="text-center text-2xl font-bold mb-6">Key Information</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="keyInfo in keyInfoList" :key="keyInfo.id" class="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <UButton :to="`/key-info/${keyInfo.slug}`" class="w-full">{{ keyInfo.title }}</UButton>
            </div>
        </div>
    </UContainer>
</template>


<script setup>
const { pb } = usePocketBase();
const keyInfoList = await pb.collection("key_info").getFullList();
</script>

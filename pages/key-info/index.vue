<template>
    <UContainer>
        <h1 class="text-center text-2xl font-bold">Key Information</h1>
        <ul class="space-y-4">
        <li v-for="keyInfo in keyInfoList" :key="keyInfo.id" class="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <UButton :to="`/key-info/${keyInfo.slug}`">{{ keyInfo.title }}</UButton>
            </li>
        </ul>
    </UContainer>
</template>


<script setup>
const pb = usePocketBase()
const keyInfoList = await pb.collection('key_info').getFullList()
</script>
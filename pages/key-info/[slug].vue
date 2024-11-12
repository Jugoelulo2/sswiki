<template>
    <UContainer>
        <h1 class="text-center text-2xl font-bold">{{ keyInfo.title }}</h1>
        <div class="flex justify-center">
            <div v-html="keyInfo.content" class="prose w-full"></div>
        </div>

    </UContainer>
 

    
</template>





<script setup>
const route = useRoute()
const slug = route.params.slug
const pb = usePocketBase()
const keyInfo = await pb.collection('key_info').getFirstListItem(`slug = "${slug}"`)

// Function to get the full image URL
const getImageUrl = (fileName) => {
    return `${pb.baseUrl}/api/files/key_info/${keyInfo.id}/${fileName}`
}
</script>



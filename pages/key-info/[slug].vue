<template>
    <h1 class="text-center text-2xl font-bold">{{ keyInfo.title }}</h1>
    <img :src="getImageUrl(keyInfo.image)" alt="Key Information Image" class="w-5/6 h-auto mx-auto">
    <div v-html="keyInfo.content" class="table-auto"></div>
 

    
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



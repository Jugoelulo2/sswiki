<template>
    <div class="container mx-auto px-4 py-6" v-if="process">
        <!-- Header Section -->
        <h1 class="text-center text-2xl font-bold mb-6">{{ process.title }}</h1>

        <!-- Main Content Section -->
        <div class="flex flex-col gap-6">
            <!-- Process Info -->
            <div class="bg-gray-50 rounded-lg p-6">
                <div class="mb-4">
                    <span class="font-semibold">Student Type:</span>
                    <span class="ml-2">{{ process.student_type }}</span>
                </div>
                
                <div v-html="process.content" class="prose"></div>
            </div>

            <!-- Action Buttons Section -->
            <div class="flex flex-col gap-4">
                <!-- AP Buttons -->
                <div v-if="process.AP_required" class="flex justify-end">
                    <CoeAP v-if="process.ap_note === 'coe'" class="w-full sm:w-auto"/>
                    <LoaAP v-if="process.ap_note === 'loa'" class="w-full sm:w-auto"/>
                    <CtAP v-if="process.ap_note === 'ct'" class="w-full sm:w-auto"/>
                    <FCAP v-if="process.ap_note === 'fc'" class="w-full sm:w-auto"/>
                </div>

                <!-- Policy Button -->
                <UButton 
                    target="_blank" 
                    :to="process.policy"
                    class="w-24"
                >
                    View Policy
                </UButton>
            </div>
        </div>
    </div>
</template>
<script setup>
import CoeAP from '~/components/APs/CoeAP.vue';
import CtAP from '~/components/APs/CtAP.vue';
import FCAP from '~/components/APs/FCAP.vue';
import LoaAP from '~/components/APs/LoaAP.vue';

const route = useRoute()
const slug = route.params.slug
const pb = usePocketBase()
const process = await pb.collection('processes').getFirstListItem(`slug = "${slug}"`)
</script> 

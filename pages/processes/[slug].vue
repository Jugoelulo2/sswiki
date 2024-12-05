<template>
    <div class="container mx-auto px-8 py-6 max-w-3xl" dark:bg-gray-900 v-if="process">
        <!-- Header Section -->
        <h1 class="text-center text-2xl font-bold mb-6 dark:text-gray-300">{{ process.title }}</h1>

        <!-- Main Content Section -->
        <div class="flex flex-col gap-6 dark:bg-gray-900">
            <!-- Process Info -->
            <div class="bg-gray-50 rounded-lg p-6 dark:bg-gray-800 ">
                <UTabs :items="[
                    {
                        label: 'International Students',
                        content: process.content
                    },
                    {
                        label: 'Domestic Students',
                        content: process.domestic_process
                    }
                ]">
                    <template #item="{ item }">
                        <div v-html="item.content" class="prose dark:prose-invert max-w-3/4 mx-auto"></div>
                    </template>
                </UTabs>
            </div>

            <!-- Action Buttons Section -->
            <div class="flex flex-col gap-4">
                <!-- AP Buttons -->
                <div class="flex justify-end gap-2">
                    <CoeAP v-if="process.ap_note === 'coe'" class="w-full sm:w-auto"/>
                    <LoaAP v-if="process.ap_note === 'loa'" class="w-full sm:w-auto"/>
                    <CtAP v-if="process.ap_note === 'ct'" class="w-full sm:w-auto"/>
                    <FCAP v-if="process.ap_note === 'fc'" class="w-full sm:w-auto"/>
                    <ScAP v-if="process.ap_note === 'sc'" class="w-full sm:w-auto"/>
                    <AcAP v-if="process.ap_note === 'ac'" class="w-full sm:w-auto"/>
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
    </div>
</template>
<script setup>
import CoeAP from '~/components/APs/CoeAP.vue';
import CtAP from '~/components/APs/CtAP.vue';
import FCAP from '~/components/APs/FCAP.vue';
import LoaAP from '~/components/APs/LoaAP.vue';
import ScAP from '~/components/APs/ScAP.vue';
import AcAP from '~/components/APs/AcAP.vue';

const route = useRoute()
const slug = route.params.slug
const {pb} = usePocketBase()
const process = await pb.collection('processes').getFirstListItem(`slug = "${slug}"`)
</script> 

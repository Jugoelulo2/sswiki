<template>
    <div v-if="status === 'pending'" class="container mx-auto px-8 py-6 max-w-3xl">
        <!-- Skeleton Header -->
        <USkeleton class="h-8 w-64 mx-auto mb-6"/>
        
        <!-- Skeleton Main Content -->
        <div class="flex flex-col gap-6">
            <div class="bg-gray-50 rounded-lg p-6 dark:bg-gray-800">
                <!-- Skeleton Tab Content -->
                <div class="space-y-4">
                    <USkeleton class="h-6 w-full" />
                    <USkeleton class="h-4 w-3/4" />
                    <USkeleton class="h-4 w-5/6" />
                    <USkeleton class="h-4 w-2/3" />
                </div>
            </div>
            
            <!-- Skeleton Action Buttons -->
            <div class="flex justify-end gap-2">
                <USkeleton class="h-10 w-24" />
                <USkeleton class="h-10 w-24" />
            </div>
        </div>
    </div>
    <div v-else-if="status === 'error'">
        <p>Error: {{ error }}</p>
    </div>
    <div v-else-if="process" class="container mx-auto px-8 py-6 max-w-3xl" dark:bg-gray-900 >
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

import { useQuery } from '@tanstack/vue-query'

const route = useRoute()
const slug = route.params.slug
const {pb} = usePocketBase()
const { status, data: process, error } = useQuery({ queryKey: ['process', slug], queryFn: () => pb.collection('processes').getFirstListItem(`slug = "${slug}"`) })

</script> 

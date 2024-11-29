<template>
      <UButton 
        label="AP Note" 
        @click="isOpen = true" 
        />

      <UModal v-model="isOpen" class="dark:bg-gray-900">
            <UCard class="dark:bg-gray-900" >
                <template #header>
                    <h3 class="text-xl font-semibold">AP Note</h3>
                </template> 

                <div class="space-y-5 flex flex-col">
                    
                    <!-- Reason -->
                    <UFormGroup label="Reason" required 
                        description="Describe the reason for the request">
                        <UTextarea 
                        autoresize
                        v-model="reason" 
                        :rows="2" />
                    </UFormGroup>

                    <!-- Subjects to be re-credited -->
                    <UFormGroup label="Subjects to be Re-credited" required>
                        <UTextarea 
                        autoresize
                        v-model="subjects" 
                        :rows="2" />
                    </UFormGroup>

                    <div class="flex gap-4 justify-end mt-4">
                        <UTextarea 
                        autoresize
                        class="flex-grow "
                        v-model="formattedOutput" />
                        <UButton 
                        class="self-end" variant="solid" @click="handleCopy">Copy</UButton>
                    </div>
                </div>
                    
            </UCard>
        </UModal>
</template>

<script setup>
import { ref, computed } from 'vue';
const isOpen = ref(false);
const subjects = ref([]);
const reason = ref('');
const formattedOutput = computed(() => {
    return `Admin Change Request Summary

    Reason: ${reason.value}

    Subjects to be Re-credited: ${subjects.value.join(', ')}`;
});

const handleCopy = () => {
    navigator.clipboard.writeText(formattedOutput.value);
};
</script>

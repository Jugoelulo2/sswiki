<template>
  <UButton 
    label="SC Note" 
    variant="solid" 
    @click="isOpen = true" 
  />
  <UModal v-model="isOpen" class="dark:bg-gray-900">
    <UCard class="dark:bg-gray-900">
      <template #header>
        <h1 class="text-2xl font-bold">Special Circumstances Note</h1>
      </template>
      <div class="space-y-6 flex flex-col dark:bg-gray-900">
        <div class="bg-gray-50 p-8 rounded-lg space-y-6 dark:bg-gray-800">
          <!-- Subjects -->
          <UFormGroup label="The subjects that the student is requesting a refund/re-credit are:" required>
            <UTextarea
              v-model="subjects"
              placeholder="List all subjects with CRN"
              autoresize
              :rows="2"
            />
          </UFormGroup>

          <!-- Request Type -->
          <UFormGroup label="Request Type" required>
            <USelectMenu
              v-model="requestType"
              :options="[
                { label: 'Re-credit', value: 're-credit' },
                { label: 'Refund to nominated bank account', value: 'refund' }
              ]"
              placeholder="Select request type"
              option-attribute="label"
              value-attribute="value"
            />
          </UFormGroup>

          <!-- Circumstances -->
          <UFormGroup label="Circumstances/Reason for request" required>
            <UTextarea
              autoresize
              :rows="2"
              v-model="circumstances"
              placeholder="Explain the circumstances/reason for request. Include any relevant dates, times, etc."
            />
          </UFormGroup>

      

          <!-- Supporting Documentation -->
          <UFormField label="Supporting Documentation" required>
            <div class="space-y-3 pt-3">
              <UCheckbox
                v-model="docs.application"
                label="Application Form"
              />
              <UCheckbox
                v-model="docs.supporting"
                label="Supporting Documentation"
              />
              <UCheckbox
                v-model="docs.statement"
                label="Statement"
              />
            </div>
          </UFormField>

          <!-- Investigation -->
          <UFormGroup label="Investigation" required>
            <UTextarea
              autoresize
              :rows="2"
              v-model="investigation"
              placeholder="Enter investigation findings and relevant discussions you found."
            />
          </UFormGroup>

          <!-- Recommendation -->
          <UFormGroup label="Recommendation" required>
            <UTextarea
              autoresize
              :rows="2"
              v-model="recommendation"
              placeholder="Enter recommendation with policy reference"
            />
          </UFormGroup>
        </div>

        <div class="flex gap-4">
          <UTextarea class="flex-grow" v-model="formattedOutput" rows="10" />
          <UButton class="self-end" @click="copyToClipboard">Copy</UButton>
        </div>
      </div>
    </UCard>
  </UModal>
</template>

<script setup>
import { useClipboard } from '@vueuse/core'

const isOpen = ref(false)
const subjects = ref('')
const requestType = ref('')
const circumstances = ref('')
const timing = ref('')
const impact = ref('')
const investigation = ref('')
const recommendation = ref('')
const docs = ref({
  application: false,
  supporting: false,
  statement: false
})

const formattedOutput = computed(() => {
  const requestTypes = {
    'refund': 'a refund to nominated bank account',
    're-credit': 'a re-credit'
  }

  const formatDocs = Object.entries(docs.value)
    .map(([key, value]) => `- ${key.charAt(0).toUpperCase() + key.slice(1)}: ${value ? "✓" : "✗"}`)
    .join("\n")

  return `Student is applying for Special Circumstances Refund Post Census.

Subjects requesting refund/re-credit:
${subjects.value}

The student is requesting ${requestTypes[requestType.value] || ''}

Circumstances:
${circumstances.value}

Supporting Documentation:
${formatDocs}

Investigation:
${investigation.value}

Recommendation:
${recommendation.value}`
})

const { copy } = useClipboard()
const toast = useToast();
 
function copyToClipboard() {
  copy(formattedOutput.value)
    .then(() => {
      toast.add({
        title: "Copied to clipboard",
        description: "The note has been copied to your clipboard.",
        icon: "i-heroicons-clipboard-document-check",
        color: "green",
      });
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
      toast.add({
        title: "Failed to copy",
        description: "An error occurred while copying to clipboard.",
        icon: "i-heroicons-exclamation-triangle",
        color: "red",
      });
    });
}
</script>
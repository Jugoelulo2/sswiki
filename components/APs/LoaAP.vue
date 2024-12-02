<template>
  <UButton 
    label="LoA Note" 
    variant="solid" 
    @click="isOpen = true" 
  />
  <UModal v-model="isOpen" class="dark:bg-gray-900">
    <UCard class="dark:bg-gray-900">
      <template #header>
        <h1 class="text-2xl font-bold">Leave of Absence Note</h1>
      </template>
      <div class="space-y-6 flex flex-col dark:bg-gray-900">
        <div class="bg-gray-50 p-8 rounded-lg space-y-6 dark:bg-gray-800">
          <!-- Application Date and Census Status -->
          <div class="grid grid-cols-2 gap-4">
            <UFormGroup label="Application Date" required>
              <UInput v-model="applicationDate" type="date" />
            </UFormGroup>
            <UFormGroup label="Census Status" required>
              <USelect
                v-model="censusStatus"
                :options="['Pre-census', 'Post-census']"
              />
            </UFormGroup>
          </div>

          <!-- Student Awareness -->
          <UFormGroup label="Is student aware of financial and/or academic liability?" required>
            <USelect
              v-model="studentAware"
              :options="['Yes', 'No']"
            />
          </UFormGroup>

          <!-- Leave Dates -->
          <div class="grid grid-cols-2 gap-4">
            <UFormGroup label="Leave Start Date" required>
              <UInput v-model="leaveStartDate" type="date" />
            </UFormGroup>
            <UFormGroup label="Return Date" required>
              <UInput v-model="returnDate" type="date" />
            </UFormGroup>
          </div>

          <!-- Previous Leave -->
          <UFormGroup label="Has the student previously taken a leave of absence?" required>
            <USelect
              v-model="previousLeave"
              :options="['Yes', 'No']"
            />
          </UFormGroup>

          <UFormGroup 
            label="Does the prior leave exceed 12 months?" 
            v-if="previousLeave === 'Yes'"
          >
            <USelect
              v-model="exceedsTwelveMonths"
              :options="['Yes', 'No']"
            />
          </UFormGroup>

          <!-- Supporting Documentation -->
          <UFormGroup
            label="Supporting Documentation"
            description="Add documentation that has been provided"
          >
            <div class="space-y-4">
              <div class="flex gap-2">
                <UInput
                  v-model="newDocument"
                  placeholder="Enter document name"
                  class="flex-grow"
                  @keyup.enter="addDocument"
                />
                <UButton
                  icon="i-heroicons-plus"
                  color="primary"
                  variant="soft"
                  @click="addDocument"
                  :disabled="!newDocument"
                />
              </div>
              <ul v-if="documents.length" class="space-y-2 p-2">
                <li
                  v-for="(doc, index) in documents"
                  :key="index"
                  class="flex items-center gap-2 p-2 bg-[var(--ui-bg-elevated)] rounded-lg"
                >
                  <span class="flex-grow">{{ doc }}</span>
                  <UButton
                    icon="i-heroicons-trash"
                    color="error"
                    variant="ghost"
                    size="sm"
                    @click="removeDocument(index)"
                  />
                </li>
              </ul>
            </div>
          </UFormGroup>

          <!-- Recommendation -->
          <UFormGroup label="Recommendation" required>
            <UTextarea
              autoresize
              :rows="2"
              v-model="recommendation"
              placeholder="Enter recommendation based on policy"
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
const applicationDate = ref('')
const censusStatus = ref('')
const studentAware = ref('')
const leaveStartDate = ref('')
const returnDate = ref('')
const previousLeave = ref('')
const exceedsTwelveMonths = ref('')
const recommendation = ref('')
const newDocument = ref('')
const documents = ref([])

const addDocument = () => {
  if (newDocument.value.trim()) {
    documents.value.push(newDocument.value)
    newDocument.value = ''
  }
}

const removeDocument = (index) => {
  documents.value.splice(index, 1)
}

const formattedOutput = computed(() => {
  const formatDate = (date) => date ? new Date(date).toLocaleDateString() : 'Not specified'

  return `Student is wishing to take a Leave of Absence.

Application has been received on ${formatDate(applicationDate.value)} and is ${censusStatus.value || 'not specified'}.

Is student aware of financial and/or academic liability?: ${studentAware.value || 'Not specified'}

Leave to start from ${formatDate(leaveStartDate.value)} with student returning ${formatDate(returnDate.value)}

Has the student previously taken a leave of absence?: ${previousLeave.value || 'Not specified'}
${previousLeave.value === 'Yes' ? `\nDoes the prior leave exceed 12 months?: ${exceedsTwelveMonths.value || 'Not specified'}` : ''}

Supporting Documentation:
${documents.value.length ? documents.value.map(doc => `- ${doc}`).join('\n') : 'None provided'}

Recommendation:
${recommendation.value || 'No recommendation provided'}`
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
<template>    
  <UButton 
    label="AP Notes"
    variant="solid"
    @click="isOpen = true"
  />
  <UModal v-model="isOpen">
    <UCard>
        <template #header>
          <h3 class="text-xl font-semibold">AP Notes</h3>
        </template>
        <div class="space-y-6 flex flex-col">       

          <!-- Date application submitted & Student Status -->
          <div class="grid grid-cols-2 gap-4">
            <UFormGroup label="Date application submitted">
              <UInput v-model="formState.dateSubmitted" type="date" />
            </UFormGroup>

            <UFormGroup label="Student Status">
              <USelect
                v-model="formState.studentStatus"
              :options="['New Student', 'Continuing Student']"
              />
            </UFormGroup>
          </div>

          <!-- Has the student applied for specific course credit? -->
          <UFormGroup label="Has the student applied for specific course credit?">
            <USelect
              v-model="formState.hasAppliedCredit"
              :options="['Yes', 'No']"
            />
          </UFormGroup>

          <!-- Specify subjects -->
          <UFormGroup 
            label="Specify subjects"
            v-if="formState.hasAppliedCredit === 'Yes'"
          >
            <UTextarea
              autoresize
              :rows="2"
              v-model="formState.subjects"
              placeholder="List the subjects here"
            />
          </UFormGroup>

          <!-- Is student currently enrolled in any of these subjects? -->
          <UFormGroup label="Is student currently enrolled in any of these subjects?">
            <USelect
              v-model="formState.isEnrolled"
              :options="['Yes', 'No']"
            />
          </UFormGroup>

          <!-- Required Documents -->
          <h4 class="font-semibold mb-2">Required Documents</h4>
          <UFormGroup>
            <div class="space-y-2 pl-4">
              <UCheckbox v-model="formState.courseCreditForm" label="Course Credit Form" />
              <UCheckbox v-model="formState.transcript" label="Official Academic Transcript" />
              <UCheckbox v-model="formState.subjectOutlines" label="Subject Outlines" />
            </div>
          </UFormGroup>
        </div>
        <div class="flex flex-col gap-4 mt-4">
          <UTextarea v-model="formattedOutput" rows="10" />
          <UButton class="self-end" @click="handleCopy">Copy</UButton>
        </div>
      </UCard>
    </UModal>
</template>

<script setup>
import { useClipboard } from '@vueuse/core'
const isOpen = ref(false)

const formState = ref({
  dateSubmitted: '',
  studentStatus: '',
  hasAppliedCredit: '',
  subjects: '',
  isEnrolled: '',
  courseCreditForm: false,
  transcript: false,
  subjectOutlines: false
})

const formattedOutput = computed(() => {
  const formatDate = (date) => date ? new Date(date).toLocaleDateString() : 'Not specified'
  const formatYesNo = (value) => value || 'Not specified'
  const formatDocs = {
    'Course Credit Form': formState.value.courseCreditForm ? '✓' : '✗',
    'Official Academic Transcript': formState.value.transcript ? '✓' : '✗',
    'Subject Outlines': formState.value.subjectOutlines ? '✓' : '✗'
  }

  return `Date application submitted: ${formatDate(formState.value.dateSubmitted)}

Continuing or new student?: ${formatYesNo(formState.value.studentStatus)}

Has the student applied to be granted course credit for specific subjects?: ${formatYesNo(formState.value.hasAppliedCredit)}
${formState.value.hasAppliedCredit === 'Yes' ? `\nSpecify these subjects: ${formState.value.subjects || 'None specified'}` : ''}

Is the student currently enrolled in any of these subjects?: ${formatYesNo(formState.value.isEnrolled)}

Required Documents:
${Object.entries(formatDocs).map(([doc, status]) => `${doc}: ${status}`).join('\n')}`
})

const { copy } = useClipboard()

const handleCopy = () => {
  copy(formattedOutput.value)
}
</script>
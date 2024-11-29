<template>
  <UButton
    label="AP Note"
    variant="solid"
    @click="isOpen = true"
  />
  <UModal v-model="isOpen" class="dark:bg-gray-900">
    <UCard class="dark:bg-gray-900" >
      <template #header>
        <h1 class="text-2xl font-bold">AP Notes</h1>
      </template>
      <div class="space-y-6 flex flex-col">
        <div class="space-y-6 flex flex-col">

          <!-- Reason for CoE Change -->
          <UFormGroup label="Reason for CoE Change" required>
            <UTextarea
              autoresize
              :rows="2"
              v-model="reason"
              placeholder="Enter the reason for CoE change"
            />
          </UFormGroup>

        <!-- Subjects & Trimesters -->
        <div class="grid grid-cols-2 gap-4">
          <UFormGroup label="Number of subjects left to complete" required>
            <UInput v-model="subjectsLeft" type="number" min="0" />
          </UFormGroup>

          <UFormGroup label="Number of trimesters left to complete course" required>
            <UInput v-model="trimestersLeft" type="number" min="0" />
          </UFormGroup>
        </div>

        <!-- Dates -->
        <div class="grid grid-cols-2 gap-4">
          <UFormGroup label="Date current CoE expires" required>
            <UInput v-model="currentCoeExpiry" type="date" />
          </UFormGroup>

          <UFormGroup label="New course finish date" required>
            <UInput v-model="newFinishDate" type="date" />
          </UFormGroup>
        </div>

        <!-- Supporting Documentation -->
        <UFormField label="Supporting Documentation" class="mt-6">
          <div class="space-y-3">
            <UCheckbox
              v-model="docs.passport"
              label="Copy of Passport"
              required
            />
            <UCheckbox
              v-model="docs.visa"
              label="Copy of Visa"
              required
            />
            <UCheckbox 
              v-model="docs.coeForm" 
              label="CoE Form" 
              required 
            />
            <UCheckbox
              v-model="docs.statement"
              label="Student Statement"
              required
            />
            <UCheckbox
              v-model="docs.mapping"
              label="Mapping of Subjects"
              required
            />
          </div>
        </UFormField>
        </div>
      <div class="flex flex-col gap-4">
        <UTextarea v-model="formattedOutput" rows="10" />
        <UButton class="self-end" @click="handleCopy">Copy</UButton>
        </div>
      </div>
    </UCard>
  </UModal>
</template>

<script setup>
import { useClipboard } from "@vueuse/core";

const isOpen = ref(false);

const reason = ref("");
const subjectsLeft = ref(null);
const trimestersLeft = ref(null);
const currentCoeExpiry = ref("");
const newFinishDate = ref("");
const docs = ref({
  passport: false,
  visa: false,
  coeForm: false,
  statement: false,
  mapping: false,
});

const formattedOutput = computed(() => {
  const formatDate = (date) =>
    date ? new Date(date).toLocaleDateString() : "Not specified";
  
  const docLabels = {
    passport: 'Passport',
    visa: 'Visa',
    coeForm: 'CoE Form',
    statement: 'Personal Statement',
    mapping: 'Mapping'
  };

  const formatDocs = Object.entries(docs.value)
    .map(([key, value]) => `- ${docLabels[key]}: ${value ? "✓" : "✗"}`)
    .join("\n");

  return `Reason for CoE Change:
${reason.value || "Not specified"}

Number of subjects left to complete: ${subjectsLeft.value || "Not specified"}

Number of trimesters left to complete course: ${
    trimestersLeft.value || "Not specified"
  }

Date current CoE expires: ${formatDate(currentCoeExpiry.value)}

New course finish date: ${formatDate(newFinishDate.value)}

Supporting Documentation:
${formatDocs}`;
});
const { text, copy, copied, isSupported } = useClipboard();
const handleCopy = () => {
  copy(formattedOutput.value);
};
</script>

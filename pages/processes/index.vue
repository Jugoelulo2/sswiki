<template>
  <h1 class="text-2xl font-bold pt-6 my-2 text-center">Processes</h1>

  <div class="container mx-auto mt-8 px-4 max-w-3xl" >
    <div
      class="mb-6 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:space-x-4 dark:text-gray-300"
    >
      <div class="flex-1">
        <UInput
          v-model="searchQuery"
          type="text"
          placeholder="Search processes..."
        />
      </div>
    </div>

    <ul v-auto-animate v-if="filteredProcesses" class="space-y-4">
      <li
        v-for="process in filteredProcesses"
        :key="process.id"
        class="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-stone-50 dark:bg-gray-800"
      >
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-semibold">{{ process.title }}</h2>
          <div class="flex gap-2">
            <UButton :to="`/processes/${process.slug}`">View</UButton>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { pb } = usePocketBase();

const processes = await pb.collection("processes").getFullList({
  sort: "-created",
});

const searchQuery = ref("");


const filteredProcesses = computed(() => {
  return processes.filter((process) => {
    const matchesSearch = process.title
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());

    return matchesSearch;
  });
});

const generateSlug = (name) => {
  return name.toLowerCase().replace(/\s+/g, "-");
};
</script>

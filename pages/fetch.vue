<template>
  <div class="w-full h-full items-center justify-center">
    <div>
      <div class="flex gap-10">
        <button
          @click="fetchData"
          class="px-5 py-2 border-2 border-emerald-500 rounded-md flex items-center justify-center"
        >
          Fetch
        </button>
        <button
          @click="fetchCount"
          class="px-5 py-2 border-2 border-emerald-500 rounded-md flex items-center justify-center"
        >
          Fetch Count
        </button>
        <button
          @click="refreshCount"
          class="px-5 py-2 border-2 border-emerald-500 rounded-md flex items-center justify-center"
        >
          Refresh
        </button>
      </div>
      <div
        class="max-h-56 p-5 overflow-y-auto border border-emerald-500 rounded-md mt-5"
      >
        <pre>{{ isPending ? 'Loading...' : data }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({});
const data = ref<any>(null);
const isPending = ref<any>(false);
onBeforeMount(async () => {
  const res = await useFetch('/api/hello', {
    transform: (e) => {
      return e.hello + ' - ' + 'Fetch Before Mounted';
    },
  });
  /* config ssr = false */
  data.value = res.data.value;
});
const fetchData = async () => {
  const res = await useFetch('/api/hello', {
    transform: (e) => {
      console.log(e);
      return e.hello + ' - ' + 'After Transform';
    },
  });
  data.value = res.data.value;
};
const fetchCount = async () => {
  isPending.value = true;

  const { pending, data: countValue } = await useAsyncData('counts', () =>
    $fetch('/api/count'),
  );

  data.value = countValue.value;
  isPending.value = pending.value;
};
const refreshCount = async () => {
  isPending.value = true;
  await refreshNuxtData('counts');
  isPending.value = false;
};
</script>

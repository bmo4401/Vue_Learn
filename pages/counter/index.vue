<script setup lang="ts">
const color = useColor();
const { data } = await useFetch('/api/hello');
console.log('❄️ ~ file: index.vue:4 ~ data:', data);
</script>

<template>
  <p
    :style="{
      color,
    }"
  >
    Current color: {{ color }}
  </p>
  <pre>{{ data }}</pre>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'custom',
});
const { $sayHello } = useNuxtApp();
$sayHello('Hai');
</script>
<template>
  <div class="Home Page">
    <h2><Alert /></h2>
    <ContentDoc />
  </div>
</template>

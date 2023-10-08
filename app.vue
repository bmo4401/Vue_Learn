<script setup></script>
<template>
  <div class="bg-slate-900 h-screen p-8 text-white">
    <NuxtLayout>
      <header class="Main">
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
        </ul>
      </header>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

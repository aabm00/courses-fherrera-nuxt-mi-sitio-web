import { NuxtPage } from '../../.nuxt/components';

<script setup lang="ts">
  definePageMeta({
    layout: 'dashboard-layout'
  })
</script>

<template>
    <div>
        <h3>Hola mundo - Dashboard Page</h3>
        <NuxtPage />
    </div>
</template>
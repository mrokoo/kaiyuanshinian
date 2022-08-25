<script setup lang="ts">
  Tools.LocalStorage.setItem('test','dff')
  
</script>

<template>
  <h1>{{ app.getConfig('baseUrl') }}</h1>
  <h2>{{ Tools.LocalStorage.getItem('test')}}</h2>
</template>

<style scoped>
  h1 {
    display: flex;
  }
</style>

<script setup lang="ts">
  Tools.LocalStorage.setItem('test','dff')
  
</script>

<template>
  <h1>{{ app.getConfig('baseUrl') }}</h1>
  <h2>{{ Tools.LocalStorage.getItem('test')}}</h2>
  <h1>{{ lpk('Type', {index: 2}) }}</h1>
  <h1>{{ lpk('Index') }}</h1>
  <h3>{{ lpk('Blog') }}</h3>
</template>

<style scoped>
  h1 {
    display: flex;
  }
</style>

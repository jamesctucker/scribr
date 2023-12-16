<script setup lang="ts">
const handleSubmit = async () => {
  const response = await useFetch("/api/feed");

  console.log(response.data.value);
};
</script>

<template>
  <h1>Scribr</h1>
  <button @click="handleSubmit">Click</button>
</template>

<script setup>

const props = defineProps(['cardData']);
</script>

<template>
    <ACard hoverable style="width: 240px" class="card-style">
      <template #cover>
        <img alt="example" :src="cardData.url" />
      </template>
      <ACardMeta :title="cardData.username">
        <template #description>{{ cardData.caption }}</template>
      </ACardMeta>
    </ACard>
  </template>
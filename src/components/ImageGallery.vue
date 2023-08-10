<script setup>
const props = defineProps(['images']);

</script>

<template>
    <div class="image-gallery-container">
        <img 
        v-for="image in props.images" 
        :key="image.id" 
        :src="image.image" alt=""
         />
    </div>
</template>
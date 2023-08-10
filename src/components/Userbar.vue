<script setup>
    const props = defineProps(['username','userinfo']);
</script>

<template>
    <div class="userbar-container">
            <div class="top-content ">
                <ATypographyTitle :level="2">{{ props.username }}</ATypographyTitle>
            </div>
            <div class="bottom-content">
                <ATypographyTitle :level="5">{{ props.userinfo.post }} posts</ATypographyTitle>
                <ATypographyTitle :level="5">{{ props.userinfo.followers }} followers</ATypographyTitle>
                <ATypographyTitle :level="5">{{ props.userinfo.following }} following</ATypographyTitle>
            </div>
    </div>
</template>
<script setup>
import Container from './Container.vue';
import ImageGallery from './ImageGallery.vue';
import userBar from './Userbar.vue';
</script>

<template>
    <Container>
        <div class="profile-container">
            <userBar
            username="selena"
            :userinfo="{
                post:5,
                followers:100,
                following:46
            }"
            />
           <ImageGallery :images="[{
            id:1,
            image:'https://picsum.photos/id/237/536/354'
           }]" />
        </div>
    </Container>
</template>
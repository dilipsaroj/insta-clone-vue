<script setup>
import Card from './Card.vue';
import Container from './Container.vue';

const tempData = [
    {
        id:1,
        username:"Selena ",
        url:"https://yt3.googleusercontent.com/lwPYJMKoTNR2hs_hrXRFcTy0aQteNHEJnGwyfp0cwvjhJVZW6HWa6CTm_Bf99Y71U2V_FZMZenQ=s900-c-k-c0x00ffffff-no-rj",
        caption:""
    },
    {
        id:2,
        username:"Taylor ",
        url:"https://media.cnn.com/api/v1/images/stellar/prod/230316152511-01-taylor-swift-0205.jpg?c=3x2",
        caption:"Hey whatsappp!!!!"
    },

]
</script>

<template>
    <Container>
        <div class="timeline-container">
            <Card v-for="item in tempData" :key="item.id" :cardData="item" />
        </div>
    </Container>
</template>
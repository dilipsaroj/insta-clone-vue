<script setup>
import { RouterLink,useRouter } from 'vue-router';
import container from './Container.vue'
import { ref } from 'vue';
import AuthModal from './AuthModal.vue';

const userName = ref("");
const isAuthenticated = ref(false)
const router = useRouter()
const onSearch = () => {
    if(userName.value){
        router.push(`/profile/${userName.value}`);
        userName.value = "";
    }
};
</script>

<template>
    <ALayoutHeader>
        <container>
            <div class="nav-container">
                <div class="left-content">
                    
                <RouterLink to="/">Insta</RouterLink>
                <AInputSearch v-model:value="userName" placeholder="user name" style="width: 200px" @search="onSearch" />
            </div>
            <div class="right-content" v-if="!isAuthenticated">
                <AuthModal :isLogin="false" />
                <AuthModal :isLogin="true"/>
            </div>   
            <div class="right-content" v-else>
                <!--<AuthModal :isLogin="false" />
                <AuthModal :isLogin="true"/> -->
                <AButton type="primary">Profile</AButton>
                <AButton type="primary">Logout</AButton>
            </div>  
            </div>
        </container>

    </ALayoutHeader>
</template>
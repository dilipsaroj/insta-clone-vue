<script setup>
import { ref, reactive } from 'vue';
import { useUserStore } from '../stores/users';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { errorMessage, loading, user } = storeToRefs(userStore);

const open = ref(false);
const userCredentials = reactive({
  email: "",
  password: "",
  username: ""
})
const props = defineProps(['isLogin'])
const showModal = () => {
  open.value = true;
};

const clearUserCred = ()=>{
  userCredentials.email = "",
    userCredentials.username = '',
    userCredentials.password = '',
    userStore.clearErrorMessage()
}
const handleOk = async (e) => {
  if(props.isLogin){
    await  userStore.handleLogin({
      password:userCredentials.password,
      email:userCredentials.email
    })
  }
  else{
    await  userStore.handleSignup(userCredentials)
  }
// await  userStore.handleSignup(userCredentials)
  if(user.value){
    clearUserCred();
    visible.value = false
  }
};

const handleCancel = () => {
  clearUserCred();
  open.value = false;
}
const title = props.isLogin ? "Login" : "SignUp";  
</script>

<template>
  <div>
    <AButton type="primary" @click="showModal">{{ title }}</AButton>
    <AModal v-model:open="open" :title="title" @ok="handleOk">
      <template #footer>
        <AButton key="back" @click="handleCancel">Cancel</AButton>
        <AButton key="submit" type="primary" :loading="loading" @click="handleOk">Submit</AButton>
      </template>
      <div v-if="!loading" class="input-container">
        <AInput class="input-style" v-if="!isLogin" v-model:value="userCredentials.username" placeholder="User Name" />
        <AInput class="input-style" v-model:value="userCredentials.email" placeholder="Email" />
        <AInput class="input-style" v-model:value="userCredentials.password" placeholder="Password" type="password" />
      </div>
      <div v-else class="spinner">
        <ASpin />
      </div>
      <ATypographyText v-if="errorMessage" type="danger">{{ errorMessage }}</ATypographyText>
    </AModal>
  </div>
</template>

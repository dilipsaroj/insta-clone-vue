import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {supabase} from '../supabase'

export const useUserStore = defineStore('users', () => {
  const user = ref(null);
  const errorMessage = ref("");
  const loading = ref(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  //login validation
  const handleLogin = async(credentials)=>{

    const {email,password} = credentials;
    
    if(!password.length){
      return errorMessage.value = "password Cannot bt empty"
    }

    if(!validateEmail(email)){
      return errorMessage.value = "Email is in-valid"
    }

    loading.value = true;

    const {error,data} = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if(error){
      loading.value = false;
      return errorMessage.value = error.message
    }

    const {data:existingUser} = await supabase
    .from("users")
    .select() 
    .eq('email',email)
    .single();

    user.value = {
      email:existingUser.email,
      username:existingUser.username,
      id:existingUser.id
    }
    loading.value = false;
    errorMessage.value = ""

  }

  //SignUp validation
  const handleSignup = async (credentials)=>{
    
    const {email,password,username} = credentials;
    if(password.length < 6){
      return errorMessage.value = "password to short"
    }
    if(username.length < 4){
      return errorMessage.value = "user name to short"
    }
    if(!validateEmail(email)){
      return errorMessage.value = "Email is in-valid"
    }
    
    loading.value = true;
    const {data:userWithUsername} = await supabase.from("users")
                                    .select() 
                                    .eq('username',username)
                                    .single();

    if(userWithUsername){
      loading.value = false;
      return errorMessage.value="user already exists";
    }                                
                 
    errorMessage.value="";

   const {data,error} = await supabase.auth.signUp({
      email,
      password
    })

    if(error){
      loading.value = false;
      return errorMessage.value = error.message;
    }


    await supabase.from("users").insert({
      username,
      email
    });
    
    const {data:newUser} = await supabase
    .from("users")
    .select() 
    .eq('email',email)
    .single();

     user.value={
      id:newUser.id,
      email:newUser.email,
      username:newUser.username
     } 
    loading.value = false;
  }

  //Logout 
  const handleLogout = ()=>{
    
  }

  // user Info
  const getUser = ()=>{
    
  }

  const clearErrorMessage = ()=>{
    errorMessage.value=""
  }

  return { user,errorMessage, handleLogin, handleSignup, handleLogout, getUser, clearErrorMessage, loading, user }
})

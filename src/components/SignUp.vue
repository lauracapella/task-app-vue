<template>
  <div>Sign Up</div>
  <form @submit.prevent="userStore.signUp(email,password)">
    <p v-if="userStore.error">{{userStore.error}}</p>
    <input type="text" v-model="email"  placeholder="email">
    <input type="password" v-model="password"  placeholder="password">
    <button type="submit">Register</button>
  </form>
 <h1>User value:{{email}}</h1>
 <h1>Password value:{{password}}</h1>

  <PersonalRouter :route="route" :buttonText="buttonText" />
  
  <p>Good Music, Patience and a lot effort</p>
  <p>Keep calm and code on!</p>
</template>


<script setup>
import PersonalRouter from "./PersonalRouter.vue";
//importación de stores de pinia
import {ref} from "vue";
import { useUserStore } from "../stores/user.js";
//variable para apuntar al store
const userStore = useUserStore();
// Route Variables
const route = "/auth/login";
const buttonText = "Test the Sign In Route";

// Input Fields

const email = ref(null);
const password = ref(null);
//const confirmPassword = ref(null);

// Error Message

// Show hide password variable

// Show hide confrimPassword variable

// Router to push user once SignedUp to Log In

// Arrow function to SignUp user to supaBase with a timeOut() method for showing the error
</script>

<style></style>

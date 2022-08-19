<template>
  <div>Sign Up</div>
  <form @submit.prevent="handleSubmit">
    <input type="email" v-model="email"  placeholder="email">
    <input type="password" v-model="password"  placeholder="password">
    <input type="password" v-model="confirmPassword" placeholder="confrim password">
    <button>Register</button>
  </form>
 
  <PersonalRouter :route="route" :buttonText="buttonText" />
  
  <p>Good Music, Patience and a lot effort</p>
  <p>Keep calm and code on!</p>
</template>


<script setup>
import PersonalRouter from "./PersonalRouter.vue";
import {ref} from "vue";
// Route Variables
const route = "/auth/login";
const buttonText = "Test the Sign In Route";

// Input Fields

const email = ref(null)
const password = ref(null)
const confirmPassword = ref(null)

// Error Message

// Show hide password variable

// Show hide confrimPassword variable

// Router to push user once SignedUp to Log In

// Arrow function to SignUp user to supaBase with a timeOut() method for showing the error
</script>

<style></style>

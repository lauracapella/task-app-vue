<template>
 <div class="max-w-screen-sm mx-auto px-4 py-10">
  <div class="text-3xl text-ta-light-main mb-4">Sign Up</div>
  <!-- Registration form -->
  <form @submit.prevent="userStore.signUp(email,password,confirmPassword)" class="p-8 flex flex-col bg-light-grey rounded-mb shadow-lg">
    <!-- Error Handleing -->
    <div v-if="userStore.error" class="mb-10 p-4 rounded-md bg-light-grey shadow-lg">
      <p class="text-red-500 ">{{userStore.error}}</p>
    </div>

    <!-- Registration inputs -->
    <div class="flex flex-col mb-2">
      <label for="email" class="mb-1 text-sm">Email</label>
        <input type="text" v-model="email" id="email" required class="p-2 focus:outline-none">
    </div>

    <div class="flex flex-col mb-2">
      <label for="password" class="mb-1 text-sm">Password</label>
        <input type="password" v-model="password" id="password" required class="p-2 focus:outline-none">
    </div>

    <div class="flex flex-col mb-2">
      <label for="confirmPassword" class="mb-1 text-sm">Confirmation Password</label>
        <input type="password" v-model="confirmPassword" id="confirmPassword" required class="p-2 focus:outline-none">
    </div>

    <button type="submit" class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-white hover:bg-white  hover:text-at-light-grey">Register</button>

  </form>

  <div class="text-sm mt-6 text-center">
    <PersonalRouter :route="route" :buttonText="buttonText" />
  </div>
  
  </div>
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
const buttonText = "Do you want to login?";

// Input Fields

const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
//const confirmPassword = ref(null);

// Error Message

// Show hide password variable

// Show hide confrimPassword variable

// Router to push user once SignedUp to Log In

// Arrow function to SignUp user to supaBase with a timeOut() method for showing the error
</script>

<style></style>

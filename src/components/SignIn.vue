<template>
<div class="max-w-screen-sm mx-auto px-4 py-10">
   <div class="text-center bg-gray-100">
    <h1 class="text-4xl pt-5 text-gray-500">Welcome to TaskApp</h1>
    <h3 class="text-xl pt-3 text-gray-500">Sign In</h3>
  </div>
   <form @submit.prevent="this.signIn()" class="p-8 flex flex-col bg-grisClaro rounded-mb shadow-lg">
     <div class="flex flex-col mb-2">
      <label for="emaillogin" class="mb-1 text-sm">Email</label>
      <input type="text" v-model="email" id="emaillogin" required class="p-2 focus:outline-none">
   </div>
   <div class="flex flex-col mb-2">
      <label for="passlogin" class="mb-1 text-sm">Password</label>
        <input type="password" v-model="password" required id="passlogin" class="p-2 focus:outline-none">
      </div>
   <button type="submit" class="mt-6 py-2 px-6 self-start text-sm text-white bg-taLightMain duration-200  border-transparent hover:bg-gray-500  hover:text-at-light-grey font-bold rounded-full w-full">Sign In</button>

  </form>
   <div class="text-sm mt-6 text-center">
    <PersonalRouter :route="route" :buttonText="buttonText" />
   </div>
</div>
</template>



<script setup>
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

// Route Variables
const route = "/auth/sign-up";
const buttonText = "Do you want to register?";

// Input Fields
const email = ref("");
const password = ref("");

// Error Message
const errorMsg = ref("");

//Show hide password variables
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);
const hidePassword = ref(true);

// Router to push user once SignedIn to the HomeView
const redirect = useRouter();

// Arrow function to Signin user to supaBase
const signIn = async () => {
  try {
    // calls the user store and send the users info to backend to logIn
    await useUserStore().signIn(email.value, password.value);
    // redirects user to the homeView

    redirect.push({ path: "/" });
  } catch (error) {
    // displays error message
    errorMsg.value = `Error: ${error.message}`;
        console.log('login nain')

    // hides error message
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
</script>

<style>


.form {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
}
.input {
  color: black;
  margin-bottom: 1rem;
}
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>

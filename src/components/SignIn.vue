<template>
  <div>Sign In </div>
   <form @submit.prevent="this.signIn()">
    <input type="text" v-model="email"  placeholder="email">
    <input type="password" v-model="password"  placeholder="password">
    <button type="submit">Login</button>
  </form>
  <h1>{{email.value}}</h1>
  <PersonalRouter :route="route" :buttonText="buttonText" />
  <p>Time to build up the Final Project!</p>
  <p class="wu-text">Wu Tang Forever</p>
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
const buttonText = "Test the Sign Up Route";

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
    console.log('login hola')

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
.wu-text {
  color: black;
}

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

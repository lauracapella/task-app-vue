<template>
  <div>
    <div class="text-center mt-5">
      <h1 class="text-4xl pt-5 text-gray-500">Register to TaskApp</h1>
      <h3 class="text-xl pt-3 text-gray-500">Sign Up</h3>
    </div>
    <div class="max-w-screen-sm mx-auto px-4 py-10">
      <!-- Registration form -->
      <div v-if="errorMsg">
        <h1 class="text-red-500">{{ errorMsg }}</h1>
      </div>
      <form
        @submit.prevent="signUp"
        class="p-8 flex flex-col bg-grisClaro rounded-mb shadow-lg"
      >
        <!-- Registration inputs -->
        <div class="flex flex-col mb-2">
          <label for="email" class="mb-1 text-sm">Email</label>
          <input
            type="text"
            v-model="email"
            id="email"
            required
            class="p-2 focus:outline-none"
          />
        </div>

        <div class="flex flex-col mb-2">
          <label for="password" class="mb-1 text-sm">Password</label>
          <input
            type="password"
            v-model="password"
            id="password"
            required
            class="p-2 focus:outline-none"
          />
        </div>

        <div class="flex flex-col mb-2">
          <label for="confirmPassword" class="mb-1 text-sm"
            >Confirmation Password</label
          >
          <input
            type="password"
            v-model="confirmPassword"
            id="confirmPassword"
            required
            class="p-2 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          class="mt-6 py-2 px-6 self-start text-sm text-white bg-taLightMain duration-200 border-transparent hover:bg-gray-500 hover:text-at-light-grey font-bold rounded-full w-full"
        >
          Register
        </button>
      </form>

      <div class="text-sm mt-6 text-center">
        <PersonalRouter :route="route" :buttonText="buttonText" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PersonalRouter from "./PersonalRouter.vue";
//importación de stores de pinia
import { ref } from "vue";
import { useUserStore } from "../stores/user.js";
import { useRouter } from "vue-router";

//variable para apuntar al store
const userStore = useUserStore();

// Route Variables
const route = "/auth/login";
const buttonText = "Already have an account? Login";

// Input Fields
const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);

// Constant para llamar al metodo useRouter de vue-router que define las redirecciones de la app
const redirect = useRouter();

// Error Message
const errorMsg = ref(null);

// Show hide password variable

// Show hide confrimPassword variable

// Router to push user once SignedUp to Log In

// Arrow function to SignUp user to supaBase with a timeOut() method for showing the error
const signUp = async () => {
  if (password.value === confirmPassword.value) {
    try {
      await useUserStore().signUp(email.value, password.value);
      redirect.push({ path: "/auth/login" });
    } catch (error) {
      errorMsg.value = error.message;
      // hides error message
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    }
    return;
  }
  errorMsg.value = "Incorrect passwords!";
  setTimeout(() => {
    errorMsg.value = null;
  }, 4000);
};
</script>

<style></style>

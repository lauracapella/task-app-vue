<template>
  <nav>
    <div class="bg-taLightMain">
        <div class="flex justify-between">
          <div class="flex-item center px-2 py-5 text-white font-semibold">
            TaskApp
          </div>
          <!-- Login section   -->
          <div class="flex flex-item center px-2 py-5">
            <p class="mr-5 text-white">Welcome <span class="font-bold">{{removeEmailClient}}!</span>  </p>
            <button @click.prevent="signOut" class="mr-5 text-white">Sign out</button>
          </div>
        </div>
      </div>

  </nav>
</template>



<script setup>
import {computed} from "vue";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";

const userStore = useUserStore()
// constant to save a variable that will get the user from store with 
const email = userStore.user.email

// constat to split user email client after the @ sign
const removeEmailClient = email.split("@")[0]


// constant that saves the user email and cleans out the @client from the user - WIP - WORK IN PROGRESS
 /* const userWithoutEmail = userEmail.split("@")[0];  */

// Constant para salva el uso de la ruta en el archivo
const redirect = useRouter()


// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
const signOut = async () => {
  await useUserStore().signOut();
  redirect.push({path: "/auth/login"})
 };
</script>

<style></style>

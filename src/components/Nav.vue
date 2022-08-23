<template>
  <nav>
    <!-- Desktop menu -->
    <div class="bg-taLightMain">
        <div class="flex justify-between">
          <!-- Menu items -->
          <div class="flex-item center px-2 py-5 text-white font-semibold">
            TasKo
          </div>
         
           
          
          <!-- Login section   -->
          <div class="flex flex-item center px-2 py-5">
            <p class="mr-5 text-white">Welcome <span class="font-bold">{{user.email}}</span>  </p>
            <button @click.prevent="signOut" class="mr-5">Sign out</button>
          </div>
        </div>
      </div>

  </nav>
</template>



<script setup>
import {computed} from "vue";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";

// constant to save a variable that will get the user from store with a computed function imported from vue
const user = computed(() => useUserStore().$state.user)



// constant that saves the user email and cleans out the @client from the user - WIP - WORK IN PROGRESS
 /* const userWithoutEmail = userEmail.split("@")[0];  */

// Constant para salva el uso de la ruta en el archivo
const redirect = useRouter()


// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
const signOut = async () => {
  await useUserStore().signOut();
  redirect.push({path: "/auth/login"})
 }
</script>

<style></style>

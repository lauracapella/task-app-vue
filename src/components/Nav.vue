<template>
  <nav>
    <!-- Desktop menu -->
    <div class="bg-indigo-600">
        <div class="flex justify-between">
          <!-- Menu items -->
          <div class="flex-item center px-2 py-5">
            LOGO
          </div>
           
          
          <!-- Login section   -->
          <div class="flex flex-item center px-2 py-5">
            <p class="mr-5">Wellcome <span class="font-bold">Username!</span>  </p>
            <button class="mr-5">LogOut</button>
          </div>
       

        </div>
      </div>

  </nav>
</template>

<script setup>
//constant to save a variable that will hold the use router method

// constant to save a variable that will get the user from store with a computed function imported from vue

// constant that calls user email from the useUSerStore

// constant that saves the user email and cleans out the @client from the user

// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
</script>

<style></style>

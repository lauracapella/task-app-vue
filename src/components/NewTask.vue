<template>
    
    <form class="flex flex-col items-center p-5" @submit.prevent="addTask" >
      <label for="title">Title</label>
      <input type="text" placeholder="Title here" id="title" v-model="title">
      <label for="description">Description</label>
      <input type="text" placeholder="Description here" id="description" v-model="description">
      <button class="bg-indigo-500 text-white p-5 m-5">Add task</button>
    </form>
 <div v-if="errorWhitoutTitle" class="text-red-500">{{errorMessage}}</div>
 
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/task.js";

// constant to save a variable that define the custom event that will be emitted to the homeView

// constant to save a variable that holds the value of the title input field of the new task
const title = ref(null);
// constant to save a variable that holds the value of the description input field of the new task
const description = ref(null);
// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
let errorWhitoutTitle = ref(false);
/// const constant to save a variable that holds the value of the error message
const errorMessage = "Give me a task title, please"
// arrow function to call the form holding the task title and task description that uses a conditional to first checks if the task title is empty, if true the error message is displayed through the errorMessage container and sets a timeOut method that hides the error after some time. Else, its emmits a custom event to the home view with the task title and task description; clears the task title and task description input fields.


const addTask = () => {
  console.log(null === '')
  if (title.value === false){
     errorWhitoutTitle.value = true;
     console.log(errorWhitoutTitle)
       
  } else {
     useTaskStore().addTask(title.value, description.value);
      console.log(errorWhitoutTitle)
  }
  return errorWhitoutTitle;
}

</script>

<style></style>

// if (title.value === null || title.value === ""){
<template>
  <div class="m-5">
    <form
      class="flex flex-col items-center p-5 mb-2 text-center"
      @submit.prevent="addTask"
    >
      <!-- <label for="title" class="mb-1 text-sm">Title</label> -->
      <input
        type="text"
        placeholder="Title here"
        id="title"
        v-model="title"
        class="p-3 m-2 focus:outline-none rounded-full w-full text-center placeholder-taLightMain"
      />
      <!-- <label for="description" class="mb-1 text-sm">Description</label> -->
      <input
        type="text"
        placeholder="Description here"
        id="description"
        v-model="description"
        class="p-3 m-2 focus:outline-none rounded-full w-full text-center placeholder-taLightMain"
      />
      <button
        class="mt-6 p-3 px-6 self-start text-sm text-white bg-taLightMain duration-200 border-transparent hover:bg-gray-500 hover:text-at-light-grey font-bold rounded-full w-full"
      >
        Add Task
      </button>
    </form>
    <div v-if="errorWhitoutTitle" class="text-red-500 mb-5 pb-5">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/task.js";

// constant to save a variable that define the custom event that will be emitted to the homeView
const emit = defineEmits(["add-task"]);
// constant to save a variable that holds the value of the title input field of the new task
const title = ref(null);
// constant to save a variable that holds the value of the description input field of the new task
const description = ref(null);
// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
let errorWhitoutTitle = ref(false);
/// const constant to save a variable that holds the value of the error message
const errorMessage = "Give me a task title, please";
// arrow function to call the form holding the task title and task description that uses a conditional to first checks if the task title is empty, if true the error message is displayed through the errorMessage container and sets a timeOut method that hides the error after some time. Else, its emmits a custom event to the home view with the task title and task description; clears the task title and task description input fields.

const addTask = () => {
  //if(title.value){
  if (title.value === null || title.value === "") {
    errorWhitoutTitle.value = true;
    setTimeout(() => deletMsg(), 5000);
  } else {
    emit("add-task", title.value, description.value);
    title.value = "";
    description.value = "";
  }
  return errorWhitoutTitle;
};

const deletMsg = () => {
  errorWhitoutTitle.value = false;
};
</script>

<style></style>

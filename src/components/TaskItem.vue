<template>
  <div class="flex flex-col items-center">
    <div
      :class="{ completed_style: is_complete }"
      class="text-center m-5 border-2block p-6 max-w-sm rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5
        @click="showToolsHandler"
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ task.title }}
      </h5>
      <p
        @click="showToolsHandler"
        class="font-normal text-gray-700 dark:text-gray-400"
      >
        {{ task.title }}
      </p>

      <!-- <p v-if="is_complete">Is complete</p> -->
      <div v-if="showTools" class="inline-flex m-5">
        <button
          class="bg-gray-100 hover:bg-gray-200 text-gray-500 py-2 px-4 rounded-l"
          @click="addToggle"
        >
          Done
        </button>
        <button
          class="bg-gray-100 hover:bg-gray-200 text-gray-500 py-2 px-4"
          @click="deleteTask"
        >
          Delete
        </button>
        <button
          class="bg-gray-100 hover:bg-gray-200 text-gray-500 py-2 px-4 rounded-r"
          @click="openEditTask"
        >
          Edit
        </button>
      </div>

      <div v-if="editChecked">
        <form @submit.prevent="editTask" class="flex flex-col">
          <input
            type="text"
            v-model="titleEdited"
            placeholder="Nuevo titulo"
            class="p-2 m-2 border-2 rounded-full text-center placeholder-taLightMain"
          />
          <input
            type="text"
            v-model="descriptionEdited"
            placeholder="Nueva descripcion"
            class="p-2 m-2 border-2 rounded-full text-center placeholder-taLightMain"
          />

          <button
            class="w-full mt-6 p-3 px-6 self-start text-sm text-white bg-taLightMain duration-200 border-transparent hover:bg-gray-500 hover:text-at-light-grey rounded-full"
          >
            Edit Task
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/task.js";

//const tasks = ref ([])
const title = ref("");
const description = ref("");
const id = ref(props.task.id);
const editChecked = ref(false);
const titleEdited = ref("");
const descriptionEdited = ref("");
let showTools = ref(false);

const showToolsHandler = () => {
  showTools.value = !showTools.value;
  editChecked.value = false;
};

let is_complete = ref(props.task.is_complete);

// const props = defineProps(["ENTER-PROP-HERE"]);
const props = defineProps({
  task: Object,
});

//Definimos los emits que vienen del home view
const emit = defineEmits(["delete-task", "add-toogle", "edit-task"]);

//Definimos las funciones que accionan los emits
const addToggle = () => {
  is_complete.value = !is_complete.value;
  emit("add-toogle", is_complete.value, id.value);
};

const deleteTask = () => {
  emit("delete-task", props.task.id);
};

const openEditTask = () => {
  editChecked.value = !editChecked.value;
  titleEdited.value = props.task.title;
  descriptionEdited.value = props.task.description;
};

const editTask = () => {
  const editValues = {
    newTitle: titleEdited.value,
    newDescription: descriptionEdited.value,
    oldIdValue: props.task,
  };
  emit("edit-task", editValues);
  editChecked.value = !editChecked.value;
};
</script>

<style>
.completed_style {
  background: rgb(231, 246, 239);
}
</style>

<!-- 
**Hints**
1. ref() or reactive() can be used here to store the following, think if you want to store them either individually or like an object, up to you.
2. Data properties need here are the following: a boolean to store a false**Important variable, a string to store an error, a string to store the value of the task that the user can edit, an initial false boolean to hide the inputFIeld used to edit the new task detail or details[this is in reference of the task title and the task description].
3. Store the custom emit events that will be used to call the functions of the homeView for editing, deleting and toggling the status[completed, not complted] of the taskItem.
4. Function to handle the error with the data properties used to control the error and the the boolean controlling the boolean empty variable.
5. Function to handle the edit dialogue where the inputField is displayed and the string used to store the value of the inputField will be used here to save the value as a prop on this function.
6. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be send via the prop to the parent component. This function can control the toggle completion of the task on the homeview.
7. Function to edit the task information that you decided that the user can edit. This function's body takes in a conditional that first checks if the value of the task [either title and description or just title] is empty which if true it runs the function used to handle the error on hint4. Else, the conditional sets the first mentioned boolean data property on hint2 back to its inital boolean value to hide the error message and repeat the same for the data property mentioned 4th on hint2; a constant that stores an object that holds the oldValue from the prop item and the value of the task coming from the data property mentioned 3rd on hint2; a custom event emit() that takes 2 parameters a name for the custom event and the value from the object used on this part of the conditional and lastly this part of the conditional sets the value of input field to an empty string to clear it from the ui. 
8. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be send via the prop to the parent component. This function can control the removal of  the task on the homeview.
-->

# final-boiler-plate

This template should help get you started developing the final project running on Vue 3 with the composition API, Pinia as a state management tool, vue router, vite and lastly Supabase running on the backend.

This is meant as an advanced starter ready to plug in your supabase variables and run directly on a local server already connected to your Supabase instance. 

You are given some functions to see how the supabase ecosystem works with Vue and more specifically, pinia as a state management tool.

You can add any CSS framework of your liking like tailwindCSS, Bootstrap, MaterialUI or many of the cool libaries that exist in the web. 

## Important
This app is not setUp to be deployed to a production environment like vercel or netlify. 

Friday on August 19 we will look at how can we deploy this app to Vercels ecosystem.


## Project Setup

```sh
npm install
```

## Set Up your Environment Variables from Supabase located at the root folder of the project

```sh
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY 
```
#### Once you have added your environment variables, head to your .gitIgnore file located at the root folder and uncomment the .env file naming to avoid sharing any private access keys to your database

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Task App!

This is a web app developed with Vue 3, composition API, Pinia as a state management tool, vue router, vite and lastly Supabase running on the backend.

The main propouse of this app is helping people organaize their tastks giving her the chance to make list under they user progile space.

### Friday 19

Starting the project.
```sh
        - Set up project
        - Connecting to Supabase
        - Understaning the structure
        - Installing Tailwind
        - User Sign Up
        - User Sign In
        - Login layout
```

### Monday 22

Finishing User Registration / Login / Logout.
```sh
        - Correct routes with confirm password
        - Logout
        - Navbar
        - Footer
        - Layout Form new task
```

### Tuesday 23

Tasks
```sh
        - Add new task to supabase
        - Print task from supabase
        - Loop array of tasks
        - Styles to tasks
```

### Wednesday 24

Tasks
```sh
        - Styles to tasks
        - Edit tasks
        - toggle task
        - refresh contents automatically / emits
```

### Thusday 25

Tasks
```sh
        - Final styling
        - Delete error message after 4 secs
        - Deploy with vercel
        - Format document
        - Hora - moments

```
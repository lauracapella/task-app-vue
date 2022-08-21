import { defineStore } from "pinia";
import { supabase } from "../supabase";
export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    error: null,
  }),
  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },
    async signUp(email, password, confirmPassword) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });
      if (error) {
        this.error = error.message
        throw error;
        
      };
      if (user) {
        if (password === confirmPassword){
          this.user = user;
        //console.log(this.user);
        console.log('registered')
        

        }else{
          this.error = 'Confirm password is not equal'
          throw error;
          console.log('pasword not match')
        }
      }
    },

    async signIn(email, password) {
      const { user, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });
      if (error) {
        this.error = error.message
        throw error;
        
      };
      if (user) {
        this.user = user;
        //console.log(this.user);
  
      }
    },


    persist: {
      enabled: true,
      strategies: [
        {
          key: 'user',
          storage: localStorage
        }
      ]
    },
  },
});

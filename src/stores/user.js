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
    async signUp(email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) {
        throw error;
      }
      if (user) {
        this.user = user;
      }
    },

    async signIn(email, password) {
      const { user, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });
      if (error) {
        this.error = error.message;
        throw error;
      }
      if (user) {
        this.user = user;
        //console.log(this.user);
      }
    },

    async signOut(email, password) {
      console.log("signOut del store click");
      const { error } = await supabase.auth.signOut();
    },

    persist: {
      enabled: true,
      strategies: [
        {
          key: "user",
          storage: localStorage,
        },
      ],
    },
  },
});

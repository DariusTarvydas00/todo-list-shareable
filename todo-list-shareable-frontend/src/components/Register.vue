<template>
      <div class="box">
        <h1>Sign up</h1>
        <input v-model="inputName"
            type="text"
            class=""
            name="fullname"
            placeholder="Full Name" />

        <input v-model="inputEmail"
            type="text"
            class=""
            name="email"
            placeholder="Email" />

        <input v-model="inputPassword"
            type="password"
            class=""
            name="password"
            placeholder="Password" />
        <input v-model="inputPassword"
            type="password"
            class=""
            name="confirm_password"
            placeholder="Confirm Password" />
         <button class="btnLogin" @click="handleCreateUser">Register</button>
        <div class="">Already have an account?
          <RouterLink to="/" class="" >Login</RouterLink>
        </div>
      </div>
</template>

<script lang="ts">

import {UserStore} from "../store/userStore";
import {ref} from "vue";
import router from "@/router";

const userStore = UserStore();
const inputName = ref("");
const inputEmail = ref("");
const inputPassword = ref("");

function handleCreateUser() {
  userStore.createUser(inputName.value, inputEmail.value, inputPassword.value);
  router.push('/chat');
  console.log(userStore.loggedInUser)
}

export default {
  name: 'Login'
}
</script>
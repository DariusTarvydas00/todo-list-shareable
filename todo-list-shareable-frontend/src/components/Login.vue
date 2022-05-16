<template>
  <div class="login ">
    <div class="box">
        <h1 class="insideBox">Sign In</h1>
        <input class="insideBox" v-model="inputEmail" type="text" name="email" placeholder="Email" />
        <input class="insideBox" v-model="inputPassword" type="password"  name="password" placeholder="Password" />
          <div>
            <button class="insideBox btnLogin" @click="handleLogin">Login</button>
          </div>
        <div>Do not have an account?
          <RouterLink class="insideBox" to="/welcomePageRegister" >Register</RouterLink>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {UserStore} from "@/stores/userStore";
import {ref} from "vue";
import router from "@/router";

const userStore = UserStore();
const inputEmail = ref("");
const inputPassword = ref("");


function handleLogin() {
  userStore.login(inputEmail.value, inputPassword.value)
    router.push('/')
}

</script>
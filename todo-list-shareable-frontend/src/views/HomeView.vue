<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavBar from "@/components/NavBar.vue"; // @ is an alias to /src

@Options({
  components: {
    NavBar  },
})
export default class HomeView extends Vue {}
</script>

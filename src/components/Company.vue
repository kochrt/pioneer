<template>
  <div class="flex flex-row mx-auto">
    <h3 class="px-2">{{ company.name }}</h3>
    <p class="px-2">{{ company.age }}</p>
    <p class="px-2">{{ company.country }}</p>
    <p class="px-2">{{ company.category }}</p>
    <p class="font-bold px-2">{{ company.score }}</p>
    <button @click="award">🍒</button>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";

export default {
  props: ["company"],
  data() {
    return {
      auth: null,
    };
  },
  methods: {
    async award() {
      console.log("award to " + this.company.name + " by " + this.auth.currentUser.uid);
    },
  },
  mounted() {
    this.auth = getAuth();
  },
};
</script>

<style>
</style>
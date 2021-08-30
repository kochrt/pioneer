<template>
  <div class="flex flex-row mx-auto" :class="companyClass">
    <h3 class="px-2">{{ company.name }}</h3>
    <p class="px-2">{{ company.age }}</p>
    <p class="px-2">{{ company.country }}</p>
    <p class="px-2">{{ company.category }}</p>
    <p class="font-bold px-2">{{ company.score }}</p>
    <button @click="$emit('award', company.name)">🍒</button>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";

export default {
  props: ["company"],
  computed: {
    companyClass() {
      return this.company.highlightLevel ? "bg-yellow-100" : ''
    }
  },
  data() {
    return {
      auth: null,
    };
  },
  mounted() {
    this.auth = getAuth();
  },
};
</script>

<style>
</style>
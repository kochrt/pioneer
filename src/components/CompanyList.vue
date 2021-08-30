<template>
  <div class="flex flex-col mx-auto">
    <company
      v-on:award="award"
      v-for="company in companies"
      :key="company.name"
      :company="company"
    ></company>
  </div>
</template>

<script>
import Company from "./Company.vue";
import { getAuth } from "firebase/auth";

export default {
  components: { Company },
  data() {
    return {
      companies: [],
      uid: "",
    };
  },
  async created() {
    const result = await fetch(`https://k.npkn.net/pioneer`);
    this.companies = await result.json();
    this.uid = getAuth().currentUser.uid;
  },
  methods: {
    async award(companyName) {
      const result = await fetch(`https://k.npkn.net/pioneer/${companyName}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid: this.uid,
        }),
      });
      this.companies = await result.json();
    },
  },
};
</script>

<style>
</style>
<template>
  <div class="flex flex-col mx-auto">
    <company
      v-for="company in companies"
      :key="company.name"
      :company="company"
    ></company>
  </div>
</template>

<script>
import Company from "./Company.vue";
export default {
  components: { Company },
  data() {
    return {
      companies: []
    };
  },
  async created() {
    const result = await fetch(`https://k.npkn.net/pioneer`)
    this.companies = await result.json()
  }
};
</script>

<style>
</style>
<template>
  <div id="app">
    <BHeader />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import BHeader from "./components/header/bHeader.vue";
export default {
  components: { BHeader },
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("getCurrentUser");
  },
};
</script>

<style lang="scss"></style>

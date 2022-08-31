<template>
  <div id="app">
    <BHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import BHeader from "./components/header/bHeader.vue";
export default {
  components: { BHeader },

  mounted() {
    this.$store.dispatch("getCurrentUser");
  },
};
</script>

<style lang="scss"></style>

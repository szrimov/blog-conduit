<template>
  <div class="tags">
    <h6 class="tags__title">Popular tags</h6>
    <template v-if="$store.state.tags.tags">
      <div class="tags__item" v-for="tag in $store.state.tags.tags" :key="tag">
        <router-link :to="{ name: 'main-feed' }"> {{ tag }}</router-link>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getTags");
  },
};
</script>

<style lang="scss">
.tags {
  position: absolute;
  top: 0;
  right: 0;
  max-width: 250px;
  height: 200px;
  padding: 10px;
  background: #f3f3f3;
}
.tags__title {
  font-size: 1rem;
  color: #373a3c;
}
.tags__item {
  display: inline-block;
  background-color: #818a91;
  border-radius: 10px;
  font-size: 0.8rem;
  padding: 5px 10px;
  margin-top: 5px;
  margin-right: 5px;
}
.tags__item a {
  color: #fff;
}
</style>

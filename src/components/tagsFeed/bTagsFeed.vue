<template>
  <div class="tags-feed" v-if="$store.state.tags.articles.length">
    <BFeedItem
      v-for="article in $store.state.tags.articles"
      :article="article"
      :key="article.createdAt"
    />
  </div>
</template>

<script>
import BFeedItem from "../feedItem/bFeedItem.vue";
export default {
  components: { BFeedItem },
  mounted() {
    console.log(
      "$store.state.tags.tags.articles",
      this.$store.state.tags.articles
    );
  },
};
</script>

<style lang="scss"></style>

<template>
  <div class="tags-feed" v-if="$store.state.tags.articles.length">
    <BFeedItem v-for="article in $store.state.tags.articles" :article="article" :key="article.createdAt" />
  </div>
</template>

<script>
import BFeedItem from "@/components/feedItem/bFeedItem.vue";
export default {
  components: { BFeedItem },
};
</script>

<style lang="scss">
.tags-feed {
  padding: 0 20px;
}
</style>

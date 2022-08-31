<template>
  <div class="user-feed">
    <BFeedItem
      v-for="article in $store.state.userFeed.articles"
      :key="article.createdAt"
      :article="article"
      @favoriteHandler="favoriteHandler"
    />
    <paginate
      :page-count="50"
      :click-handler="getArticlesFromUserFeed"
      :prev-text="'&laquo;'"
      :next-text="'&raquo;'"
      :container-class="'pagination justify-content-center mt-5'"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :prev-class="'page-item'"
      :next-class="'page-item'"
      :prev-link-class="'page-link'"
      :next-link-class="'page-link'"
    >
      >
    </paginate>
  </div>
</template>

<script>
import BFeedItem from "../feedItem/bFeedItem.vue";
export default {
  methods: {
    getArticlesFromUserFeed(page) {
      this.$store.dispatch("getUserFeed", page);
    },
    favoriteHandler({ favorited, slug }) {
      favorited
        ? this.$store.dispatch("postUserFeedFavorited", slug)
        : this.$store.dispatch("deleteUserFeedFavorited", slug);
    },
  },
  mounted() {
    this.$store.dispatch("getUserFeed");
  },
  components: { BFeedItem },
};
</script>

<style lang="scss">
.pagination {
  user-select: none;
}
</style>

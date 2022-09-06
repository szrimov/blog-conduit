<template>
  <div
    class="profile-favorited"
    v-if="$store.state.profileFeed.articles.length"
  >
    <BFeedItem
      v-for="article in $store.state.profileFeed.articles"
      :key="article.createdAt"
      :article="article"
      @favoriteHandler="favoriteHandler"
    />
    <paginate
      :page-count="50"
      :click-handler="getArticlesFromFavoritedFeed"
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
  components: { BFeedItem },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getProfileFavoritedFeed", {
      page: 0,
      slug: this.$route.params.slug,
    });
  },
  methods: {
    getArticlesFromFavoritedFeed(page) {
      this.$store.dispatch("getProfileFavoritedFeed", {
        page: page,
        slug: this.$route.params.slug,
      });
    },
    favoriteHandler({ favorited, slug }) {
      favorited
        ? this.$store.dispatch("postProfileFavorited", slug)
        : this.$store.dispatch("deleteProfileFavorited", slug);
    },
  },
};
</script>

<style lang="scss"></style>

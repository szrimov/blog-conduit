<template>
  <div class="profile-user-feed">
    <BFeedItem
      v-for="article in $store.state.profileFeed.articles"
      :key="article.createdAt"
      :article="article"
      @favoriteHandler="favoriteHandler"
    />
    <paginate
      :page-count="50"
      :click-handler="getArticlesFromProfileUserFeed"
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
  methods: {
    getArticlesFromProfileUserFeed(page) {
      this.$store.dispatch("getProfileAuthorFeed", page);
    },
    favoriteHandler({ favorited, slug }) {
      favorited
        ? this.$store.dispatch("postProfileUserFavorited", slug)
        : this.$store.dispatch("deleteProfileUserFavorited", slug);
    },
  },
  mounted() {
    this.$store.dispatch("getProfileAuthorFeed", {
      slug: this.$route.params.slug,
      page: 0,
    });
  },
};
</script>

<style lang="scss"></style>

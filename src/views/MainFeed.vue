<template>
  <div class="global-container">
    <div class="main-feed">
      <div class="container mt-5">
        <div class="main-feed__header">
          <button
            class="user-feed__btn feed-btn"
            :class="{ 'global-feed__btn-active': !isActive }"
            @click="isActive = !isActive"
            v-if="this.$store.state.auth.isLoggedIn"
          >
            Your feed
          </button>
          <button
            class="global-feed__btn feed-btn"
            :class="{
              'global-feed__btn-active': !this.$store.state.auth.isLoggedIn
                ? !isActive
                : isActive,
            }"
            @click="isActive = !isActive"
          >
            Global feed
          </button>
        </div>
        <template class="global-feed" v-if="this.$store.state.auth.isLoggedIn">
          <BUserFeed v-if="!isActive" />
          <BGlobalFeed v-if="isActive" />
        </template>
        <template class="global-feed" v-if="!this.$store.state.auth.isLoggedIn">
          <BGlobalFeed />
        </template>
      </div>
      <BTags />
    </div>
  </div>
</template>

<script>
import BUserFeed from "@/components/userFeed/bUserFeed.vue";
import BGlobalFeed from "@/components/globalFeed/bGlobalFeed.vue";
import BPagination from "@/components/pagination/bPagination.vue";
import BTags from "@/components/tags/bTags.vue";
export default {
  data() {
    return {
      isActive: false,
      page: 1,
    };
  },
  components: { BUserFeed, BGlobalFeed, BPagination, BTags },
  methods: {},
};
</script>

<style lang="scss">
.main-feed {
  position: relative;
}
.main-feed__header {
  width: 100%;
  border-bottom: 1px solid silver;
}
.feed-btn {
  border: none;
  background: none;
  padding-bottom: 5px;
  color: #aaa;
}
.global-feed__btn-active {
  color: #5cb85c;
  border-bottom: 2px solid #5cb85c;
}

.user-feed__btn {
}
.global-feed__btn {
}
.pagination-active {
  color: red;
}
</style>

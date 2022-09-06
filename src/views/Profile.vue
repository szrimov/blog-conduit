<template>
  <div class="">
    <BSpinner
      v-if="$store.state.auth.isLoading || $store.state.profileFeed.isLoading"
    />

    <div class="profile">
      <div class="profile__user-info text-center">
        <img :src="profile.image" alt="" class="profile__img" />
        <h2 class="profile__username">
          {{ profile.username }}
        </h2>
        <p class="profile__bio">
          {{ profile.bio }}
        </p>

        <div class="container">
          <div class="text-end">
            <router-link
              v-if="
                $route.params.slug === $store.state.auth.currentUser.username
              "
              :to="{ name: 'settings' }"
              class="profile__link"
            >
              <button class="btn btn-outline-primary">
                Edit profile settings
              </button>
            </router-link>
            <button
              v-else
              class="btn"
              :class="{
                'btn-outline-primary': !profile.following,
                'btn-outline-secondary': profile.following,
              }"
              @click="followHandler"
            >
              {{ profile.following ? "unfollow" : "follow" }}
            </button>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="profile__feeds">
          <div class="profile__feeds-header mt-3 mb-3">
            <button
              class="profile__user-feed-btn"
              :class="{ 'profile__user-feed-btn-active': isActive }"
              type="button"
              @click="isActive = !isActive"
            >
              My articles
            </button>
            <button
              class="profile__favorited-feed-btn"
              :class="{ 'profile__user-feed-btn-active': !isActive }"
              type="button"
              @click="isActive = !isActive"
            >
              Favorited articles
            </button>
          </div>

          <BProfileUserFeed v-if="isActive" />
          <BProfileFavoritedFeed v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BProfileUserFeed from "@/components/profileUserFeed/bProfileUserFeed.vue";
import BProfileFavoritedFeed from "@/components/profileFavoritedFeed/bProfileFavoritedFeed.vue";
import { mapGetters } from "vuex";
import BSpinner from "@/components/spinner/bSpinner.vue";
export default {
  components: { BProfileUserFeed, BProfileFavoritedFeed, BSpinner },
  computed: {
    ...mapGetters(["profile"]),
  },
  data() {
    return {
      isActive: true,
    };
  },

  mounted() {
    this.$store.dispatch("getProfile", this.$route.params.slug);
    console.log("profile ==>", this.profile);
  },
  methods: {
    followHandler() {
      this.profile.following
        ? this.$store.dispatch("unfollow", this.$route.params.slug)
        : this.$store.dispatch("follow", this.$route.params.slug);
    },
  },
};
</script>

<style lang="scss">
.container {
}
.profile__user-info {
  padding-top: 50px;
  padding-bottom: 50px;
  background: #f3f3f3;
}
.text-center {
}
.profile__img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.profile__username {
}
.profile__bio {
  font-size: 1rem;
  color: #aaa;
}
.profile__link {
}
.profile__feeds {
}
.profile__feeds-header {
  border-bottom: 1px solid silver;
}
.profile__user-feed-btn,
.profile__favorited-feed-btn {
  border: none;
  background: none;
  padding-bottom: 10px;
  color: #bbb;
}
.profile__user-feed-btn-active {
  border: none;
  border-bottom: 1px solid silver;
  background: none;
  color: #5cb85c;
  border-bottom: 2px solid #5cb85c;
}
</style>

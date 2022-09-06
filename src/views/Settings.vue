<template>
  <div class="">
    <BSpinner v-if="$store.state.auth.isLoading" />
    <section
      class="settings mt-5 settings"
      v-if="Object.keys(currentUser).length"
    >
      <h1 class="fs-1 text-center">Your Settings</h1>

      <div class="col-4 col-md-4 col-lg-4 mx-auto">
        <div class="" v-if="$store.state.auth.isLoading">Loading...</div>
        <form class="mt-5 settigns__form" @submit.prevent="onSubmit">
          <div class="form-group">
            <div class="mt-3">
              <label for="url-profile-picture">Url of profile picture</label>
              <input
                type="text"
                class="form-control"
                id="url-profile-picture"
                v-model="form.image"
              />
            </div>
            <div class="mt-3">
              <label for="username">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                v-model="form.username"
              />
            </div>
            <div class="mt-3">
              <label for="bio">Bio</label>
              <textarea
                class="form-control"
                id="bio"
                rows="3"
                v-model="form.bio"
              ></textarea>
              <div class="mt-3">
                <label for="email">Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  v-model="form.email"
                />
              </div>
              <div class="mt-3">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="form.password"
                />
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between mt-5">
            <button
              type="button"
              @click="logout"
              class="btn btn-outline-danger px-5"
            >
              Logout
            </button>
            <button type="submit" class="btn btn-outline-primary px-5">
              Update settings
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BSpinner from "@/components/spinner/bSpinner.vue";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["currentUser"]),
    form() {
      if (Object.keys(this.currentUser).length) {
        return {
          image: this.currentUser.image,
          username: this.currentUser.username,
          bio: this.currentUser.bio,
          email: this.currentUser.email,
          password: "",
        };
      }
      return {
        image: "",
        username: "",
        bio: "",
        email: "",
        password: "",
      };
    },
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("updateSettings", {
          image: this.form.image,
          username: this.form.username,
          bio: this.form.bio,
          email: this.form.email,
          password: this.form.email,
        })
        .then(() => this.$router.push({ name: "main-feed" }));
    },
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => this.$router.push({ name: "main-feed" }));
    },
  },
  components: { BSpinner },
};
</script>

<style lang="scss"></style>

<template>
  <header class="header">
    <div class="global-container">
      <div class="header__inner">
        <router-link :to="{ name: 'main-feed' }" class="header__logo-link"
          >conduit</router-link
        >
        <template v-if="$store.state.auth.isLoggedIn">
          <div class="header__nav-items">
            <router-link
              class="header__nav-item"
              active-class="active"
              exact
              :to="{ name: 'main-feed' }"
              >Home</router-link
            >
            <router-link
              class="header__nav-item"
              active-class="active"
              :to="{ name: 'editor' }"
              >New article</router-link
            >
            <router-link
              class="header__nav-item"
              active-class="active"
              :to="{ name: 'settings' }"
              >Settings</router-link
            >
            <router-link
              class="header__nav-item"
              :to="{
                name: 'profile',
                params: {
                  slug: $store.state.auth.currentUser.username,
                },
              }"
              >{{ $store.state.auth.currentUser.username }}
            </router-link>
          </div>
        </template>

        <template v-else>
          <div class="header__nav-items">
            <router-link
              class="header__nav-item"
              active-class="active"
              :to="{ name: 'main-feed' }"
              exact
              >Home</router-link
            >
            <router-link
              class="header__nav-item"
              active-class="active"
              :to="{ name: 'login' }"
              >Sign In</router-link
            >
            <router-link
              class="header__nav-item"
              active-class="active"
              :to="{ name: 'register' }"
              >Sign Up</router-link
            >
          </div>
        </template>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
}
.container {
}
.header__inner {
  padding: 5px 0;

  display: flex;
  justify-content: space-between;
}
.header__logo-link {
  margin-left: 320px;
  font-family: titillium web, sans-serif;
  font-size: 1.5rem;
  padding-top: 0;
  margin-right: 2rem;
  color: #5cb85c;
}
.header__nav-items {
}
.header__nav-item {
  margin-left: 16px;
  color: rgba(0, 0, 0, 0.3);
}
.active {
  color: rgba(0, 0, 0, 0.8);
}
</style>

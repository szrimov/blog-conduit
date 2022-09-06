<template>
  <div class="">
    <BSpinner
      v-if="
        $store.state.userFeed.isLoading ||
        $store.state.globalFeed.isLoading ||
        $store.state.tags.isLoading
      "
    />
    <div class="global-container">
      <div class="main-feed">
        <div class="container mt-5">
          <div class="main-feed__header">
            <div class="btn" v-for="button in buttons" :key="button.id">
              <button
                v-if="button.visible"
                class="global-feed__btn feed-btn"
                :class="{ 'global-feed__btn-active': button.active }"
                @click="setActive(button.id)"
              >
                {{ button.name }}
              </button>
            </div>
          </div>
          <template class="global-feed" v-if="$store.state.auth.isLoggedIn">
            <BUserFeed v-if="buttonId === 1" />
            <BGlobalFeed v-if="buttonId === 2" />
            <BTagsFeed v-if="buttonId === 3" />
          </template>
          <template class="global-feed" v-else>
            <BGlobalFeed />
          </template>
        </div>
        <BTags @setTag="setTag" />
      </div>
    </div>
  </div>
</template>

<script>
import BUserFeed from "@/components/userFeed/bUserFeed.vue";
import BGlobalFeed from "@/components/globalFeed/bGlobalFeed.vue";
import BPagination from "@/components/pagination/bPagination.vue";
import BTags from "@/components/tags/bTags.vue";
import BTagsFeed from "@/components/tagsFeed/bTagsFeed.vue";
import BSpinner from "@/components/spinner/bSpinner.vue";

export default {
  data() {
    return {
      page: 1,
      tag: "",
      buttons: [
        { name: "Your feed", id: 1, active: true, visible: true },
        {
          name: "Global feed",
          id: 2,
          active: false,
          visible: true,
        },
        {
          name: "Tags feed",
          id: 3,
          active: false,
          visible: false,
        },
      ],
      buttonId: 1,
    };
  },
  components: {
    BUserFeed,
    BGlobalFeed,
    BPagination,
    BTags,
    BTagsFeed,
    BSpinner,
  },
  methods: {
    setTag(tag) {
      this.tag = "#" + tag;
      this.buttonId = 3;
    },
    setActive(id) {
      this.buttonId = id;
      this.buttons.map((el) => {
        if (el.id === id) {
          el.active = true;
        } else {
          el.active = false;
        }
      });
    },
  },
  watch: {
    tag() {
      this.buttons.map((el) => {
        if (el.id === 3) {
          el.active = true;
          el.visible = true;
          el.name = this.tag;
        } else {
          el.active = false;
        }
      });
    },
  },

  computed: {},
  mounted() {},
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

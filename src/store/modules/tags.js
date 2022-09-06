import api from "@/api/tags";

const state = {
  tags: [],
  articles: [],
  isLoading: false,
};
const mutations = {
  getTagsStart(state) {
    state.isLoading = true;
  },
  getTagsSuccess(state, payload) {
    state.isLoading = false;
    state.tags = payload;
  },
  getTagsFailure(state) {
    state.isLoading = false;
  },

  getTagsFeedStart(state) {
    state.isLoading = true;
  },
  getTagsFeedSuccess(state, payload) {
    state.isLoading = false;
    state.articles = payload;
  },
  getTagsFeedFailure(state) {
    state.isLoading = false;
  },
};
const actions = {
  getTags({ commit }) {
    return new Promise((resolve) => {
      commit("getTagsStart");
      api
        .getTags()
        .then((response) => {
          commit("getTagsSuccess", response.data.tags);
          resolve();
        })
        .catch((result) => {
          commit("getTagsFailure");
          console.log("errors from getTags", result.response.data);
        });
    });
  },

  getTagsFeed({ commit }, { page, tag }) {
    return new Promise((resolve) => {
      commit("getTagsFeedStart");
      api
        .getTagsFeed(page, tag)
        .then((response) => {
          commit("getTagsFeedSuccess", response.data.articles);
          resolve();
        })
        .catch((result) => {
          commit("getTagsFeedFailure");
          console.log("errors from getTagsFeedFailure", result.response.data);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};

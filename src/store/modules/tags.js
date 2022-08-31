import api from "@/api/tags";

const state = {
  tags: [],
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
};

export default {
  state,
  mutations,
  actions,
};

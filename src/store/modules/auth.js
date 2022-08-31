import auth from "@/api/auth";
import { setItem } from "@/helpers/percistanceStorage";

const state = {
  isSubmitting: false,
  isLoading: false,
  currentUser: {},
  validationsError: null,
  isLoggedIn: null,
};
const mutations = {
  registerStart(state) {
    state.isSubmitting = true;
    state.validationsError = null;
  },
  registerSuccess(state, payload) {
    state.isSubmitting = false;
    state.currentUser = payload;
    state.isLoggedIn = true;
  },
  registerFailure(state, payload) {
    state.isSubmitting = false;
    state.validationsError = payload;
  },

  loginStart(state) {
    state.isSubmitting = true;
  },
  loginSuccess(state, payload) {
    state.isSubmitting = false;
    state.isLoggedIn = true;
    state.currentUser = payload;
  },
  loginFailure(state, payload) {
    state.isSubmitting = false;
    state.validationsError = payload;
  },

  resetValidationsError() {
    state.validationsError = null;
  },
  getCurrentUserStart(state) {
    state.isLoading = true;
  },
  getCurrentUserSuccess(state, payload) {
    state.currentUser = payload;
    state.isLoading = false;
    state.isLoggedIn = true;
  },
  getCurrentUserFailure(state, payload) {
    state.validationsError = payload;
    state.isLoading = false;
    state.isLoggedIn = null;
  },
  logout(state) {
    state.isLoading = false;
    state.isLoggedIn = false;
  },
};

const actions = {
  register({ commit }, credentials) {
    return new Promise((resolve) => {
      commit("registerStart");
      auth
        .register(credentials)
        .then((response) => {
          commit("registerSuccess", response.data.user);
          setItem("accessToken", response.data.user.token);
          resolve(response.data.user);
        })
        .catch((result) => {
          commit("registerFailure", result.response.data.errors);
        });
    });
  },

  login({ commit }, credentials) {
    return new Promise((resolve) => {
      commit("loginStart");
      auth
        .login(credentials)
        .then((response) => {
          commit("loginSuccess", response.data.user);
          setItem("accessToken", response.data.user.token);
          resolve(response.data.user);
        })
        .catch((result) => {
          commit("loginFauilure", result.response.data.user.errors);
        });
    });
  },

  getCurrentUser({ commit }) {
    return new Promise((resolve) => {
      commit("getCurrentUserStart");
      auth
        .getCurrentUser()
        .then((response) => {
          console.log("===>", response);
          commit("getCurrentUserSuccess", response.data.user);
          resolve(response.data.user);
        })
        .catch((result) => {
          commit("getCurrentUserFailure", result.response.data.errors);
        });
    });
  },
  logout({ commit }) {
    return new Promise((resolve) => {
      setItem("accessToken", "");
      commit("logout");
      resolve();
    });
  },
};

const getters = {
  currentUser(state) {
    return state.currentUser;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};

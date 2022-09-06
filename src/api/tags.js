import axios from "@/api/axios";

const api = {
  getTags() {
    return axios.get("/tags");
  },
  getTagsFeed(page, tag) {
    return axios.get(`articles?limit=5&offset=${page}&tag=${tag}`);
  },
};

export default api;

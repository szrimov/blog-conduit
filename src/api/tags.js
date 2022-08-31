import axios from "@/api/axios";

const api = {
  getTags() {
    return axios.get("/tags");
  },
};

export default api;

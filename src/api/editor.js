import axios from "@/api/axios";

const api = {
  postArticle(article) {
    return axios.post("/articles", { article: article });
  },
};

export default api;

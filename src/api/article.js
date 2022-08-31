import axios from "@/api/axios";

const api = {
  getArticle(slug) {
    return axios.get(`/articles/${slug}`);
  },
  postComment({ slug, body }) {
    return axios.post(`/articles/${slug}/comments`, {
      comment: { body: body },
    });
  },
  getComments(slug) {
    return axios.get(`/articles/${slug}/comments`);
  },
  deleteComment({ slug, id }) {
    return axios.delete(`/articles/${slug}/comments/${id}`);
  },

  deleteArticle(slug) {
    return axios.delete(`/articles/${slug}`);
  },
};

export default api;

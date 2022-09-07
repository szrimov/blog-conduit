import axios from '@/api/axios';

const api = {
  postArticle(slug, article) {
    return axios.put(`/articles/${slug}`, { article: article });
  },
};

export default api;

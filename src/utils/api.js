import axios from 'axios';

const NCNApi = axios.create({
    baseURL: 'https://nc-news-t20n.onrender.com/api/'
  });

export const getArticles = () => {
    return NCNApi
        .get('/articles')
        .then((response) => response.data.articles)
}

export const getTopics = () => {
    return NCNApi
        .get('/topics')
        .then((response) => response.data.topics)
}
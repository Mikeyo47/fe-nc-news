import axios from 'axios';

const NCNApi = axios.create({
    baseURL: 'https://nc-news-t20n.onrender.com/api/'
  });

export const getArticles = (page) => {
    return NCNApi
        .get(`/articles?p=${page}`)
        .then((response) => response.data.articles)
}

export const getTopics = () => {
    return NCNApi
        .get('/topics')
        .then((response) => response.data.topics)
}

export const getArticle = (articleId) => {
    return NCNApi
        .get(`/articles/${articleId}`)
        .then((response) => response.data.article)
}

export const getComments = (articleId) => {
    return NCNApi
        .get(`/articles/${articleId}/comments`)
        .then((response) => response.data.comments)
}

export const patchArticleVotes = (vote, articleId) => {
    return NCNApi
        .patch(`/articles/${articleId}`, vote)
        .then((response) => response.data.article)
}

export const postComment = (comment, articleId) => {
    return NCNApi
        .post(`/articles/${articleId}/comments`, comment)
        .then((response) => response.data.comment)
}
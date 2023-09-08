import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../utils/api";

export default function ArticlePage() {
    const {article_id} = useParams();

    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getArticle(article_id).then((article) => {
            setArticle(article)
            setIsLoading(false)
        })
    }, []);

    if (isLoading) return <p>Loading...</p>

    return (
        <section>
            <h2 className="article_title">{article.title}</h2>
            <p className="author_article">By: {article.author}</p>
            <p className="topic_article">Topic: {article.topic}</p>
            <img className="img_article" src={article.article_img_url}></img>
            <p className="text_article">{article.body}</p>
            <p className="votes_article">Votes: {article.votes}</p>
        </section>
    )
}
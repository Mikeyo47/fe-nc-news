import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle, patchArticleVotes } from "../utils/api";
import CommentsList from "./CommentsList";

export default function ArticlePage() {
    const {article_id} = useParams();

    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [votes, setVotes] = useState(0);
    const [hasVoted, setHasVoted] = useState(false);

    useEffect(() => {
        getArticle(article_id).then((article) => {
            setArticle(article)
            setVotes(article.votes)
            setIsLoading(false)
        })
    }, []);

    if (isLoading) return <p>Loading...</p>

    const handleVote = (num) => {
        patchArticleVotes({inc_votes: num}, article_id)
    }

    return (
        <div className="article-page">
            <div className="article">
                <h2 className="article_title">{article.title}</h2>
                <p className="author_article">By: {article.author}</p>
                <p className="topic_article">Topic: {article.topic}</p>
                <img className="img_article" src={article.article_img_url}></img>
                <p className="text_article">{article.body}</p>
                <p className="votes_article">Votes: {votes}</p>
                <button className="thumbs-up-btn" onClick={() => {
                    setVotes((currentVotes) => currentVotes + 1);
                    handleVote(1)
                    setHasVoted(true)
                    }
                } disabled={hasVoted}>
                <i className={"fa-solid fa-thumbs-up"}></i>
                </button>
                <button className="thumbs-down-btn" onClick={() => {
                    setVotes((currentVotes) => currentVotes - 1);
                    handleVote(-1)
                    setHasVoted(true)
                    }
                } disabled={hasVoted}>
                <i className={"fa-solid fa-thumbs-down"}></i>
                </button>
            </div>
            <CommentsList articleId={article.article_id}/>
        </div>
    )
}
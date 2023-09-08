import { useState, useEffect } from "react"
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";
import PageNavigation from "./PageNavigation";

export default function ArticlesList() {
    const [articlesList, setArticlesList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1)

    useEffect(() => {
        setIsLoading(true);
        getArticles(page).then((articles) => {
            setArticlesList(articles)
            setIsLoading(false)
        })
    }, [page]);

    if (isLoading) return <p>Loading...</p>

    return (
        <section>
            <button>Add Article</button>
            <label htmlFor="sortBy">Sort by: </label>
            <select name="sortBy" id="sortBy">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <ul>
            {articlesList.map(article => {
                return (
                    <li key={article.article_id}>
                        <Link to={`/articles/${article.article_id}`}>
                            <ArticleCard article={article}/>
                        </Link>
                    </li>
                )
            })}
            </ul>
            <PageNavigation page={page} setPage={setPage} />
        </section>
    )
}
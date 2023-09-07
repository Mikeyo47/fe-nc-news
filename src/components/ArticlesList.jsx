import { useState, useEffect } from "react"
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

export default function ArticlesList() {
    const [articlesList, setArticlesList] = useState([]);

    useEffect(() => {
        getArticles().then((articles) => {
            setArticlesList(articles)
        })
    }, []);

    return (
        <section>
            <button>Add Article</button>
            <label for="sortBy">Sort by: </label>
            <select name="sortBy" id="sortBy">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            {articlesList.map(article => {
                return <ArticleCard key={article.article_id} article={article}/>
            })}
        </section>
    )
}
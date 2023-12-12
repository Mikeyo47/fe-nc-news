import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";
import PageNavigation from "./PageNavigation";

export default function ArticlesList() {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    getArticles(page).then((articles) => {
      setArticlesList(articles);
      setIsLoading(false);
    });
  }, [page]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <button className="add-article-button">Add Article</button>
      <label className="sort-by-dropdown" htmlFor="sortBy">
        Sort by:{" "}
      </label>
      <select name="sortBy" id="sortBy">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <ul className="grid-container">
        {articlesList.map((article) => {
          return (
            <li className="article-card" key={article.article_id}>
              <Link
                to={`/articles/${article.article_id}`}
                style={{ textDecoration: "none" }}
              >
                <ArticleCard article={article} />
              </Link>
            </li>
          );
        })}
      </ul>
      <PageNavigation page={page} setPage={setPage} />
    </div>
  );
}

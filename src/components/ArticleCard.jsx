export default function ArticleCard({article}) {
    return (
        <div className="article_card">
            <h2 className="article_title">{article.title}</h2>
            <img className="article_img" src={article.article_img_url}></img>
            <p className="votes">Votes: {article.votes}</p>
            <p className="comment_counter">Comments: {article.comment_count}</p>
        </div>
    )
}
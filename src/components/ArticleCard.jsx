export default function ArticleCard({article}) {
    return (
        <div className="article_card">
            <h2 className="title_card">{article.title}</h2>
            <p className="author_card">By: {article.author}</p>
            <p className="topic_card">Topic: {article.topic}</p>
            <img className="img_card" src={article.article_img_url} alt={`image related to ${article.topic}`}></img>
            <p className="votes_card">Votes: {article.votes}</p>
            <p className="comment_counter_card">Comments: {article.comment_count}</p>
        </div>
    )
}
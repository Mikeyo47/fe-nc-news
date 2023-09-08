export default function CommentCard({comment}) {
    return (
        <div className="comment-card">
            <p>"{comment.body}"</p>
            <p>Written by: {comment.author}</p>
            <p>Votes: {comment.votes}</p>
            <p>Posted on: {comment.created_at}</p>
        </div>
    )
}
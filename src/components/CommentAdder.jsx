import { useState } from "react"
import { postComment } from "../utils/api";

export default function CommentAdder({commentPlaceholder, articleId}) {
    const [newComment, setNewComment] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        postComment({
            "username": "butter_bridge",
            "body": newComment 
        }, articleId);
    }

    return (
        <form onSubmit={handleSubmit} className="add-comment">
            <button type="submit">Comment!</button>
            <input 
                type="text" 
                id="new-comment" 
                value={newComment} 
                onChange={(event) => setNewComment(event.target.value)} 
                placeholder={commentPlaceholder}
                required>
            </input>
        </form>
    )
}
import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";

export default function CommentsList({articleId}) {
    const [commentsList, setCommentsList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getComments(articleId).then((comments) => {
            setCommentsList(comments)
            setIsLoading(false)
        })
    }, []);

    if (isLoading) return <p>Loading...</p>

    return (
        <section className="comments-list">
            <div className="add-comment">
                <button>Comment!</button>
                <input type="text" placeholder="what do you want to say?"></input>
            </div>
            <ul>
                {commentsList.map(comment => {
                    return (
                        <li key={comment.comment_id}><CommentCard comment={comment} /></li>
                    )
                })}
            </ul>
        </section>
    )
}
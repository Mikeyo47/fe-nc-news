import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

export default function CommentsList({articleId}) {
    const [commentsList, setCommentsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [commentPlaceholder, setCommentPlaceholder] = useState("what do you want to say?");

    useEffect(() => {
        getComments(articleId).then((comments) => {
            setCommentsList(comments)
            setIsLoading(false)
        });
    }, []);

    if (commentsList.length === 0 && commentPlaceholder === "what do you want to say?") {
        setCommentPlaceholder("start a conversation")
    }
    if (commentsList.length > 0 && commentPlaceholder === "start a conversation") {
        setCommentPlaceholder("what do you want to say?")
    }

    if (commentsList.length === 0 && commentPlaceholder === "start a conversation") {
        return (
            <section className="no-comments-list">
                <CommentAdder articleId={articleId} commentPlaceholder={commentPlaceholder}/>
                <p>No comments yet. Be the first!</p>
            </section>
        )
    }

    if (isLoading) return <p>Loading...</p>

    return (
        <section className="comments-list">
            <CommentAdder articleId={articleId} commentPlaceholder={commentPlaceholder}/>
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
import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";

export default function Header() {
    const [topicsList, setTopicsList] = useState([]);

    useEffect(() => {
        getTopics().then((topics) => {
            setTopicsList(topics)
        })
    }, []);

    return (
        <nav>
            <h1 className="logo">NC NEWS</h1>
            <button className="profile_button">Profile</button>
            <ul className="topic_nav">
                {topicsList.map(topic => {
                    return <li  key={topic.slug}>{topic.slug}</li>
                })}
            </ul>
        </nav>
    )
}
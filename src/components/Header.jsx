import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Link to={"/"} style={{ textDecoration: 'none' }}>
      <h1 className="logo">NC NEWS</h1>
    </Link>
  );
}

// import { useEffect, useState } from "react";
// import { getTopics } from "../utils/api";
// export default function Header() {
//     const [topicsList, setTopicsList] = useState([]);

//     useEffect(() => {
//         getTopics().then((topics) => {
//             setTopicsList(topics)
//         })
//     }, []);

//     return (
//         <nav>
//             <Link to={"/"}>
//                 <h1 className="logo">NC NEWS</h1>
//             </Link>
//             <button className="profile_button">Profile</button>
//             <ul className="topic_nav">
//                 {topicsList.map(topic => {
//                     return <li  key={topic.slug}>{topic.slug}</li>
//                 })}
//             </ul>
//         </nav>
//     )
// }

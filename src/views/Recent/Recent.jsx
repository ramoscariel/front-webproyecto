import { useEffect, useState } from "react";
import { getRecentPosts } from "./recentController";
import NavBar from "../../components/NavBar/NavBar";
import Post from "../../components/Post/Post";
import "./Recent.css";

export default function Recent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getRecentPosts(setPosts);
  }, []);

  return (
    <>
      <NavBar />
      <div className="recent-container">
        {posts.map((post) => (
          <Post key={post.post_id} post={post} />
        ))}
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserPosts, deleteUserPost } from "./profileController";
import NavBar from "../../components/NavBar/NavBar";
import Post from "../../components/Post/Post";
import "./Profile.css";

export default function Profile() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUserPosts(id, setPosts);
  }, [id]);

  const handleDelete = (postId) => {
    deleteUserPost(postId, () => getUserPosts(id, setPosts));
  };

  return (
    <div className="profile-container">
      <NavBar />
      <button onClick={() => navigate("/create")} className="profile__button">
        Create New Post
      </button>
      <div className="profile-posts">
        {posts.map((post) => (
          <div key={post.post_id} className="profile-post-item">
            <Post post={post} />
            <div className="profile-post-actions">
              {id ? null : (
                <>
                  <button
                    onClick={() => navigate(`/edit/${post.post_id}`)}
                    className="profile-post-action-button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post.post_id)}
                    className="profile-post-action-button delete"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

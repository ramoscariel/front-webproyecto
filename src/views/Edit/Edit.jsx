import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserPost, savePost } from "./editController";
import NavBar from "../../components/NavBar/NavBar";
import "./Edit.css";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (id) {
      getUserPost(id, setPost);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    savePost(id, post, () => navigate("/profile"));
  };

  return (
    <>
      <NavBar />
      <div className="edit-container">
        <h2 className="edit-title">{id ? "Edit Post" : "Create Post"}</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label className="form__label">
            Title
            <input
              type="text"
              className="form__input"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              required
            />
          </label>
          <label className="form__label">
            Content
            <textarea
              className="form__textarea"
              value={post.content}
              onChange={(e) => setPost({ ...post, content: e.target.value })}
              required
            ></textarea>
          </label>
          <button type="submit" className="form__button">
            Save
          </button>
        </form>
      </div>
    </>
  );
}

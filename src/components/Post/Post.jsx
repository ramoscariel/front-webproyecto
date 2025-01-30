import PropTypes from "prop-types";
import "./Post.css";

export default function Post({ post }) {
  return (
    <article className="post">
      <h1 className="post__title">{post.title}</h1>
      <div className="post__meta">
        <time dateTime={post.date} className="post__date">● {post.date}</time>
        <span className="post__author">by {post.author}</span>
      </div>
      <p className="post__content">{post.content}</p>
    </article>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

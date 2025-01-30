import { getPosts, deletePost } from "../../models/posts";

export const getUserPosts = async (id, setPosts) => {
  const posts = await getPosts(id);
  setPosts(posts);
};

export const deleteUserPost = async (id, onSuccess) => {
  deletePost(id).then(() => onSuccess());
};

import { getPost, createPost, updatePost } from "../../models/posts";

export const getUserPost = async (id, setPost) => {
  const post = await getPost(id);
  setPost(post);
};

export const savePost = async (id, data, onSuccess) => {
  if (id) {
    updatePost(id, data).then(() => onSuccess());
  } else {
    createPost(data).then(() => onSuccess());
  }
};

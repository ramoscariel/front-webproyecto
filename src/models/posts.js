import axios from "axios";
import apiEndpoint from "../config/apiEndpoint";
import { addUsername, addDate } from "../util/modifyPosts";

const postsEndpoint = `${apiEndpoint}/posts`;

export const getPosts = async (id) => {
  try {
    const token = localStorage.getItem("token");
    let resp = [];
    if (id) {
      resp = await axios.get(`${postsEndpoint}?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      resp = await axios.get(`${postsEndpoint}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    const posts = resp.data;
    await addUsername(posts);
    addDate(posts);
    return posts;
  } catch {
    return [];
  }
};

export const getPost = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const resp = await axios.get(`${postsEndpoint}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return resp.data;
  } catch {
    return null;
  }
};

export const createPost = async (data) => {
  try {
    const token = localStorage.getItem("token");
    const response = axios.post(`${postsEndpoint}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err) {
    console.log("error creating post " + err);
  }
};

export const updatePost = async (id, data) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.put(`${postsEndpoint}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err) {
    console.log("error updating post " + err);
  }
};

export const deletePost = async (id) => {
  try {
    const token = localStorage.getItem("token");
    await axios.delete(`${postsEndpoint}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    console.log("error deleting post " + err);
  }
};

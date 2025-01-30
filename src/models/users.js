import axios from "axios";
import apiEndpoint from "../config/apiEndpoint";

const usersEndpoint = `${apiEndpoint}/users`;

export const getUsers = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${usersEndpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch {
    return [];
  }
};

export const login = async (email, password) => {
  const response = await axios.post(`${usersEndpoint}/login`, {
    email: email,
    password: password
  });
  return response.data;
};

export const register = async (email, username, password) => {
  const response = await axios.post(`${usersEndpoint}/register`, {
    email: email,
    username : username,
    password: password
  });
  return response.data;
};

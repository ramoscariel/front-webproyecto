import * as Users from "../models/users";

export const loginUser = async (email, password) => {
  const resp = await Users.login(email, password);
  localStorage.setItem("token", resp.token);
  localStorage.setItem("userId", resp.user_id);
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
};

export const registerUser = async (email, username, password ,onSuccess) => {
  Users.register(email,username,password).then(() => {onSuccess()})
}

import { getUsers } from "../models/users";

export const addUsername = async (posts) => {
  const users = await getUsers();

  posts.forEach((p) => {
    const user = users.find((u) => u.user_id === p.author_id);
    if (user) {
      p.author = user.username;
    }
  });
};

export const addDate = (posts) => {
  posts.forEach((p) => {
    p.date = formatDate(p.creation_time);
  });
};

function formatDate(dateString) {
  const date = new Date(dateString); // Convert the string to a Date object
  const formattedDate = date.toISOString().split("T")[0];
  return formattedDate;
}

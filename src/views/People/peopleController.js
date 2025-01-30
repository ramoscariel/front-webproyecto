import * as Users from "../../models/users";
import { getFollowers, getFollowing, getFollowRequests, respondFollow, askFollow } from "../../models/follows";

export const getUsers = async (setUsers) => {
  const userId = Number(localStorage.getItem("userId"));
  const users = await Users.getUsers();

  // Remove self
  const filteredUsers = users.filter((u) => u.user_id !== userId);

  const followers = await getFollowers();
  const following = await getFollowing();
  const followRequests = await getFollowRequests();
  console.log(followRequests)

  filteredUsers.forEach((u) => {
    u.is_follower = followers.some((f) => f.follower_id === u.user_id);
    u.is_following = following.some((f) => f.followed_id === u.user_id);
    u.follow_request_pending = followRequests.some((f) => f.follower_id === u.user_id);
    u.follow_request_sent = followRequests.some((f) => f.followed_id === u.user_id);
  });
  console.log(filteredUsers)
  setUsers(filteredUsers);
};


export const requestToFollow = async (id, onSuccess) => {
    askFollow(id).then(() => onSuccess())
};

export const respondFollowRequest = async (id, accepted, onSuccess) => {
    respondFollow(id,accepted).then(() => onSuccess())
};
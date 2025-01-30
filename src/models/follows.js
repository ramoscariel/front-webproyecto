import axios from "axios";
import apiEndpoint from "../config/apiEndpoint";

const followsEndpoint = `${apiEndpoint}/follows`;



const getFollows = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  try {
    const resp = await axios.get(`${followsEndpoint}`, config);
    return resp.data;
  } catch {
    return [];
  }
};

export const getFollowRequests = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  try {
    const resp = await axios.get(`${followsEndpoint}/requests`, config);
    return resp.data;
  } catch {
    return [];
  }
}

export const getFollowers = async () => {
  const userId = Number(localStorage.getItem('userId'))
  const follows = await getFollows();
  const followers = [];
  follows.forEach(f => {
    if(f.followed_id === userId){
      followers.push(f)
    }
  });
  return followers;
}

export const getFollowing = async () =>{
  const userId = Number(localStorage.getItem('userId'))
  const follows = await getFollows();
  const following = [];
  follows.forEach(f => {
    if(f.follower_id === userId){
      following.push(f)
    }
  });
  return following
}

export const respondFollow = async (id, accepted) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  try {
    const resp = await axios.post(
      `${followsEndpoint}/respond/${id}`,
      { accepted: accepted },
      config
    );
    return resp.data;
  } catch (err) {
    console.log("error responding follow " + err);
  }
};

export const askFollow = async (id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  try {
    const resp = await axios.post(
      `${followsEndpoint}/request/${id}`,
      { },
      config
    );
    return resp.data;
  } catch (err) {
    console.log("error sending follow request " + err);
  }
};

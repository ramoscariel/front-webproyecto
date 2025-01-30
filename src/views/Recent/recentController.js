import { getFollowing } from "../../models/follows";
import { getPosts } from "../../models/posts";

export const getRecentPosts = async (setPosts) => {
  const following = await getFollowing();
  const posts = []
  for (const f of following) {
    const id = f.followed_id
    const userPosts = await getPosts(id)
    for (const p of userPosts) {
        posts.push(p)
    }
  }
  console.log(posts)
  //TODO sort posts
  posts.length = 5
  setPosts(posts)
};

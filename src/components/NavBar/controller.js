import { getUsers } from "../../models/users";

export const getUsername = async (setUsername) => {
    let username = ""
    const userId = Number(localStorage.getItem('userId'))
    const users = await getUsers();
    users.forEach(u => {
        if(userId === u.user_id){
            username = u.username
        }
    });
    setUsername(username)
}
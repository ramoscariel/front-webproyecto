import { useEffect, useState } from "react";
import { getUsers } from "./peopleController";
import NavBar from "../../components/NavBar/NavBar";
import UserCard from "../../components/UserCard/UserCard";
import "./People.css";

export default function People() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(setUsers);
  }, []);

  const handleCard = () => {
    getUsers(setUsers);
  };

  return (
    <>
      <NavBar />
      <section className="people-container">
        <h2 className="people-title">Users</h2>
        <div className="people-list">
          {users.map((user) => (
            <div key={user.user_id} className="people-item">
              <UserCard user={user} onAction={handleCard} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

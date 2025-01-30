import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { logoutUser } from "../../controllers/usersController";
import { getUsername } from "./controller";
import "./NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();
  const [username, setUsername] = useState([]);

  useEffect(() => {
      getUsername(setUsername);
    }, []);
  return (
    <nav className="navbar">
      <div onClick={() => navigate("/recent")} className="navbar__logo">
        <img src="/assets/microblog-logo.svg" alt="micro-blog logo"></img>
        <h1 className="navbar__heading">micro-blog</h1>
      </div>
      <div className="navbar__navigation">
        <button onClick={() => navigate("/people")} className="navbar__button">
          People
        </button>
        <button onClick={() => navigate("/profile")} className="navbar__button">
          {username}
        </button>
        <button
          onClick={() => {
            logoutUser();
            navigate("/");
          }}
          className="navbar__button"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

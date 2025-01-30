import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../controllers/usersController";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then(() => navigate("/recent"))
      .catch(() => alert("Invalid credentials"));
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleLogin} className="form">
        <label className="form__label">
          Email
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form__input"
          />
        </label>
        <label className="form__label">
          Password
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form__input"
          />
        </label>
        <button type="submit" className="form__button">
          Login
        </button>
      </form>
      <button
        onClick={() => navigate("/register")}
        className="form__link-button"
      >
        Register
      </button>
    </div>
  );
}

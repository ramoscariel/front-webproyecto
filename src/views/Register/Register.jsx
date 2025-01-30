import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../controllers/usersController";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Clear any previous errors
    setError("");

    // Proceed with registration
    registerUser(email, username, password, () => {
      navigate("/");
    });
  };

  return (
    <>
      <form onSubmit={handleRegister} className="form">
        <label className="form__label">
          Email
          <input
            type="email"
            required
            className="form__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="form__label">
          Username
          <input
            type="text"
            required
            className="form__input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="form__label">
          Password
          <input
            type="password"
            required
            className="form__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label className="form__label">
          Confirm Password
          <input
            type="password"
            required
            className="form__input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {error && <p className="form__error">{error}</p>}
        <button type="submit" className="form__button">
          Register
        </button>
      </form>
    </>
  );
}

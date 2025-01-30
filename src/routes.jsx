import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Recent from "./views/Recent/Recent";
import People from "./views/People/People";
import Profile from "./views/Profile/Profile";
import Edit from "./views/Edit/Edit";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/people" element={<People />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/create" element={<Edit />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

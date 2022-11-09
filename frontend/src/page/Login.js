import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/Auth";
import "../CSS/Login.css";

export default function Login({ userData }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const authCtx = useContext(AuthContext);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = userData;
    const ngdung = user.find(
      (u) => u.username === userName && u.password === password
    );
    if (ngdung) {
      authCtx.setUser(ngdung);
      navigate("/");
    } else {
      console.error("Can't find user");
    }
  };

  return (
    <div className="login_container">
      <h2>Welcome !</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn_signin">
          Sign In
        </button>
      </form>
    </div>
  );
}

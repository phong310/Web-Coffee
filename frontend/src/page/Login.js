import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../context/Auth";
import { ArrowLeftOutlined } from "@ant-design/icons";
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
      alert("Can't find user");
    }
  };

  return (
    <div className="body_wrapper">
      <div className="section">
        <img
          src="https://phuclong.com.vn/images/logo_2.png"
          alt=""
          width={80}
        />
        <h1>Welcome</h1>
        <form className="infoform" onSubmit={handleSubmit}>
          <label>Your name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value)
            }} />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }} />
          <button type="submit">Login</button>{" "}
          <p>
            You don't have an account, please sign up{" "}
            <Link to="/register" className="link"><b>Here</b></Link>
          </p>
          <p>
            <Link to="/" className="link"><b><ArrowLeftOutlined style={{ marginRight: 10 }} />Back to home page</b></Link>
          </p>
        </form>
      </div>
    </div>
  );
}

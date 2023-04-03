import React from "react";
import { Link } from "react-router-dom"
import "../CSS/Login.css";

export default function Register() {
  return (
    <div className="body_wrapper">
      <div className="section">
        <h1>Sign Up</h1>
        <form className="infoform">
          <label>Your name</label>
          <input type="text" placeholder="Enter your name" />
          <label>Email address</label>
          <input type="email" placeholder="Enter your email" />
          <label>Password</label>
          <input type="text" placeholder="Enter your password" />
          <label>Confirm Password</label>
          <input type="text" placeholder="Confirm your password" />
          <label>Phone number</label>
          <input type="text" placeholder="Enter your phone" />
          <button type="submit">Continue</button>
          <p>You already hava an account <Link to="/login" className="link"><b>Log in here</b></Link></p>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom"
import { Row, Col } from "antd";
import "../CSS/Login.css";

export default function Register() {
  return (
    <Row className="body_wrapper">
      <Col span={12}>
        <img
          src="https://phuclong.com.vn/uploads/post/20649d183ca5f1-bannertrangchu.jpg"
          alt=""
          style={{ width: "auto", height: "100vh", objectFit: "contain" }}
        />
      </Col>
      <Col span={12}>
        <Col className="section" span={6}>
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
        </Col>
      </Col>
    </Row>
  );
}

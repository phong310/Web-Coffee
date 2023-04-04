import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { Row, Col } from "antd";
import axios from "axios";
import { toast } from 'react-toastify';
import "../CSS/Login.css";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPass, setConfirmPass] = useState("")

  let navigate = useNavigate();


  const handleRegister = async (e) => {
    e.preventDefault();

    if (!userName || !email || !password || !confirmPass || !phoneNumber) {
      toast.error("Vui lòng điền hết mọi chỗ trống");
      return;
    }
    if (password !== confirmPass) {
      toast.error("Mật khẩu và xác nhận mật khẩu không khớp");
      return;
    }
    try {
      const newUsers = {
        username: userName,
        password: password,
        confirm: confirmPass,
        email: email,
        phone: phoneNumber,
      }
      const res = await axios.post("/user/createUser", newUsers)
      console.log(res.data)
      toast.success("Đăng ký tài khoản thành công !");
      navigate("/login")
    } catch (e) {
      console.log("Err:", e)
      toast.error("Đăng ký không thành công")
    }
  }



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
          <img
            src="https://phuclong.com.vn/images/logo_2.png"
            alt=""
            width={80}
          />
          <h1>Sign Up</h1>
          <form className="infoform" onSubmit={handleRegister}>
            <label>Your name:</label>
            <input name="username" value={userName} onChange={(e) => { setUserName(e.target.value) }} type="text" placeholder="Enter your name" />
            <label>Email address:</label>
            <input name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder="Enter your email" />
            <label>Password:</label>
            <input name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Enter your password" />
            <label>Confirm Password:</label>
            <input name="confirm" value={confirmPass} onChange={(e) => { setConfirmPass(e.target.value) }} type="password" placeholder="Confirm your password" />
            <label>Phone number:</label>
            <input name="phone" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} type="text" placeholder="Enter your phone" />
            <button type="submit" onClick={handleRegister}>Continue</button>
            <p>You already hava an account <Link to="/login" className="link"><b>Log in here</b></Link></p>
          </form>
        </Col>
      </Col>
    </Row>
  );
}

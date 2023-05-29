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
        email: email,
        password: password,
        confirm: confirmPass,
        phone: phoneNumber,
      }
      const res = await axios.post("http://localhost:8000/user/createUser", newUsers)
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
          <h1>Đăng ký</h1>
          <form className="infoform" onSubmit={handleRegister}>
            <label>Tên đăng nhập:</label>
            <input name="username" value={userName} onChange={(e) => { setUserName(e.target.value) }} type="text" placeholder="Nhập tên" />
            <label>Email:</label>
            <input name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder="Nhập email" />
            <label>Mật khẩu:</label>
            <input name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Nhập mật khẩu" />
            <label>Xác nhận:</label>
            <input name="confirm" value={confirmPass} onChange={(e) => { setConfirmPass(e.target.value) }} type="password" placeholder="Xác nhận mật khẩu" />
            <label>Số điện thoại:</label>
            <input name="phone" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} type="text" placeholder="Nhập số điện thoại" />
            <button type="submit" onClick={handleRegister}>Tiếp tục</button>
            <p>Bạn đã có tài khoản ? <Link to="/login" className="link"><b>Đăng nhập tại đây</b></Link></p>
          </form>
        </Col>
      </Col>
    </Row>
  );
}

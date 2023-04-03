import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Carousel, Row, Col, Layout, Divider, Typography, Button } from "antd";
import "antd/dist/antd.css";
import StoreSystem from "../components/StoreSystem";
import Backtop from "../components/BackTop";
import styled from "styled-components";

const { Content } = Layout;
const { Title } = Typography;

const imgStyle = {
  width: "100%",
  height: "100%",
};

const styleColor = {
  color: "#0C713D",
};
const BtnStyles = styled(Button)`
  background-color: #0c713d;
  color: white;
`;
const WrappStyled1 = styled.div`
  padding: 50px;
`;
const WrappStyled2 = styled.div`
  padding: 50px 100px 0px 0px;
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <Carousel autoplay style={{ marginTop: 10 }}>
          <div>
            <img
              style={imgStyle}
              alt=""
              src="https://phuclong.com.vn/uploads/banner/4b9491980fcdae-traolong1.jpg"
            />
          </div>
          <div>
            <img
              style={imgStyle}
              alt=""
              src="https://phuclong.com.vn/uploads/banner/1f42d2606624d2-1920_576.png"
            />
          </div>
          <div>
            <img
              style={imgStyle}
              alt=""
              src="https://phuclong.com.vn/uploads/banner/4c5cb845ad632c-digital1920x576.jpg"
            />
          </div>
        </Carousel>
        <Content style={{ padding: "100px 100px 0px 200px" }}>
          <Row>
            <Col span={12}>
              <img
                style={{
                  width: "500px",
                  height: "500px",
                  border: "5px solid #fff",
                }}
                alt=""
                src="https://phuclong.com.vn/uploads/post/20649d183ca5f1-bannertrangchu.jpg"
              />
            </Col>
            <Col span={12}>
              <WrappStyled1>
                <Title level={2} style={styleColor}>
                  TỪ NHỮNG MẦM TRÀ, CHÚNG TÔI TẠO RA NIỀM ĐAM MÊ
                </Title>
                <Divider />
                <p style={styleColor}>
                  Trải qua hơn 50 năm chắt chiu tinh hoa từ những búp trà xanh
                  và hạt cà phê thượng hạng cùng mong muốn mang lại cho khách
                  hàng những trải nghiệm giá trị nhất khi thưởng thức, Phúc Long
                  liên tục là thương hiệu tiên phong với nhiều ý tưởng sáng tạo
                  đi đầu trong ngành trà và cà phê.
                </p>
                <p>
                  Chúng tôi tin rằng từng sản phẩm trà và cà phê sẽ càng thêm
                  hảo hạng khi được tạo ra từ sự phấn đấu không ngừng cùng niềm
                  đam mê. Và chính kết nối dựa trên niềm tin, sự trung thực và
                  tin yêu sẽ góp phần mang đến những nét đẹp trong văn hóa
                  thưởng trà và cà phê ngày càng bay cao, vươn xa
                </p>
                <br />
                <BtnStyles type="text">XEM THÊM</BtnStyles>
              </WrappStyled1>
            </Col>
          </Row>
        </Content>
        <Content style={{ padding: "100px 0px 0px 200px" }}>
          <Row>
            <Col span={12}>
              <WrappStyled2>
                <Title level={2} style={styleColor}>
                  ĐỘI NGŨ NHÂN VIÊN TRÀN ĐẦY NHIỆT HUYẾT
                </Title>
                <Divider />
                <p style={styleColor}>
                  Trong suốt quá trình hoạt động và phát triển, đội ngũ quản lý
                  và nhân viên của Phúc Long Coffee & Tea, qua bao thế hệ, đã
                  cùng nhau xây dựng, nuôi dưỡng niềm đam mê dành cho trà và cà
                  phê với mong muốn được thử thách bản thân trong ngành dịch vụ
                  năng động và sáng tạo.
                </p>
                <br />
                <BtnStyles type="text">GIA NHẬP ĐỘI NGŨ PHÚC LONG</BtnStyles>
              </WrappStyled2>
            </Col>
            <Col span={12}>
              <img
                style={{
                  width: "400px",
                  height: "550px",
                  marginLeft: 20,
                  border: "5px solid #fff",
                }}
                alt=""
                src="https://phuclong.com.vn/uploads/post/024b7d5e73bbb2-8ed98f521583690431954887e772tuyendung1.jpg"
              />
            </Col>
          </Row>
        </Content>
        <StoreSystem />
        <Backtop />
      </div>
      <Footer />
    </>
  );
}

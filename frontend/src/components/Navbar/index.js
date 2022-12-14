import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Menu, Typography, Space, Button, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";
import CartContext from "../../context/Cart";
import AuthContext from "../../context/Auth";

const { Header, Content } = Layout;
const { Text } = Typography;
const fontColor = {
  color: "#0C713D",
};
const BtnStyle = styled(Button)`
  padding-top: 15px;
  display: flex;
  font-size: 12px;
  border-radius: 10px;
  width: 110%;
  height: 45%;
  color: #0c713d;
`;
const RowStyle = styled(Row)`
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
`;
const HeaderStyle = styled(Header)`
  background-color: white;
  text-align: center;
`;
const WrappCart = styled.div`
  margin-left: 5px;
`;
const LayoutStyled = styled(Layout)`
  margin-bottom: 5px;
`;

export default function Navbar() {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  return (
    <>
      <div>
        <LayoutStyled>
          <HeaderStyle>
            <Row>
              <Col span={8}>
                <img src="https://phuclong.com.vn/images/common/delivery.png" />
              </Col>
              <Col span={8}>
                <img
                  src="https://phuclong.com.vn/images/logo_2.png"
                  width={80}
                />
              </Col>
              <Col span={8}>
                <Space size="middle">
                  <Link to="/login" style={{ fontWeight: "bold", color: "Black" }}>
                    Đăng nhập
                  </Link>
                  <Text>
                    <a href="" style={fontColor}>
                      VN
                    </a>{" "}
                    |{" "}
                    <a href="" style={fontColor}>
                      EN
                    </a>
                  </Text>
                  {authCtx.user ? (
                    <Link to="/cart">
                      <BtnStyle>
                        Giỏ hàng
                        <WrappCart>
                          <Badge
                            count={cartCtx.cartItem.length}
                            showZero
                            color="#0C713D"
                          >
                            <ShoppingCartOutlined
                              style={{ fontSize: 22, color: "#0C713D" }}
                            />
                          </Badge>
                        </WrappCart>
                      </BtnStyle>
                    </Link>
                  ) : null}
                </Space>
              </Col>
            </Row>
          </HeaderStyle>
        </LayoutStyled>
        <Layout style={{ borderTop: "3px solid #F5F5F5" }}>
          <Content style={{ backgroundColor: "white" }}>
            <RowStyle>
              <Col span={2}>
                <Menu mode="horizontal">
                  <Menu.Item key="empty" style={{ fontSize: 12 }}>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      TRANG CHỦ
                    </Link>
                  </Menu.Item>
                </Menu>
              </Col>
              <Col span={2}>
                <Menu mode="horizontal">
                  <Menu.SubMenu
                    key="SubMenu"
                    title="CÀ PHÊ"
                    style={{ fontSize: 12 }}
                  >
                    <Menu.Item key="one">
                      Hành trình tách cà phê vị đậm
                    </Menu.Item>
                    <Menu.Item key="two">Hạt cà phê phúc long</Menu.Item>
                    <Menu.Item key="three">Nghê thuật pha chế</Menu.Item>
                  </Menu.SubMenu>
                </Menu>
              </Col>
              <Col span={2}>
                <Menu mode="horizontal">
                  <Menu.SubMenu
                    key="SubMenu"
                    title="TRÀ"
                    style={{ fontSize: 12 }}
                  >
                    <Menu.Item key="one">Hành trình tách trà đậm vị</Menu.Item>
                    <Menu.Item key="two">Lá trà phúc long</Menu.Item>
                    <Menu.Item key="three">Nghê thuật pha trà</Menu.Item>
                  </Menu.SubMenu>
                </Menu>
              </Col>
              <Col span={2}>
                <Menu mode="horizontal">
                  <Link to={"/products/"}>
                    <Menu.SubMenu
                      key="SubMenu"
                      title="THỨC UỐNG"
                      style={{ fontSize: 12, color: "black" }}
                    >
                      <Menu.Item key="one">Thức uống</Menu.Item>
                      <Menu.Item key="two">Bánh tráng miệng</Menu.Item>
                      <Menu.Item key="three">Đồ ăn vặt</Menu.Item>
                    </Menu.SubMenu>
                  </Link>
                </Menu>
              </Col>
              <Col span={2}>
                <Menu mode="horizontal">
                  <Menu.SubMenu
                    key="SubMenu"
                    title="SẢN PHẨM"
                    style={{ fontSize: 12 }}
                  >
                    <Menu.Item key="one" style={{ fontWeight: "bold" }}>
                      TRÀ
                    </Menu.Item>
                    <Menu.Item key="two" style={{ fontWeight: "bold" }}>
                      CÀ PHÊ
                    </Menu.Item>
                    <Menu.Item key="three" style={{ fontWeight: "bold" }}>
                      BÁNH TRUNG THU
                    </Menu.Item>
                  </Menu.SubMenu>
                </Menu>
              </Col>
              <Col span={2}>
                <Menu mode="horizontal">
                  <Menu.Item key="empty" style={{ fontSize: 12 }}>
                    KHUYẾN MÃI
                  </Menu.Item>
                </Menu>
              </Col>
              <Col span={2}>
                <Menu mode="horizontal">
                  <Menu.SubMenu
                    key="SubMenu"
                    title="VỀ CHÚNG TÔI"
                    style={{ fontSize: 12 }}
                  >
                    <Menu.Item key="one">
                      Hành trình tách cà phê vị đậm
                    </Menu.Item>
                    <Menu.Item key="two">Hạt cà phê phúc long</Menu.Item>
                    <Menu.Item key="three">Nghê thuật pha chế</Menu.Item>
                  </Menu.SubMenu>
                </Menu>
              </Col>
              <Col span={2}>
                <Menu mode="horizontal">
                  <Menu.Item key="empty" style={{ fontSize: 12 }}>
                    THẺ
                  </Menu.Item>
                </Menu>
              </Col>
              <Col span={2}>
                <Menu mode="horizontal">
                  <Menu.SubMenu
                    key="SubMenu"
                    title={
                      <SearchOutlined
                        style={{ fontSize: "20px" }}
                        type="setting"
                      />
                    }
                  >
                    <Menu.Item key="one">Sản phẩm cà phê</Menu.Item>
                    <Menu.Item key="two">Sản phẩm Trà</Menu.Item>
                  </Menu.SubMenu>
                </Menu>
              </Col>
            </RowStyle>
          </Content>
        </Layout>
      </div>
    </>
  );
}

import React from "react";
import { Layout, Col, Row, Button, Typography, Select } from "antd";
import { ShopOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

const styledMap = {
    backgroundColor: "#0C713D",
    padding: "50px 100px 10px 100px",
    marginTop: "60px",
  };
  const styledCity = {
    marginLeft: 10,
    fontSize: 17,
    color: "white",
  };

export default function StoreSystem() {
  return (
    <Content style={styledMap}>
      <Row>
        <Col span={12}>
          <Title level={2} style={{ color: "white" }}>
            HỆ THỐNG CỬA HÀNG
          </Title>
          <Select
            defaultValue ="TỈNH / THÀNH PHỐ"
            style={{
              width: 200,
              fontSize: 15,
            }}
          >
            <Option>Hà Nội</Option>
            <Option>Hồ Chí Minh</Option>
            <Option>Sài Gòn</Option>
            <Option>Hải Phòng</Option>
            <Option>Thái nguyên</Option>
            <Option>Bắc Ninh</Option>
          </Select>
          <Select
            defaultValue ="QUẬN"
            style={{
              marginLeft: 10,
              width: 200,
              fontSize: 15,
            }}
          >
            <Option>Quận Tây Hồ</Option>
            <Option>Quận Gò Vấp</Option>
            <Option>Quận Tân Bình</Option>
            <Option>Quận Ninh Kiều</Option>
            <Option>Quận Hoàng Mai</Option>
            <Option>Quận Cầu Giấy</Option>
          </Select>
          <Title level={4} style={{ color: "white", marginTop: 30 }}>
            Địa chỉ cửa hàng
          </Title>
          <div style={{ overflowY: "scroll", maxHeight: 300 }}>
            <div style={{ display: "flex", margin: "20px 0px" }}>
              <div className="infor">
                <div style={{ display: "flex" }}>
                  <ShopOutlined
                    style={{ fontSize: 25, color: "white", marginTop: 10 }}
                  />
                  <Text style={styledCity}>
                    Phúc Long Lê Văn Sỹ - 350 Lê Văn Sỹ, quận 3, HCM
                    <br />
                    Điện thoại: 028 38 555 288
                  </Text>
                </div>
              </div>
              <div style={{ marginLeft: 20 }}>
                <Button ghost style={{ color: "white", padding: "0px 50px" }}>
                  Chỉ đường
                </Button>
              </div>
            </div>
            <div style={{ display: "flex", margin: "20px 0px" }}>
              <div className="infor">
                <div style={{ display: "flex" }}>
                  <ShopOutlined
                    style={{ fontSize: 25, color: "white", marginTop: 10 }}
                  />
                  <Text style={styledCity}>
                    Phúc Long Lê Văn Sỹ - 350 Lê Văn Sỹ, quận 3, HCM
                    <br />
                    Điện thoại: 028 38 555 288
                  </Text>
                </div>
              </div>
              <div style={{ marginLeft: 20 }}>
                <Button ghost style={{ color: "white", padding: "0px 50px" }}>
                  Chỉ đường
                </Button>
              </div>
            </div>
            <div style={{ display: "flex", margin: "20px 0px" }}>
              <div className="infor">
                <div style={{ display: "flex" }}>
                  <ShopOutlined
                    style={{ fontSize: 25, color: "white", marginTop: 10 }}
                  />
                  <Text style={styledCity}>
                    Phúc Long Lê Văn Sỹ - 350 Lê Văn Sỹ, quận 3, HCM
                    <br />
                    Điện thoại: 028 38 555 288
                  </Text>
                </div>
              </div>
              <div style={{ marginLeft: 20 }}>
                <Button ghost style={{ color: "white", padding: "0px 50px" }}>
                  Chỉ đường
                </Button>
              </div>
            </div>
            <div style={{ display: "flex", margin: "20px 0px" }}>
              <div className="infor">
                <div style={{ display: "flex" }}>
                  <ShopOutlined
                    style={{ fontSize: 25, color: "white", marginTop: 10 }}
                  />
                  <Text style={styledCity}>
                    Phúc Long Lê Văn Sỹ - 350 Lê Văn Sỹ, quận 3, HCM
                    <br />
                    Điện thoại: 028 38 555 288
                  </Text>
                </div>
              </div>
              <div style={{ marginLeft: 20 }}>
                <Button ghost style={{ color: "white", padding: "0px 50px" }}>
                  Chỉ đường
                </Button>
              </div>
            </div>
            <div style={{ display: "flex", margin: "20px 0px" }}>
              <div className="infor">
                <div style={{ display: "flex" }}>
                  <ShopOutlined
                    style={{ fontSize: 25, color: "white", marginTop: 10 }}
                  />
                  <Text style={styledCity}>
                    Phúc Long Lê Văn Sỹ - 350 Lê Văn Sỹ, quận 3, HCM
                    <br />
                    Điện thoại: 028 38 555 288
                  </Text>
                </div>
              </div>
              <div style={{ marginLeft: 20 }}>
                <Button ghost style={{ color: "white", padding: "0px 50px" }}>
                  Chỉ đường
                </Button>
              </div>
            </div>
            <div style={{ display: "flex", margin: "20px 0px" }}>
              <div className="infor">
                <div style={{ display: "flex" }}>
                  <ShopOutlined
                    style={{ fontSize: 25, color: "white", marginTop: 10 }}
                  />
                  <Text style={styledCity}>
                    Phúc Long Lê Văn Sỹ - 350 Lê Văn Sỹ, quận 3, HCM
                    <br />
                    Điện thoại: 028 38 555 288
                  </Text>
                </div>
              </div>
              <div style={{ marginLeft: 20 }}>
                <Button ghost style={{ color: "white", padding: "0px 50px" }}>
                  Chỉ đường
                </Button>
              </div>
            </div>
          </div>
        </Col>
        <Col span={12}></Col>
      </Row>
    </Content>
  );
}

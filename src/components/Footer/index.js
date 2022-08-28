import React from "react";
import { Layout, Col, Row, Button, Input, Typography, Space } from "antd";
import {
  InstagramOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  TwitterOutlined,
  CopyrightOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { footer } = Layout;

const iconSize = {
  fontSize: 20,
};
const colorFont = {
  color: "Black",
  textDecoration: "none",
};
const copyRight = {
  height: 17,
  backgroundColor: "black",
  textAlign: 'center',
  color: 'White',
  fontSize: 10
}

export default function Footer() {
  return (
    <>
      <footer style={{ padding: "30px 50px 20px 50px" }}>
        <Row>
          <Col span={8} style={{ marginLeft: 150 }}>
            <Text>
              <b>Trụ sở chính: </b>Công ty Cổ Phần Phúc Long Heritage - ĐKKD:
              0316 871719 do sở KHĐT TPHCM cấp lần đầu ngày 21/05/2021
              <br />
              do sở KHĐT TPHCM cấp lần đầu ngày 21/05/2021
            </Text>
            <br />
            <Text>
              <b>Nhà máy: </b> D_8D_CN Đường XE 1, Khu Công Nghiệp Mỹ Phước III,
              phường Mỹ Phước, thị xã Bến Cát, tỉnh Bình Dương, Việt Nam
            </Text>
            <br />
            <Text>
              <b>Địa chỉ: </b>42/24 - 42/26 Đường 643 Tạ Quang Bửu, phường 4,
              quận 8, Hồ Chí Minh
            </Text>
            <br />
            <Text>
              <b>Điện thoại: </b>028 6263 0377 - 6263 0378
            </Text>
            <br />
            <Text>
              <b>Fax: </b>(028) 6263 0379
            </Text>
            <br />
            <Text>
              <b>Email: </b>sales@phuclong.masangroup.com <br />{" "}
              phamdinhphong12@gmail.com
            </Text>
          </Col>
          <Col span={5} style={{ marginLeft: 100 }}>
            <Title level={4}>Đăng ký nhận tin khuyến mãi</Title>
            <Space>
              <Input placeholder="Nhập địa chỉ Email" style={{ width: 170 }} />
              <Button>Gửi</Button>
            </Space>
            <br />
            <br />
            <Text>
              <a href="" style={colorFont}>
                Chính sách đặt hàng <br /> Chính sách bảo mật thông tin
              </a>
            </Text>
          </Col>
          <Col span={5} style={{ marginLeft: 10, textAlign: "right" }}>
            <Text>
              <a href="" style={colorFont}>
                VN
              </a>{" "}
              |{" "}
              <a href="" style={colorFont}>
                EN
              </a>
            </Text>
            <br />
            <img
              src="https://phuclong.com.vn/images/common/dathongbao.png"
              alt=""
              style={{ width: 200 }}
            />
            <br />
            <Space size="middle">
              <FacebookOutlined style={iconSize} />
              <TwitterOutlined style={iconSize} />
              <InstagramOutlined style={iconSize} />
              <YoutubeOutlined style={iconSize} />
            </Space>
          </Col>
        </Row>
      </footer>
      <footer style={copyRight}>
        <Space>
          <CopyrightOutlined />
          <Text style={{color: 'White'}}>2022 Phạm Đình Phong CO., Ltd</Text>
        </Space>
      </footer>
    </>
  );
}

import React from "react";
import { Breadcrumb, Typography } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

const { Title } = Typography;

const BreadcrumbStyled = styled(Breadcrumb)`
  font-size: 15px;
  margin-top: 10px;
  margin-left: 45%;
`;
const TitleStyle = styled(Title)`
  text-align: center;
  margin-top: 25px;
`;

const imgStyle = {
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
};

export default function HeadingTitle(props) {
  return (
    <div>
      <BreadcrumbStyled>
        <Breadcrumb.Item>
          <Link to="/">Trang chủ</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/products">{props.title}</Link>
        </Breadcrumb.Item>
      </BreadcrumbStyled>
      <div>
        <TitleStyle level={1} style={{ color: "#0C713D" }}>
          {props.title}
        </TitleStyle>
        <img
          style={imgStyle}
          src="https://phuclong.com.vn/images/icon_tealeaves.png"
          alt=""
        />
      </div>
    </div>
  );
}

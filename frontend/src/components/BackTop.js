import React from "react";
import { BackTop } from "antd";
import { UpOutlined } from "@ant-design/icons";

export default function Backtop() {
  return (
    <div>
      <BackTop>
        <div
          style={{
            height: 40,
            width: 40,
            fontSize: 25,
            color: "#0C713D",
            textAlign: "center",
          }}
        >
          <UpOutlined />
        </div>
      </BackTop>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Layout, Tabs, Select, Input, Button, Divider } from "antd";
import HeadingTitle from "../components/HeadingTitle";
import Backtop from "../components/BackTop";
import ProductItem from "./Items/ProductItem";
import SnackItem from "./Items/SnackItem";
import BakeryItem from "./Items/BakeryItem";
import { SearchOutlined } from "@ant-design/icons";
import "../CSS/Products.css";

const { Content } = Layout;
const TabPane = Tabs.TabPane;
const { Option } = Select;

export default function Products() {
  const [productsData, setProductsData] = useState([]);
  const [snackData, setSnackData] = useState([]);
  const [bakeryData, setBakeryData] = useState([]);
  const [title, setTitle] = useState("THỨC UỐNG");

  // useEffect call API (firebase)
  useEffect(() => {
    fetch("https://coffee-app-9fa2d-default-rtdb.firebaseio.com/products.json")
      .then((res) => res.json())
      .then((resJson) => {
        setProductsData(Object.values(resJson.drinks));
        setSnackData(Object.values(resJson.snacks));
        setBakeryData(Object.values(resJson.bakery));
        // console.log(resJson.drinks);
      });
  }, []);

  const handleChangeTitle = (e) => {
    switch (e) {
      case "1":
        setTitle("THỨC UỐNG");
        break;
      case "2":
        setTitle("SNACKS");
        break;
      case "3":
        setTitle("BAKERY");
        break;
      default:
        setTitle("THỨC UỐNG");
    }
  };

  return (
    <>
      <Navbar />
      <img
        className="img-cover"
        alt=""
        src="https://phuclong.com.vn/uploads/category/3366d8e73e57be-banner_1920576.png"
      />
      <HeadingTitle title={title} />
      <Content>
        <div className="products_container">
          <Tabs
            onChange={handleChangeTitle}
            defaultActiveKey="1"
            centered
            tabBarStyle={{ color: "#0C713D", fontWeight: "600" }}
          >
            <TabPane tab="THỨC UỐNG" key="1">
              <div className="container">
                <div className="wrapper">
                  <div className="group_item">
                    <strong className="group_item_name">Nhóm sản phẩm</strong>
                    <Select
                      defaultValue="Chọn nhóm"
                      className="group_item_select"
                    >
                      <Option>Phuc Long Signature</Option>
                      <Option>Special Tea</Option>
                      <Option>Cold Brew Tea</Option>
                      <Option>Signature Coffee</Option>
                    </Select>
                  </div>
                  <div className="group_price">
                    <strong className="group_price_title">Theo giá</strong>
                    <Select
                      defaultValue="Không lựa chọn"
                      className="group_item_select_price"
                    >
                      <Option>Không lựa chọn</Option>
                      <Option>Từ thấp đến cao</Option>
                      <Option>Từ cao đến thấp</Option>
                    </Select>
                  </div>
                  <div className="group_search">
                    <strong>Tìm kiếm</strong>
                    <Input type="text" placeholder="Tên sản phẩm" />
                    <Button>
                      <SearchOutlined />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="wrapper_products">
                {productsData.map((product) => {
                  return <ProductItem product={product} key={product.id} />;
                })}
              </div>
              <Divider />
            </TabPane>
            <TabPane tab="SNACKS" key="2">
              <div className="container_snack">
                <div className="wrapper_snack">
                  <div className="snack_price">
                    <strong className="snack_price_title">Theo giá</strong>
                    <Select
                      defaultValue="Không lựa chọn"
                      className="snack_item_select_price"
                    >
                      <Option>Không lựa chọn</Option>
                      <Option>Từ thấp đến cao</Option>
                      <Option>Từ cao đến thấp</Option>
                    </Select>
                  </div>
                  <div className="snack_search">
                    <strong>Tìm kiếm</strong>
                    <Input type="text" placeholder="Tên sản phẩm" />
                    <Button>
                      <SearchOutlined />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="wrapper_products">
                {snackData.map((snacks) => {
                  return <SnackItem snacks={snacks} key={snacks.id} />;
                })}
              </div>
              <Divider />
            </TabPane>
            <TabPane tab="BAKERY" key="3">
              <div className="container_snack">
                <div className="wrapper_snack">
                  <div className="snack_price">
                    <strong className="snack_price_title">Theo giá</strong>
                    <Select
                      defaultValue="Không lựa chọn"
                      className="snack_item_select_price"
                    >
                      <Option>Không lựa chọn</Option>
                      <Option>Từ thấp đến cao</Option>
                      <Option>Từ cao đến thấp</Option>
                    </Select>
                  </div>
                  <div className="snack_search">
                    <strong>Tìm kiếm</strong>
                    <Input type="text" placeholder="Tên sản phẩm" />
                    <Button>
                      <SearchOutlined />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="wrapper_products">
                {bakeryData.map((bakery) => {
                  return <BakeryItem bakery={bakery} key={bakery.id} />;
                })}
              </div>
              <Divider />
            </TabPane>
          </Tabs>
        </div>
      </Content>
      <Backtop />
    </>
  );
}

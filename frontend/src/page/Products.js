import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Layout, Tabs, Select, Input, Button, Divider, Tooltip } from "antd";
import HeadingTitle from "../components/HeadingTitle";
import Backtop from "../components/BackTop";
import ProductItem from "./Items/ProductItem";
import SnackItem from "./Items/SnackItem";
import BakeryItem from "./Items/BakeryItem";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import axios from "axios";
import "../CSS/Products.css";

const { Content } = Layout;
const TabPane = Tabs.TabPane;
const { Option } = Select;

export default function Products({
  productsData,
  setProductsData,
  snackData,
  setSnackData,
  bakeryData,
  setBakeryData,
}) {
  const [title, setTitle] = useState("🥤 THỨC UỐNG ☕️");
  const [filterName, setFilterName] = useState("")
  // sessionStorage.setItem('filterProduct', JSON.stringify(filterProduct));
  // console.log(filterProduct, "Mảng filter:")


  const handleChangeTitle = (e) => {
    switch (e) {
      case "1":
        setTitle("🥤 THỨC UỐNG ☕️");
        break;
      case "2":
        setTitle("🫘 SNACKS 🍿");
        break;
      case "3":
        setTitle("🍩 BAKERY 🍰");
        break;
      default:
        setTitle("THỨC UỐNG");
    }
  };

  // sắp xếp price
  const SortItem = (item, data, setData) => {
    const result = data.filter((item) => item.price);
    switch (item) {
      case (item = "increase-price"):
        result.sort((a, b) => a.price - b.price);
        setData(result);
        break;
      case (item = "descrease-price"):
        result.sort((a, b) => b.price - a.price);
        setData(result);
        break;
      default:
        setData(data);
        break;
    }
  };

  // Tìm kiếm theo tên
  const handleSearchFilter = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/search?title=${filterName}`);
      console.log(res.data)

    } catch (e) {
      console.log("Err:", e)
    }

  }


  // Reset tìm kiếm
  const handleReset = () => {
  }


  return (
    <>
      <Navbar />
      <img
        className="img-cover"
        alt="cover"
        src="https://phuclong.com.vn/uploads/category/d028083085975d-dr_coconutcaramel_1920576old.jpg"
      />
      <HeadingTitle title={title} />
      <Content className="content_product">
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
                      onChange={(e) =>
                        SortItem(e, productsData, setProductsData)
                      }
                    >
                      <Option value="no-select">Không lựa chọn</Option>
                      <Option value="increase-price">Từ thấp đến cao</Option>
                      <Option value="descrease-price">Từ cao đến thấp</Option>
                    </Select>
                  </div>
                  <div className="group_search">
                    <strong>Tìm kiếm</strong>
                    <Input value={filterName} onChange={(e) => setFilterName(e.target.value)} type="text" placeholder="Tên sản phẩm" />
                    <Tooltip placement="top" title="Tìm kiếm">
                      <Button onClick={handleSearchFilter} >
                        <SearchOutlined />
                      </Button>
                    </Tooltip>

                    <Tooltip placement="top" title="Reset">
                      <Button onClick={handleReset} >
                        <ReloadOutlined />
                      </Button>
                    </Tooltip>

                  </div>
                </div>
              </div>

              {/* Đồ uống */}
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
                      onChange={(e) => SortItem(e, snackData, setSnackData)}
                    >
                      <Option value="no-select">Không lựa chọn</Option>
                      <Option value="increase-price">Từ thấp đến cao</Option>
                      <Option value="descrease-price">Từ cao đến thấp</Option>
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
              {/* Snack */}
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
                      onChange={(e) => SortItem(e, bakeryData, setBakeryData)}
                    >
                      <Option value="no-select">Không lựa chọn</Option>
                      <Option value="increase-price">Từ thấp đến cao</Option>
                      <Option value="descrease-price">Từ cao đến thấp</Option>
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

              {/* Bakery */}
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
      <Footer />
    </>
  );
}

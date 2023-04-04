import React, { useEffect, useState } from "react";
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

export default function Products() {
  const [title, setTitle] = useState("🥤 THỨC UỐNG ☕️");
  const [imgCover, setImgCover] = useState("https://phuclong.com.vn/uploads/category/d028083085975d-dr_coconutcaramel_1920576old.jpg")

  // Tìm kiếm
  const [filterName, setFilterName] = useState("")
  const [filterSnack, setFilterSnack] = useState("")
  const [filterBakery, setFilterBakery] = useState("")

  const [products, setProducts] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [bakery, setBakery] = useState([])

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/getAllproducts")
      setProducts(res.data)

    } catch (e) {
      console.log("Err:", e)
    }
  }

  const getSnacks = async () => {
    try {
      const res = await axios.get("http://localhost:8000/snacks/getAllSnack")
      setSnacks(res.data)

    } catch (e) {
      console.log("Err:", e)
    }
  }

  const getBakery = async () => {
    try {
      const res = await axios.get("http://localhost:8000/bakery/getAllBakery")
      setBakery(res.data)

    } catch (e) {
      console.log("Err:", e)
    }
  }


  useEffect(() => {
    getProducts();
    getSnacks();
    getBakery();
  }, [])


  const handleChangeTitle = (e) => {
    switch (e) {
      case "1":
        setTitle("🥤 THỨC UỐNG ☕️");
        setImgCover("https://phuclong.com.vn/uploads/category/d028083085975d-dr_coconutcaramel_1920576old.jpg")
        break;
      case "2":
        setTitle("🫘 SNACKS 🍿");
        setImgCover("https://phuclong.com.vn/uploads/category/035bb0ff5337a6-f31f1487ea3b853793e91869fe90a0c9ef.jpg")
        break;
      case "3":
        setTitle("🍩 BAKERY 🍰");
        setImgCover("https://phuclong.com.vn/uploads/category/cc670390a9c58d-15deb67f86b543croissant.jpg")
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
      const resSnack = await axios.get(`http://localhost:8000/snacks/search?title=${filterSnack}`)
      const resBakery = await axios.get(`http://localhost:8000/bakery/search?title=${filterBakery}`)
      setProducts(res.data)
      setBakery(resBakery.data)
      setSnacks(resSnack.data)

    } catch (e) {
      console.log("Err:", e)
    }

  }


  // Reset tìm kiếm
  const handleReset = () => {
    setFilterName("")
    setFilterSnack("")
    setFilterBakery("")
    getProducts();
    getSnacks();
    getBakery();
  }


  return (
    <>
      <Navbar />
      <img
        className="img-cover"
        alt="cover"
        src={imgCover}
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
                        SortItem(e, products, setProducts)
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
                {products.length !== 1 ? <div className="product_item">
                  <div className="item_wrapper">
                    <span className="bage_new">Món mới</span>
                    <img className="img_in" src="https://phuclong.com.vn/uploads/dish/c4692e6548c0af-65000306hngtrcarameldaxay.png" alt="" />
                  </div>
                  <div className="info_item">
                    <div className="item_name">Hồng Trà Caramel Dừa Đá Xay</div>
                    <div className="item_price">70.000đ</div>
                    <button className="item_btn">ĐẶT HÀNG</button>
                  </div>
                </div> : ""}
                {products.map((product) => {
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
                      onChange={(e) => SortItem(e, snacks, setSnacks)}
                    >
                      <Option value="no-select">Không lựa chọn</Option>
                      <Option value="increase-price">Từ thấp đến cao</Option>
                      <Option value="descrease-price">Từ cao đến thấp</Option>
                    </Select>
                  </div>
                  <div className="snack_search">
                    <strong>Tìm kiếm</strong>
                    <Input value={filterSnack} onChange={(e) => setFilterSnack(e.target.value)} type="text" placeholder="Tên sản phẩm" />
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
              {/* Snack */}
              <div className="wrapper_products">
                {snacks.map((snacks) => {
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
                      onChange={(e) => SortItem(e, bakery, setBakery)}
                    >
                      <Option value="no-select">Không lựa chọn</Option>
                      <Option value="increase-price">Từ thấp đến cao</Option>
                      <Option value="descrease-price">Từ cao đến thấp</Option>
                    </Select>
                  </div>
                  <div className="snack_search">
                    <strong>Tìm kiếm</strong>
                    <Input value={filterBakery} onChange={(e) => setFilterBakery(e.target.value)} type="text" placeholder="Tên sản phẩm" />
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

              {/* Bakery */}
              <div className="wrapper_products">
                {bakery.map((bakery) => {
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

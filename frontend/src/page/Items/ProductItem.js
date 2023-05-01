import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Typography, Col, Image } from "antd";
import CartContext from "../../context/Cart";
import AuthContext from "../../context/Auth";
import Money from "../../components/Money";
import AddProduct from "../../components/Modal/addProduct";
import Alert from "../../components/Alert";
import "../../CSS/ProductItem.css";

const { Title } = Typography;

const ProductItem = (props) => {
  const { product } = props;
  const auth = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  const { cartItem, setCartItem } = cartCtx;
  // console.log(cartCtx);

  //Alert
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState("success");
  let navigate = useNavigate();

  // Modal pick size & quantity
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [item, setItem] = useState()

  const showModal = () => {
    setIsModalOpen(true);
    setAlertVisible(false);
  };


  const onAddToCart = (item, quantity) => {
    if (!auth.user) {
      setAlertType("confirm");
      setAlertVisible(true);
      return;
    }
    setAlertVisible(true);
    setItem(item)
    // const newCartItems = cartItem.slice(0);
    const index = cartItem.findIndex((cart) => cart.id === item.id);
    if (index < 0) {
      quantity = 1;
      item.quantity = quantity;
      // newCartItems.push(item);
      setAlertType("success");
    } else {
      // newCartItems.splice(index, 1);
      // console.log("item have already existed");
      setAlertType("warning");
    }
    // setCartItem(newCartItems);
  };



  const AlerTypeMap = {
    success: "Sản phẩm đã được chọn vui lòng hoàn tất để thanh toán",
    warning: "Sản phẩm đã tồn tại trong giỏ hàng",
    confirm: "Vui lòng đăng nhập trước khi đặt hàng",
  };

  return (
    <>
      <Col className="product_wrapper">
        <Card
          className="product_cart"
          hoverable
        // cover={<img alt="" src={product.img} />}
        >
          <Col className="product_img">
            <Image src={product.img} width={150} />
          </Col>
          <Title level={5} className="product_title">
            {product.title}
          </Title>
          <strong className="product_price">
            <Money value={product.price} />
          </strong>
          <Button className="btnAdd" onClick={() => onAddToCart(product)}>
            ĐẶT HÀNG
          </Button>
        </Card>
      </Col>
      <Alert
        visible={alertVisible}
        content={AlerTypeMap[alertType]}
        type={alertType}
        confirmText={!auth.user ? "Đăng nhập" : "Tiếp tục"}
        cancelText="Hủy"
        onCancel={() => {
          setAlertVisible(false);
        }}
        onConfirm={() => {
          if (!auth.user) {
            navigate("/login");
          } else {
            // navigate("/cart");
            showModal()
          }
        }}
      />
      {/* <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> */}
      <AddProduct open={isModalOpen} setOpen={setIsModalOpen} item={item} />
    </>
  );
};

export default ProductItem;

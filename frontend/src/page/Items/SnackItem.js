import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Card, Col, Image } from "antd";
import Money from "../../components/Money";
import CartContext from "../../context/Cart";
import AuthContext from "../../context/Auth";
import Alert from "../../components/Alert";
import AddSnack from "../../components/Modal/addSnack";
import "../../CSS/SnackItem.css";

const { Title } = Typography;

export default function SnackItem(props) {
  const { snacks } = props;
  const cartCtx = useContext(CartContext);
  const { cartItem, setCartItem } = cartCtx;
  // console.log(cartCtx)

  const auth = useContext(AuthContext);

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
      <div className="product_wrapper">
        <Card
          className="product_cart"
          hoverable
        // cover={<img alt="" src={snacks.img} />}
        >
          <Col className="product_img">
            <Image src={snacks.img} width={150} />
          </Col>
          <Title level={5} className="product_title">
            {snacks.title}
          </Title>
          <strong className="product_price">
            <Money value={snacks.price} />
          </strong>
          <Button className="btnAdd" onClick={() => onAddToCart(snacks)}>
            ĐẶT HÀNG
          </Button>
        </Card>
      </div>
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

      <AddSnack open={isModalOpen} setOpen={setIsModalOpen} item={item} />
    </>
  );
}

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Card } from "antd";
import Money from "../../components/Money";
import CartContext from "../../context/Cart";
import AuthContext from "../../context/Auth";
import Alert from "../../components/Alert";

const { Title } = Typography;

export default function BakeryItem(props) {
  const { bakery } = props;
  const cartCtx = useContext(CartContext);
  const { cartItem, setCartItem } = cartCtx;

  const auth = useContext(AuthContext);

  // Alert
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState("success");
  let navigate = useNavigate();

  const onAddToCart = (item, quantity) => {
    if (!auth.user) {
      setAlertType("confirm");
      setAlertVisible(true);
      return;
    }
    const newCartItems = cartItem.slice(0);
    const index = cartItem.findIndex((cart) => cart.id === item.id);
    if (index < 0) {
      quantity = 1;
      item.quantity = quantity;
      newCartItems.push(item);
      setAlertType("success");
    } else {
      // newCartItems.splice(index, 1);
      console.log("item have already existed");
      setAlertType("warning");
    }
    setAlertVisible(true);
    setCartItem(newCartItems);
  };

  const AlertTypeMap = {
    success: "Added to cart",
    warning: "Item already existed",
    confirm: "Please login to perform action",
  };

  return (
    <>
      <div className="product_wrapper">
        <Card
          className="product_cart"
          hoverable
          cover={<img alt="" src={bakery.img} />}
        >
          <Title level={5} className="product_title">
            {bakery.title}
          </Title>
          <strong className="product_price">
            <Money value={bakery.price} />
          </strong>{" "}
          <br />
          <br />
          <Button className="btnAdd" onClick={() => onAddToCart(bakery)}>
            ĐẶT HÀNG
          </Button>
        </Card>
      </div>
      <Alert
        visible={alertVisible}
        content={AlertTypeMap[alertType]}
        type={alertType}
        confirmText={!auth.user ? "login" : "checkout"}
        cancelText="continue"
        onCancel={() => {
          setAlertVisible(false);
        }}
        onConfirm={() => {
          if (!auth.user) {
            navigate("/login");
          } else {
            navigate("/cart");
          }
        }}
      />
    </>
  );
}

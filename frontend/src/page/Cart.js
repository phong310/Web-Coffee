import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import CartContext from "../context/Cart";
import { Link } from "react-router-dom";
import Money from "../components/Money";
import "../CSS/Cart.css";
import { Typography, Row, Col, Divider, Input, Radio, Checkbox } from "antd";
import {
  FaShoppingCart,
  FaRegCreditCard,
  FaMoneyBillWaveAlt,
  FaTrash,
} from "react-icons/fa";

const { Title } = Typography;

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const { cartItem, setCartItem } = cartCtx;
  console.log(cartItem);

  if (!cartItem.length) {
    return (
      <div>
        <Navbar />
        <div className="empty_cart_container">
          <FaShoppingCart size={45} />
          <div className="empt_cart_message">
            Your cart is empty. Go back{" "}
            <Link to="/" className="Link">
              Home
            </Link>{" "}
            to continue shopping !
          </div>
        </div>
        <Divider />
        <Footer />
      </div>
    );
  }

  // update số Lượng
  const updateQuantityChange = (itemId, newQuantity) => {
    const newCartItems = cartItem.map((prod) => {
      if (prod.id !== itemId) {
        return prod;
      } else {
        return { ...prod, quantity: newQuantity };
      }
    });
    setCartItem(newCartItems);
  };

  // Tính tổng Tiền
  const totalPrice = cartItem.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  // xóa item cart
  const deleteItemsCart = (id) => {
    const deleteItems = cartItem.filter((item) => item.id !== id);
    setCartItem(deleteItems);
  };

  // xóa cart
  const deleteCart = (cartItem) => {
    const empCart = (cartItem.length = []);
    setCartItem(empCart);
  };

  return (
    <>
      <Navbar />
      <div className="wrapper_cart">
        <Title level={1} className="cart_title" style={{ color: "#0C713D" }}>
          <FaShoppingCart className="icon_cart" />
          CART
        </Title>
        <img
          className="cart_cover"
          src="https://phuclong.com.vn/images/icon_tealeaves.png"
          alt=""
        />
      </div>
      <div>
        <Row>
          <Col span={12}>
            <div className="delivery_contaier">
              <div className="delivery_wrapper">
                <h2>Giao hàng</h2>
                <Input type="text" placeholder="Địa chỉ giao hàng" />
                <Input type="text" placeholder="Tên người nhận" />
                <Input type="text" placeholder="Số điện thoại" />
                <Input type="text" placeholder="Thêm ghi chú giao hàng" />
              </div>
              <div className="delivery_pay">
                <div className="delivery_cash">
                  <div className="wrapper_cash">
                    <h2>Phương thức thanh toán</h2>

                    <Radio className="cash">
                      <FaMoneyBillWaveAlt className="icon_cash" />
                      Tiền mặt
                    </Radio>
                  </div>
                </div>
                <div className="delivery_card">
                  <Radio className="card">
                    <FaRegCreditCard className="icon_card" />
                    Thẻ ngân hàng
                  </Radio>
                  <br />
                  <Checkbox>
                    Đồng ý với các{" "}
                    <span style={{ color: "#0C713D", fontWeight: "bold" }}>
                      điều khoản và điều kiện
                    </span>{" "}
                    mua hàng của phúc long.
                  </Checkbox>
                </div>
              </div>
            </div>
          </Col>
          <Col span={12} style={{ padding: "5px 70px" }}>
            <div className="container_item_cart">
              <div className="wrapper_container">
                <h2 className="title">Các món đã chọn</h2>
                <Divider />
                {cartItem.map((item) => {
                  return (
                    <CartItem
                      data={item}
                      key={item.id}
                      onQuantityChange={updateQuantityChange}
                      deleteItemsCart={deleteItemsCart}
                    />
                  );
                })}
                <h2 className="title_total">Tổng cộng</h2>
                <Divider />
                <div className="total_price_container">
                  <div>Thành tiền</div>
                  <Money value={totalPrice} />
                </div>
                <div className="total_price_container">
                  <div>Phí vận chuyển</div>
                  <div className="">15.000đ</div>
                </div>
                <div className="voucher_price">
                  <div>Voucher</div>
                  <div>- 15%</div>
                </div>
              </div>
              <div className="checkout_container">
                <div className="checkout_total">
                  <div>Tổng cộng</div>
                  <div className="number">
                    <Money value={totalPrice + 15000} />
                  </div>
                </div>
                <div className="checkout_quantity">
                  <div>Số Lượng</div>
                  <div className="number">{cartItem.length}</div>
                </div>
                <div className="checkout_btn">Đặt hàng</div>
              </div>
            </div>
            <div className="remove_btn">
              <FaTrash />
              <div className="Delete" onClick={deleteCart}>
                Xóa đơn hàng
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Divider />
      <Footer />
    </>
  );
}

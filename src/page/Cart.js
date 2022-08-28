import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import CartContext from "../context/Cart";
import { Link } from "react-router-dom";
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
  const { cartItem } = cartCtx;
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
      </div>
    );
  }

  // update số Lượng
  const updateQuantityChange = (itemId, newQuantity) => {
    cartItem.map((prod) => {
      if (prod.id !== itemId) {
        return prod;
      } else {
        // console.log({...prod, quantity: newQuantity})
        return {...prod, quantity: newQuantity};
      }
    });
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
          <Col span={12}>
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
                    />
                  );
                })}
                <h2 className="title_total">Tổng cộng</h2>
                <Divider />
                <div className="total_price_container">
                  <div>Thành tiền</div>
                  <div>200.000đ</div>
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
                  <div className="number">200.000đ</div>
                </div>
                <div className="checkout_quantity">
                  <div>Số Lượng</div>
                  <div className="number">2</div>
                </div>
                <div className="checkout_btn">Đặt hàng</div>
              </div>
            </div>
            <div className="remove_btn">
              <FaTrash />
              <div className="Delete">Xóa đơn hàng</div>
            </div>
          </Col>
        </Row>
      </div>
      <Divider />
    </>
  );
}

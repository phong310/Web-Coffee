import { Checkbox, Col, Divider, Input, Radio, Row, Steps, Typography } from "antd";
import React, { useContext, useState } from "react";
import { FaMoneyBillWaveAlt, FaRegCreditCard, FaShoppingCart, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../CSS/Cart.css";
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";
import Money from "../components/Money";
import Navbar from "../components/Navbar";
import CartContext from "../context/Cart";

const { Title } = Typography;
const { Step } = Steps;

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const [pay, setPay] = useState(1)
  const [checkEmpty, setCheckEmpty] = useState(true)
  const { cartItem, setCartItem } = cartCtx;
  console.log(cartItem);

  const [currentOrder, setCurrentOder] = useState(1)

  if (!cartItem.length && checkEmpty) {
    return (
      <div>
        <Navbar />
        <div className="empty_cart_container">
          <FaShoppingCart size={45} />
          <div className="empt_cart_message">
            Giỏ hàng của bạn đang rỗng. Quay lại {" "}
            <Link to="/" className="Link">
              Trang chủ {" "}
            </Link>
            để tiếp tục mua sắm
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

  const handleOrder = () => {
    setCurrentOder(currentOrder + 2)
    setCartItem([])
    setCheckEmpty(false)

  }

  return (
    <>
      <Navbar />
      <div className="wrapper_cart">
        <Title level={1} className="cart_title" style={{ color: "#0C713D" }}>
          <FaShoppingCart className="icon_cart" />
          CART 🛒
        </Title>
        <img
          className="cart_cover"
          src="https://phuclong.com.vn/images/icon_tealeaves.png"
          alt=""
        />
      </div>
      <div>
        <Col style={{ margin: "50px 300px 0px 300px" }}>
          <Steps current={currentOrder}>
            <Step title="Đặt hàng" />
            <Step title="Xác nhận đơn hàng" />
            <Step title="Thành công" />
          </Steps>
        </Col>
        {currentOrder === 3 && !checkEmpty ?
          <h1 style={{ margin: "175px 0" }}>Bạn đã đặt hàng thành công !</h1>
          : <Row>
            <Col span={12}>
              <div className="delivery_contaier">
                <div className="delivery_wrapper">
                  <h2>Giao hàng</h2>
                  <Input type="text" placeholder="Tên người nhận" />
                  <Input type="text" placeholder="Số điện thoại" />
                  <Input type="text" placeholder="Địa chỉ giao hàng" />
                  <Input type="text" placeholder="Thêm ghi chú giao hàng" />
                </div>
                <div className="delivery_pay">
                  <Radio.Group value={pay} onChange={(e) => setPay(e.target.value)}>
                    <div className="delivery_cash">
                      <div className="wrapper_cash">
                        <h2>Phương thức thanh toán</h2>
                        <Radio value={1} className="cash">
                          <FaMoneyBillWaveAlt className="icon_cash" />
                          Tiền mặt
                        </Radio>
                      </div>
                    </div>
                    <div className="delivery_card">
                      <Radio value={2} className="cardd">
                        <FaRegCreditCard className="icon_cardd" />
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
                  </Radio.Group>

                </div>
              </div>
            </Col>
            <Col span={12} style={{ padding: "5px 70px" }}>
              <div className="container_item_cart">
                <div className="wrapper_container">
                  <h2 className="title">✨ Các món đã chọn ✨</h2>
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
                  <div className="checkout_btn" onClick={handleOrder}>Đặt hàng</div>
                </div>
              </div>
              <div className="remove_btn">
                <FaTrash />
                <div className="Delete" onClick={deleteCart}>
                  Xóa đơn hàng
                </div>
              </div>
            </Col>
          </Row>}
      </div>
      <Divider />
      <Footer />
    </>
  );
}

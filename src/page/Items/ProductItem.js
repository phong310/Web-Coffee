import React, { useContext } from "react";
import { Card, Button, Typography } from "antd";
import CartContext from "../../context/Cart";
import Money from "../../components/Money";
import "../../CSS/ProductItem.css";

const { Title } = Typography;

const ProductItem = (props) => {
  const { product } = props;
  const cartCtx = useContext(CartContext);
  // console.log(cartCtx);

  const handleAddCartItem = (item) => {
    cartCtx.setCartItem(item);
  };

  return (
    <>
      <div className="product_wrapper">
        <Card
          className="product_cart"
          hoverable
          cover={<img alt="" src={product.img} />}
        >
          <Title level={5} className="product_title">
            {product.title}
          </Title>
          <strong className="product_price">
            <Money value={product.price} />
          </strong>
          <br />
          <br />
          <Button className="btnAdd" onClick={() => handleAddCartItem(product)}>
            ĐẶT HÀNG
          </Button>
        </Card>
      </div>
    </>
  );
};

export default ProductItem;

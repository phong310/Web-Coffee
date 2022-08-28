import React, {useContext} from "react";
import { Button, Typography, Card } from "antd";
import Money from "../../components/Money";
import CartContext from "../../context/Cart";

const { Title } = Typography;

export default function BakeryItem(props) {
  const { bakery } = props;
  const cartCtx = useContext(CartContext)

  const handleAddCartItem = (item) => {
    cartCtx.setCartItem(item)
  }
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
          <Button className="btnAdd" onClick={() => handleAddCartItem(bakery)}>ĐẶT HÀNG</Button>
        </Card>
      </div>
    </>
  );
}

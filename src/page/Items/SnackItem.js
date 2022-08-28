import React, {useContext} from "react";
import { Button, Typography, Card } from "antd";
import Money from "../../components/Money";
import CartContext from "../../context/Cart";
import "../../CSS/SnackItem.css";

const { Title } = Typography;

export default function SnackItem(props) {
  const { snacks } = props;
  const cartCtx = useContext(CartContext);
  console.log(cartCtx)

  const handleAddCartItem = (item) => {
    cartCtx.setCartItem(item);
  } 

  return (
    <>
      <div className="product_wrapper">
        <Card
          className="product_cart"
          hoverable
          cover={<img alt="" src={snacks.img} />}
        >
          <Title level={5} className="product_title">
            {snacks.title}
          </Title>
          <strong className="product_price">
            <Money value={snacks.price} />
          </strong>{" "}
          <br />
          <br />
          <Button className="btnAdd" onClick={() => handleAddCartItem(snacks)}>ĐẶT HÀNG</Button>
        </Card>
      </div>
    </>
  );
}

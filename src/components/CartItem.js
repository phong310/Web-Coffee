import React from "react";
import StarRatings from "react-star-ratings";
import Money from "./Money";
import { FaTimesCircle } from "react-icons/fa";
import "../CSS/CartItem.css";

export default function CartItem(props) {
  const { data } = props;
  return (
    <>
      <div className="cart_item_container">
        <div className="cart_item_img">
          <img src={data.img} alt="" />
        </div>
        <div className="cart_item_infor">
          <div className="cart_item_title">{data.title}</div>
          <div className="cart_item_rating">
            <StarRatings
              numberOfStars={5}
              starDimension="12px"
              starSpacing="1px"
              rating={5}
              starRatedColor="orange"
            />
          </div>
          <div className="cart_unit_price">
            <Money value={data.price} />
          </div>
          <div className="cart_quantity_adjustment_container">
            <QuantityAdjusment
              value={data.quantity}
              onChange={(value) => props.onQuantityChange(data.id, value)}
            />
            <div className="cart_item_total_price">
              <Money value={data.price * data.quantity} />
            </div>
          </div>
        </div>
        <div className="cart_item_remove_btn">
          <FaTimesCircle />
        </div>
      </div>
    </>
  );
}

const QuantityAdjusment = (props) => {
  return (
    <div className="cart_item_quantity_adjustment">
      <div
        className="cart_item_quantity_adjustment_decrease"
        onClick={() => {
          props.onChange(props.value - 1);
        }}
      >
        -
      </div>
      <div className="cart_item_quantity_adjustment_number">
        <input
          type="number"
          value={props.value}
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
        />
      </div>
      <div
        className="cart_item_quantity_adjustment_increase"
        onClick={() => {
          props.onChange(props.value + 1);
        }}
      >
        +
      </div>
    </div>
  );
};

import { createContext } from "react";

const CartContext = createContext({
  cartItem: [],
  setCartItem: () => {},
});

export default CartContext;

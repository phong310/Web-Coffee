import { useState } from "react";
import Footer from "./components/Footer";
import Home from "./page/Home";
import Products from "./page/Products";
import Cart from "./page/Cart";
import { Route, Routes } from "react-router-dom";
import CartContext from "./context/Cart";

function App() {
  const [cartItem, setCartItem] = useState([]);

  // Item Cart
  const dispatchCartItem = (item,quantity) => {
    const newCartItems = cartItem.slice(0);
    const index = cartItem.findIndex((cart) => cart.id === item.id);
    if (index < 0) {
      quantity = 1;
      item.quantity = quantity;
      newCartItems.push(item);
    } else {
      // newCartItems.splice(index, 1);
      console.log("item have already existed")
    }
    setCartItem(newCartItems);
  };

  return (
    <div className="App">
      <CartContext.Provider
        value={{
          cartItem: cartItem,
          setCartItem: dispatchCartItem,
        }}
      >
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </CartContext.Provider>
    </div>
  );
}

export default App;

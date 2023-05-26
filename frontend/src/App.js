import { useState, useEffect } from "react";
import Home from "./page/Home";
import Products from "./page/Products";
import Cart from "./page/Cart";
import Login from "./page/Login";
import Register from "./page/Register";
import OrderHistory from "./page/OrderHistory";
import News from "./page/News";
import NewsCoffee from "./page/NewsCoffee";
import { Route, Routes } from "react-router-dom";
import CartContext from "./context/Cart";
import AuthContext from "./context/Auth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <AuthContext.Provider value={{ user: user, setUser: setUser }}>
        <CartContext.Provider
          value={{
            cartItem: cartItem,
            setCartItem: setCartItem,
          }}
        >
          <ToastContainer autoClose={2000} theme="colored" />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route
              path="/products"
              element={
                <Products />
              }
            />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/news" element={<News />} />
            <Route path="/news-coffee" element={<NewsCoffee />} />
          </Routes>
        </CartContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;

import { useState } from "react";
import Home from "./page/Home";
import Products from "./page/Products";
import Cart from "./page/Cart";
import Login from "./page/Login";
import { Route, Routes } from "react-router-dom";
import CartContext from "./context/Cart";
import AuthContext from "./context/Auth";

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
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </CartContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;

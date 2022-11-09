import { useState, useEffect } from "react";
import Home from "./page/Home";
import Products from "./page/Products";
import Cart from "./page/Cart";
import Login from "./page/Login";
import { Route, Routes } from "react-router-dom";
import CartContext from "./context/Cart";
import AuthContext from "./context/Auth";
import axios from "axios";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [user, setUser] = useState(null);
  const [productsData, setProductsData] = useState([]);
  const [snackData, setSnackData] = useState([]);
  const [bakeryData, setBakeryData] = useState([]);
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/v1/products/drinks");
      return res;
    };
    getData().then((res) => setProductsData(res.data));
    getData().catch((err) => console.log(">>> Error", err));

    const getSnacks = async () => {
      const resSnack = await axios.get("/v1/products/snacks");
      return resSnack;
    };
    getSnacks().then((res) => setSnackData(res.data));
    getSnacks().catch((err) => console.log(">>> Error", err));

    const getBakery = async () => {
      const resBakery = await axios.get("/v1/products/bakery");
      return resBakery;
    };
    getBakery().then((res) => setBakeryData(res.data));
    getBakery().catch((err) => console.log(err));

    // get user from backend
    const getUser = async () => {
      const resUser = await axios.get("/v1/users");
      return resUser;
    };
    getUser().then((res) => setUserData(res.data));
    getUser().catch((err) => console.log(err));
  }, []);

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
            <Route
              path="/products"
              element={
                <Products
                  productsData={productsData}
                  setProductsData={setProductsData}
                  snackData={snackData}
                  bakeryData={bakeryData}
                />
              }
            />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/login" element={<Login userData={userData} />} />
          </Routes>
        </CartContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;

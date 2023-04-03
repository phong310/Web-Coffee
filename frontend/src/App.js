import { useState, useEffect } from "react";
import Home from "./page/Home";
import Products from "./page/Products";
import Cart from "./page/Cart";
import Login from "./page/Login";
import Register from "./page/Register";
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
    // get drinks
    const getData = async () => {
      const res = await axios.get("/getAllproducts");
      // console.log("Mảng đay nhé:", res.data)
      return res;
    }
    getData().then((res) => setProductsData(res.data));
    getData().catch((e) => { console.log({ err: e }) });

    // get Snaks
    const getSnacks = async () => {
      const resSnack = await axios.get("/snacks/getAllSnack");
      return resSnack;
    }
    getSnacks().then((res) => setSnackData(res.data));
    getSnacks().catch((e) => { console.log({ err: e }) });

    // get Bakery
    const getBakery = async () => {
      const res = await axios.get("/bakery/getAllBakery");
      return res;
    }
    getBakery().then((res) => setBakeryData(res.data));
    getBakery().catch((e) => { console.log({ err: e }) });

    // get User
    const getUsers = async () => {
      const res = await axios.get("/user/getAllUser");
      return res;
    }
    getUsers().then((res) => setUserData(res.data));
    getUsers().catch((e) => { console.log({ err: e }) })
  }, [])


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
                  setSnackData={setSnackData}
                  bakeryData={bakeryData}
                  setBakeryData={setBakeryData}
                />
              }
            />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/login" element={<Login userData={userData} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </CartContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;

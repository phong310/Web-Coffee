const express = require("express");
const cors = require("cors");
const moongoose = require("mongoose");
const dotenv = require("dotenv")
const bodyParser = require('body-parser')
const Products = require("./routers/Products")
const Snacks = require("./routers/Snacks")
const Bakery = require("./routers/Bakery")
const User = require("./routers/User")
const Order = require("./routers/Order")


dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json())
const PORT = process.env.PORT || 5000;

app.use("/", Products)

app.use("/snacks", Snacks)

app.use("/bakery", Bakery)

app.use("/user", User)

app.use("/order", Order)

//connect MongoDB
moongoose.connect(process.env.MONGODB_URL, () => {
  console.log("CONNECT TO MONGO DB")
});

app.listen(PORT, () => {
  console.log("Server is running !")
})
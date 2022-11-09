const express = require("express");
const app = express();

const drinks = [
  {
    id: "d1",
    img: "https://phuclong.com.vn/uploads/dish/8e9e15c6b9704d-cafe5mon03.png",
    price: 49091,
    title: "Caramen chảy",
  },
  {
    id: "d2",
    img: "https://phuclong.com.vn/uploads/dish/6e1c837ccd02b3-cafe5mon05.png",
    price: 44000,
    title: "Ngọc Viễn Đông",
  },
  {
    id: "d3",
    img: "https://phuclong.com.vn/uploads/dish/7c8006f72742d8-trnhnphclong.png",
    price: 49091,
    title: "Trà Nhãn Sen",
  },
  {
    id: "d4",
    img: "https://phuclong.com.vn/uploads/dish/5a893da4cab487-trthomcphclong.png",
    price: 49091,
    title: "Trà Mộc Thảo",
  },
  {
    id: "d5",
    img: "https://phuclong.com.vn/uploads/dish/4eef9292db8810-trhoahngphclong.png",
    price: 50000,
    title: "Trà Hoa Hồng",
  },
  {
    id: "d6",
    img: "https://phuclong.com.vn/uploads/dish/dae727e03e8092-daccam.png",
    price: 68000,
    title: "Hồng Trà Đắc Cam",
  },
  {
    id: "d7",
    img: "https://phuclong.com.vn/uploads/dish/5318362664d05b-trlongdu.png",
    price: 50000,
    title: "Trà Ô Long Dâu",
  },
];
const bakery = [
  {
    id: "b1",
    img: "https://phuclong.com.vn/uploads/dish/61b22d5643fc80-img_67711.png",
    price: 35000,
    title: "Bánh Mì Phúc Long",
  },
  {
    id: "b2",
    img: "https://phuclong.com.vn/uploads/dish/774b3f1fd9202e-greenteachocolatecake.png",
    price: 34363,
    title: "Green Tea Cake",
  },
  {
    id: "b3",
    img: "https://phuclong.com.vn/uploads/dish/dd626a9639b006-tiramisumini.png",
    price: 34363,
    title: "Tiramisu Mini",
  },
  {
    id: "b4",
    img: "https://phuclong.com.vn/uploads/dish/a9686c8f36a908-passionpannacotta.png",
    price: 34364,
    title: "Pana Cotta",
  },
  {
    id: "b5",
    img: "https://phuclong.com.vn/uploads/dish/a1c4d22a41ec76-banhphap_0003s_0000_chocobuttercroissant.jpg",
    price: 22000,
    title: "Chocolate Croissant",
  },
  {
    id: "b6",
    img: "https://phuclong.com.vn/uploads/dish/01b9696b860549-banhphap_0000s_0001_buttercroissant.jpg",
    price: 19056,
    title: "Butter Croissant",
  },
];
const snacks = [
  {
    id: "s1",
    img: "https://phuclong.com.vn/uploads/dish/16fe719b78fd67-anh_viber_20210127_153153.jpg",
    price: 45163,
    title: "Mận Dẻo Gừng",
  },
  {
    id: "s2",
    img: "https://phuclong.com.vn/uploads/dish/3c54192a843ade-xoaisaydeo.png",
    price: 35000,
    title: "Xoài Sấy Dẻo",
  },
  {
    id: "s3",
    img: "https://phuclong.com.vn/uploads/dish/e8bf964785cc8f-anh_viber_20210127_153151.jpg",
    price: 40000,
    title: "Nho Khô Úc",
  },
  {
    id: "s4",
    img: "https://phuclong.com.vn/uploads/dish/bb6c510fc498d1-anh_viber_20210127_153152.jpg",
    price: 60000,
    title: "Gừng Mật Ong",
  },
  {
    id: "s5",
    img: "https://phuclong.com.vn/uploads/dish/dc98ac0043a59c-hatdieurangcuitoiot.png",
    price: 25572,
    title: "Hạt Điều Rang",
  },
  {
    id: "s6",
    img: "https://phuclong.com.vn/uploads/dish/66767e9f99f891-hopdieutuoirangcui.png",
    price: 80000,
    title: "Hạt Điều Rang",
  },
  {
    id: "s7",
    img: "https://phuclong.com.vn/uploads/dish/b380798cdac374-traicaytuoisaydeo.png",
    price: 35000,
    title: "Trái Cây Xấy",
  },
];
const users = [
  {
    id: "u1",
    password: "3102001p",
    username: "thewind",
  },
  {
    id: "u2",
    password: "123456a",
    username: "user2",
  },
];

app.get("/v1/products/drinks", (req, res) => {
  res.status(200).json(drinks);
});

app.get("/v1/products/bakery", (req, res) => {
  res.status(200).json(bakery);
});

app.get("/v1/products/snacks", (req, res) => {
  res.status(200).json(snacks);
});

app.get("/v1/users", (req, res) => {
  res.status(200).json(users);
});

app.listen("8000", () => {
  console.log("Server is running...");
});

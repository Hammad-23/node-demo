// use of middleware with diff routes
const express = require("express");
var PORT = process.env.PORT || 9900;
const app = express();
// app.set("view engine ", "ejs");

// const { Router } = require("express");
// const express = require("express");
// const app = express();
// const router = express.Router();
// const checkUrl=require('./middleware')
// // app.use(checkUrl);
// app.get("/", (req, res) => {
//   res.send("This is Home");
// });
// app.get("/about", (req, res) => {
//   res.send("This is about");
// });
// router.get("/login", checkUrl, (req, res) => {
//   res.send("This is Login");
// });
// app.use("/", router);
// app.listen(6500);

// use of middleware ends here

// app.get("/profile/:name", (req, res) => {
//   res.render("profile",{name:req.params.name});
// });

// app.listen(7600);

// database integration method starts

const mongoose = require("mongoose");
const Products = require("./products");
let bodyParser = require("body-parser");
let jsonParser = bodyParser.json();
let crypto = require("crypto");
let key = "password";
let algo = "aes256";
mongoose
  .connect(
    "mongodb+srv://Pakistan:32271147@cluster0.tmtf0.mongodb.net/E-commerce?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.warn("MongoDB connected.");
  });

// database integration ends here

// get data method

// Products.find({}, (err, product) => {
//   if (err) {
//     console.warn(err);
//   } else {
//     console.warn(product);
//   }
// });

// post data method

// const data = new Products({
//   _id: new mongoose.Types.ObjectId(),
//   productName: "Pimiscus",
//   price: "15.00$",
// });

// data
//   .save()
//   .then((result) => {
//     console.warn(result);
//   })
//   .catch((err) => console.warn(err));

// get products api starts
// app.set("view engine ", "ejs");
// app.get("/", (req, res) => {
//   return Products.find().then((data) => {
//     return res.status(200).json(data);
//   });

// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//   message: err.message,
//   error: err
//   });
// });
// });
// app.listen(PORT, () => {
//   console.log("port is runing at", PORT);
// });

// Auth user register

// app.post("/register", jsonParser, (req, res) => {
//   let cipher=crypto.createCipher(algo,key)
//   let encrypted=cipher.update(req.body.parser,'utf8','hex')
//   +cipher.final('hex')
//   console.warn(req.body.encrypted);
//   res.end("hello world");
// });
// app.listen(5300);

// Auth user register ends

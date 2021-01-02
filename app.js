// use of middleware with diff routes
var PORT=process.env.PORT||9900

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

const express = require("express");
const app = express();
// app.set("view engine ", "ejs");
// app.get("/profile/:name", (req, res) => {
//   res.render("profile",{name:req.params.name});
// });

// app.listen(7600);

// database integration method starts

const mongoose = require("mongoose");
const Products = require("./products");
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

app.get("/products", (req, res) => {
  Products.find().then((data) => {
    res.status(200).json(data);
  });
});
app.listen(PORT);

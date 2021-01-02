const mongoose = require("mongoose");
let productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  productName: String,
  price: String,
});
module.exports = mongoose.model("products", productSchema);

const mongoose = require("mongoose");

const produitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  stock: Number
}, { timestamps: true });

module.exports = mongoose.model("Produit", produitSchema);

import mongoose from "mongoose";
import Product from "./src/models/product.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const seedProducts = async () => {
  await Product.insertMany([
    { name: "PC Dell", price: 800 },
    { name: "Clavier Logitech", price: 50 },
    { name: "Souris Gaming", price: 30 }
  ]);

  console.log("Produits ajoutés");
  process.exit();
};

seedProducts();

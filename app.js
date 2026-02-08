require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");

const app = express();

app.use(express.json());
app.use(cors());

// DB
connectDB();

// Routes
app.use("/api/products", require("./src/Routes/produit"));

app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;

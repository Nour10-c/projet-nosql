require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// ===== Middleware =====
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ===== MongoDB Connection =====
const connectDB = async () => {
  try {
    if (process.env.ENV === 'dev') {
      await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
      console.log("✅ MongoDB connected (DEV)");
    } else {
      await mongoose.connect(process.env.DB_URL);
      console.log("✅ MongoDB connected (PROD)");
    }
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  }
};
connectDB();

// ===== Routes =====
require('./Routes')(app);

// ===== 404 Handler =====
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ===== Global Error Handler =====
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message,
    route: req.url
  });
});

module.exports = app;

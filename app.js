import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./src/Routes/index.js";

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connecté"))
  .catch(err => console.log("❌ MongoDB error:", err));

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./src/routes/index.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ MongoDB error:", err));

// ROUTES
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("API running...");
});

export default app;

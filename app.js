import express from "express";

import cors from "cors";
import dotenv from "dotenv";
import routes from "./src/Routes/index.js";
import connectDB from "./src/config/db.js";

dotenv.config();

connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("API running...");
});

export default app;

import express from "express";

import cors from "cors";
import dotenv from "dotenv";
import routes from "./src/Routes/index.js";
import connectDB from "./src/config/db.js";
import { swaggerUi, swaggerSpec } from "./src/config/swagger.js";
import productRoutes from "./src/Routes/productRoutes.js";

dotenv.config();

connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError) {
    return res.status(400).json({
      error: "JSON invalide",
    });
  }
  next();
});
app.use("/api", routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API running..."); 
  
});

export default app;

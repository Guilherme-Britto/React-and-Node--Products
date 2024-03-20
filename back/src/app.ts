import express from "express";
import cors from "cors";
import productRoutes from "./routes/products.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/products", productRoutes);

export default app;

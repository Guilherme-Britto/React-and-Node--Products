import "reflect-metadata";
import "express-async-errors";
import express from "express";
import userRoutes from "./routes/users.routes";
import { handleErros } from "./error";

const app = express();
app.use(express.json());

app.use("/products", userRoutes);

app.use(handleErros);

export default app;

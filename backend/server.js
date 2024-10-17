import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(3000, ()  => {
    connectDB();
    console.log("server started at http://localhost:" + PORT);
});

console.log(process.env.MONGO_URI);
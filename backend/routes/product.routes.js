import express from "express";

import { deleteProduct, getProducts, newProducts, updateProducts } from "../controller/product.contoller.js";

const router = express.Router();

router.get("/", getProducts);

router.put("/:id", updateProducts);

router.post("/", newProducts);

router.delete("/:id", deleteProduct);

export default router;


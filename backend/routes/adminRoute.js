import { Router } from "express";
import fetchAdmin from "../middleware/fetchAdmin.js";
import { addProduct, removeProduct } from "../controllers/productController.js";

const router = Router();

// Admin can manage products
router.post("/addproduct", fetchAdmin, addProduct);
router.post("/removeproduct", fetchAdmin, removeProduct);

export default router;

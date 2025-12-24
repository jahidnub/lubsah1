import { Router } from "express";
import {
  addProduct,
  removeProduct,
  getAllProducts,
  newCollection,
  popularInThreePiches,
} from "../controllers/productController.js";

const router = Router();

router.post("/addproduct", addProduct);
router.post("/removeproduct", removeProduct);
router.get("/allproducts", getAllProducts);
router.get("/newcollection", newCollection);
router.get("/popularinthreepiches", popularInThreePiches);

export default router;

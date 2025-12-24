import { Router } from "express";
import { upload, uploadImage } from "../controllers/uploadController.js";

const router = Router();

router.post("/upload", upload.single("product"), uploadImage);

export default router;

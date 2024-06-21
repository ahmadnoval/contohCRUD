import e from "express";
import {
  getProduct,
  getProductById,
  saveProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductController.js";

const router = e.Router();

router.get("/products", getProduct);
router.get("/products/:id", getProductById);
router.post("/products", saveProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;

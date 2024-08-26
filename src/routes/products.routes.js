import { Router } from "express";

import ProductController from "../controllers/products.controller.js";
import { productService } from "../services/product.service.js";


const router = Router();

const controller = new ProductController(productService);

router.get("/products", (req, res) => {
  return controller.getProducts(req, res);
});

router.get("/products/:id", (req, res) => {
  return controller.getProduct(req, res);
});

router.post("/products", (req, res) => {
  return controller.createProduct(req, res);
});

router.put("/products/:id", (req, res) => {
  return controller.updateProduct(req, res);
});

router.delete("/products/:id", (req, res) => {
  return controller.deleteProduct(req, res);
});

export default router;

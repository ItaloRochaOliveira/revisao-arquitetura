import express from "express";
import { ProductController } from "../controller/ProductController";
import { ProductBusiness } from "../business/ProductsBusiness";
import { ProductsDatabase } from "../database/ProductsDatabase";

export const productRouter = express.Router();

const productController = new ProductController(
  new ProductBusiness(new ProductsDatabase())
);

productRouter.get("/", productController.getProducts);

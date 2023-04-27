import express from "express";
import { BrandsController } from "../controller/BrandsController";
import { BrandsBusiness } from "../business/BrandsBusiness";
import { BrandsDatabase } from "../database/BradsDatabase";
import { ProductsDatabase } from "../database/ProductsDatabase";

export const brandsRouter = express.Router();

const brandsController = new BrandsController(
  new BrandsBusiness(new BrandsDatabase(), new ProductsDatabase())
);

brandsRouter.get("/", brandsController.getAllBrands);
brandsRouter.get("/:id", brandsController.getBrandsById);

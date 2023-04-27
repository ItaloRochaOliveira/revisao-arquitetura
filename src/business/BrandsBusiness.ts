import { BrandsDatabase } from "../database/BradsDatabase";
import { ProductsDatabase } from "../database/ProductsDatabase";
import { Brands } from "../models/brands";

export class BrandsBusiness {
  constructor(
    private brandDatabase: BrandsDatabase,
    private productDatabase: ProductsDatabase
  ) {}

  getAllBrands = async () => {
    const brandsDB = await this.brandDatabase.findBrands();

    if (!brandsDB.length) {
      throw new Error("Lista de marcas inexistente.");
    }

    const brands = brandsDB.map(
      (brandDB) => new Brands(brandDB.id, brandDB.name)
    );

    return brands;
  };

  getBrandById = async (id: string) => {
    const brandDB = await this.brandDatabase.findBrandsById(id);
    const productsDB = await this.productDatabase.findAllProducts();

    if (!brandDB) throw new Error();

    const products = productsDB.filter((productDB) => {
      return productDB.brand_id === brandDB.id;
    });

    const brand = new Brands(brandDB.id, brandDB.name, products);

    return brand;
  };
}

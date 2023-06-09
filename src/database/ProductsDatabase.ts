import { BaseDatabase } from "./BaseDatabase";

export class ProductsDatabase extends BaseDatabase {
  protected PRODUCT_TABLE = "products";

  findAllProducts = async () => {
    const productsDB = await BaseDatabase.connection(this.PRODUCT_TABLE);
    return productsDB;
  };

  public async findProductsByQuery(q: string) {
    const productsDB = await BaseDatabase.connection(this.PRODUCT_TABLE)
      .select()
      .where("name", "LIKE", `%${q}%`);
    return productsDB;
  }

  findProductsAndBrand = async (q: string | undefined) => {
    let productDB;
    if (q) {
      productDB = await this.findProductsByQuery(q);
    } else {
      productDB = await this.findAllProducts();
    }

    const brandsDB = await BaseDatabase.connection("brands");

    return { productDB, brandsDB };
  };
}

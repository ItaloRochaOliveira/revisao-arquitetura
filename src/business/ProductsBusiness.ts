import { ProductsDatabase } from "../database/ProductsDatabase";

export class ProductBusiness {
  constructor(private productsDatabase: ProductsDatabase) {}

  getProducts = async (query: string | undefined) => {
    let productsDB;

    if (query) {
      // caso passe uma pesquis ele vai entrar aqui
      //comunicar com o DB e chamar o metodo encontrar user no DB com a pesquisa
      productsDB = await this.productsDatabase.findProductsByQuery(query);
    } else {
      productsDB = await this.productsDatabase.findAllProducts();
    }

    return productsDB;
  };
}

import { ProductsDatabase } from "../database/ProductsDatabase";
import { Product } from "../models/Products";

export class ProductBusiness {
  constructor(private productsDatabase: ProductsDatabase) {}

  getProducts = async (query: string | undefined) => {
    let productsDB;

    if (query) {
      // caso passe uma pesquis ele vai entrar aqui
      //comunicar com o DB e chamar o metodo encontrar user no DB com a pesquisa
      //   productsDB = await this.productsDatabase.findProductsByQuery(query);
      //   productsDB = productsDB.map((productDB) => {
      //     const product = new Product(
      //         productDB.id,
      //         productDB.name,
      //         productDB.price,
      //         productDB.description,
      //         {
      //             id: productDB.brand_id,
      //             name: productDB.name
      //         }
      //     )
      //   })

      const { productDB, brandsDB } =
        await this.productsDatabase.findProductsAndBrand(query);

      productsDB = productDB.map((prodDB) => {
        return new Product(
          prodDB.id,
          prodDB.name,
          prodDB.price,
          prodDB.description,
          brandsDB.find((brandDB) => brandDB.id === prodDB.brand_id)
        );
      });
    } else {
      //   productsDB = await this.productsDatabase.findAllProducts();

      const { productDB, brandsDB } =
        await this.productsDatabase.findProductsAndBrand("");

      productsDB = productDB.map((prodDB) => {
        return new Product(
          prodDB.id,
          prodDB.name,
          prodDB.price,
          prodDB.description,
          brandsDB.find((brandDB) => brandDB.id === prodDB.brand_id)
        );
      });
    }

    return productsDB;
  };
}

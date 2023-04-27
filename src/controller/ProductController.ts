import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductsBusiness";

export class ProductController {
  //recebe e envia dados
  //comunicação com a camada business
  //lida com o caminho bom e ruim

  constructor(private productBusiness: ProductBusiness) {}

  getProducts = async (req: Request, res: Response) => {
    try {
      const q = req.query.q as string | undefined;

      const products = await this.productBusiness.getProducts(q);

      res.status(200).send(products);
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        res.status(400).send("Erro de requisição");
      } else {
        res.status(500).send("erro desconhecido");
      }
    }
  };
}

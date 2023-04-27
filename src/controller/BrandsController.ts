import { Request, Response } from "express";
import { BrandsBusiness } from "../business/BrandsBusiness";

export class BrandsController {
  constructor(private brandsBusiness: BrandsBusiness) {}

  getAllBrands = async (req: Request, res: Response) => {
    try {
      const brands = await this.brandsBusiness.getAllBrands();
      res.status(200).send(brands);
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        res.status(400).send("Erro de requisição");
      } else {
        res.status(500).send("erro desconhecido");
      }
    }
  };

  getBrandsById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const brands = await this.brandsBusiness.getBrandById(id);
      res.status(200).send(brands);
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

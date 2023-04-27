import express, { Request, Response } from "express";
import cors from "cors";
import { productRouter } from "./routers/productRouter";

const app = express();

app.use(cors());

app.use(express.json());

app.listen(3003, () => console.log("Servidor rodando na porta 3003"));

app.get("/ping", (req: Request, res: Response) => {
  try {
    res.status(200).send("fundionou");
  } catch (error) {
    console.log(error);

    if (error instanceof Error) {
      res.status(400).send("Erro de requisição");
    } else {
      res.status(500).send("erro desconhecido");
    }
  }
});

app.use("/products", productRouter);

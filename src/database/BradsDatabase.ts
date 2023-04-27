import { BaseDatabase } from "./BaseDatabase";

export class BrandsDatabase extends BaseDatabase {
  public BRANDS_TABLE = "brands";

  findBrands = async () => {
    const brandsDB = await BrandsDatabase.connection(this.BRANDS_TABLE);
    return brandsDB;
  };

  findBrandsById = async (id: string) => {
    const [brandDB] = await BrandsDatabase.connection(this.BRANDS_TABLE).where({
      id,
    });

    return brandDB;
  };
}

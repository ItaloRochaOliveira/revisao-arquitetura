export class Product {
  constructor(
    private id: string,
    private name: string,
    private price: number,
    private description: string,
    private brand: {
      brand_id: string;
      name: string;
    }
  ) {}

  public get ID(): string {
    return this.id;
  }

  public get NAME(): string {
    return this.name;
  }

  public get PRICE(): number {
    return this.price;
  }

  public get DESCRIPTION(): string {
    return this.description;
  }

  public get BRAND(): {
    brand_id: string;
    name: string;
  } {
    return this.brand;
  }

  public set ID(newId: string) {
    this.id = newId;
  }

  public set NAME(newName: string) {
    this.name = newName;
  }

  public set PRICE(newPrice: number) {
    this.price = newPrice;
  }

  public set DESCRIPTION(newDescription: string) {
    this.description = newDescription;
  }

  public set BRAND(newBrand: { brand_id: string; name: string }) {
    this.brand = newBrand;
  }
}

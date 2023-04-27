export class Brands {
  constructor(
    private id: string,
    private name: string,
    private products?: {
      id: string;
      name: string;
      price: number;
      description: string;
    }[]
  ) {}

  public get ID(): string {
    return this.id;
  }

  public get NAME(): string {
    return this.name;
  }

  public get PRODUCTS():
    | {
        id: string;
        name: string;
        price: number;
        description: string;
      }[]
    | undefined {
    return this.products;
  }

  public set ID(newId: string) {
    this.id = newId;
  }

  public set NAME(newName: string) {
    this.name = newName;
  }

  public set PRODUCTS(
    newProduct:
      | {
          id: string;
          name: string;
          price: number;
          description: string;
        }[]
      | undefined
  ) {
    this.products = newProduct;
  }
}

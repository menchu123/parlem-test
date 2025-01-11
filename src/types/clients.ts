export type ProductType =
  | "Fibra + Mobil"
  | "Fibra + Fix"
  | "Mobil"
  | "Agile TV"
  | "Llum"
  | "Plaques Solars";

export interface Product {
  id: number;
  type: ProductType;
  details: string;
  price: number;
}

export interface Client {
  id: number;
  name: string;
  address: string;
  phone: string;
  dni: string;
  bank_details: string;
  products: Product[];
}

type ProductType = "FIBRA + MOBIL" | "FIBRA + FIX" | "MOBIL" | "AGILE TV";

type DocType = "dni" | "nie" | "passport";

export interface Product {
  id: number;
  productName: ProductType;
  mbSpeed: number | null;
  gbData: number | null;
  numeracioTerminal: number;
  soldAt: string;
  customerId: string;
}

export interface Client {
  id: number;
  docType: DocType;
  docNum: string;
  email: string;
  customerId: string;
  givenName: string;
  familyName1: string;
  familyName2: string;
  phone: string;
  products: Product[];
}

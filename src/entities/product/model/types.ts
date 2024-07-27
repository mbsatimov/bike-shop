export interface Product {
  id: string;
  name: string;
  price: number;
  images?: {
    id: string;
    name: string;
    url: string;
  }[];
}

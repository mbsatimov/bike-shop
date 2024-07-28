import { Store } from '@/entities/store';

export interface ProductImage {
  id: string;
  name: string;
  url: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  images?: ProductImage[];
  store: Store;
}

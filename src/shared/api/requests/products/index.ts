import { Product } from '@/entities/product';
import { api } from '@/shared/api/instance';
import { ApiResponse, RequestConfig } from '@/shared/types';

export type GetProductsConfig = RequestConfig;

export type GetProductsResponse = ApiResponse<Product[]>;

export const getProducts = ({ config }: GetProductsConfig) =>
  api.get('products', config);

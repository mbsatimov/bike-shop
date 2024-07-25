import { api } from '@/shared/api/instance';

export type GetProductsConfig = RequestConfig;

export type GetProductsResponse = ApiResponse<Pagination<Product>>;

export const getProducts = ({ config }: GetProductsConfig) => api.get('products', config);

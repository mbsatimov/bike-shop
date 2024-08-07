export const PUBLIC_ROUTES = {
  home: '/',
  search: '/search',
  stores: '/stores',
  store(id: string | number) {
    return `/stores/${id}`;
  },
  products: '/products',
  product(id: string | number) {
    return `/products/${id}`;
  },
  cart: '/cart',
  orders: '/orders',
} as const;

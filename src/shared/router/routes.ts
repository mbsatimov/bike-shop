export const PUBLIC_ROUTES = {
  home: '/',
  search: '/search',
  shops: '/shops',
  shopItem(id: string) {
    return `/${this.shops}/${id}`;
  },
  productItem(id: string) {
    return `/products/${id}`;
  },
  cart: '/cart',
  orders: '/orders',
} as const;

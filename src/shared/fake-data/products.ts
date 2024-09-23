import { Product } from '@/entities/product';

export const productData: Product[] = Array.from({ length: 10 }, (_, i) => ({
  id: `${i + 1}`,
  name: `Product ${i + 1}`,
  price: 100,
  description: `Product ${i + 1} description`,
  store: {
    id: `${i + 1}`,
    name: `Store ${i + 1}`,
    description: `Store ${i + 1} description`,
    productCount: 10,
    orderCount: 4,
    customerCount: 4,
    rating: 4.5,
    ratingCount: 100,
    hasDelivery: true,
    deliveryTime: {
      min: 10,
      max: 20,
    },
  },
}));

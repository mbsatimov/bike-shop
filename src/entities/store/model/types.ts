export interface StoreImage {
  id: string;
  name: string;
  url: string;
}

export interface Store {
  id: string;
  name: string;
  image?: StoreImage;
  description?: string;
  productCount: number;
  orderCount: number;
  rating: number;
  hasDelivery: boolean;
  deliveryTime: {
    min: number;
    max: number;
  };
  ratingCount: number;
  customerCount: number;
}

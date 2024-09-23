import { Product, ProductCard } from '@/entities/product';
import { StoreBadge } from '@/entities/store';
import { AddToCartButton } from '@/features/product';

type Props = {
  products: Product[];
};

export const ProductList = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          footerSlot={
            <div className="block w-full space-y-3">
              <StoreBadge store={product.store} />
              <AddToCartButton />
            </div>
          }
        />
      ))}
    </div>
  );
};

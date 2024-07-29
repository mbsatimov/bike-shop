import { ProductCard } from '@/entities/product';
import { StoreBadge } from '@/entities/store';
import { AddToCartButton } from '@/features/product';
import { productData } from '@/shared/fake-data';

export const ProductList = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4">
      {productData.map(product => (
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

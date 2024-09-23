import React from 'react';

import { type Product, ProductCard } from '@/entities/product';
import { StoreBadge } from '@/entities/store';
import { AddToCartButton } from '@/features/product';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  ContentSection,
} from '@/shared/ui';

type Props = Omit<
  React.ComponentProps<typeof ContentSection>,
  'children' | 'asChild'
> & {
  products: Product[];
  view?: 'carousel' | 'grid';
};

export const ProductSection = ({
  products,
  view = 'carousel',
  ...props
}: Props) => {
  return (
    <ContentSection {...props} asChild>
      {view === 'grid' ? (
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
      ) : (
        <Carousel>
          <CarouselContent>
            {products.map(product => (
              <CarouselItem
                key={product.id}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <ProductCard
                  product={product}
                  footerSlot={
                    <div className="block w-full space-y-3">
                      <StoreBadge store={product.store} />
                      <AddToCartButton />
                    </div>
                  }
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </ContentSection>
  );
};

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
};

export const ProductSection = ({ products, ...props }: Props) => {
  return (
    <ContentSection {...props} asChild>
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
    </ContentSection>
  );
};

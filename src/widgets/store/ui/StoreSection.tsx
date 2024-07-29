import React from 'react';

import { type Store, StoreCard } from '@/entities/store';
import { PUBLIC_ROUTES } from '@/shared/router';
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
  stores: Store[];
};

export const StoreSection = ({ stores, ...props }: Props) => {
  return (
    <ContentSection {...props} asChild>
      <Carousel>
        <CarouselContent>
          {stores.map(store => (
            <CarouselItem
              key={store.id}
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <StoreCard href={PUBLIC_ROUTES.store(store.id)} store={store} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </ContentSection>
  );
};

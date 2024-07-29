import React from 'react';

import { StoreCard } from '@/entities/store';
import { storeData } from '@/shared/fake-data';
import { PUBLIC_ROUTES } from '@/shared/router';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Shell,
} from '@/shared/ui';
import { ContentSection } from '@/shared/ui/content-section';
import { ProductList } from '@/widgets/product';

export const SearchPage = async ({
  searchParams,
}: {
  searchParams: { query: string };
}) => {
  console.log(searchParams);
  await new Promise(resolve => setTimeout(resolve, 3000));

  return (
    <Shell>
      <div className="mt-4 md:mt-8 lg:mt-10">
        <h2 className="text-2xl font-bold leading-[1.1] md:text-3xl">
          Found 5 results
        </h2>
      </div>
      <ContentSection title="Stores" className="pt-8 md:pt-14" asChild>
        <Carousel>
          <CarouselContent>
            {storeData.map(store => (
              <CarouselItem
                key={store.id}
                className="basis-[80%] sm:basis-2/3 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <StoreCard href={PUBLIC_ROUTES.store(store.id)} store={store} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </ContentSection>
      <ContentSection
        title="Products"
        className="pt-14 md:pt-20 lg:pt-24"
        asChild
      >
        <ProductList />
      </ContentSection>
    </Shell>
  );
};

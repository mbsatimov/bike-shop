import { ProductCard } from '@/entities/product/';
import { StoreCard } from '@/entities/store';
import { productData, storeData } from '@/shared/fake-data';
import { PUBLIC_ROUTES } from '@/shared/router';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Shell,
} from '@/shared/ui';
import { Banner } from '@/widgets/banner';
import { ContentSection } from '@/widgets/content-section/ui';

export const HomePage = () => {
  return (
    <Shell>
      <Banner />
      <ContentSection
        title="Stores"
        description="Explore stores from around the world"
        linkText="View all stores"
        href="/stores"
        className="pt-14 md:pt-20 lg:pt-24"
      >
        <Carousel>
          <CarouselContent>
            {storeData.map(store => (
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
      <ContentSection
        title="Products"
        description="Find your next favorite product"
        linkText="View all products"
        href="/products"
        className="py-14 md:py-20 lg:py-24"
      >
        <Carousel>
          <CarouselContent>
            {productData.map(product => (
              <CarouselItem
                key={product.id}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </ContentSection>
    </Shell>
  );
};

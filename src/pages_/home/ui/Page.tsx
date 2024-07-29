import { productData, storeData } from '@/shared/fake-data';
import { PUBLIC_ROUTES } from '@/shared/router';
import { Shell } from '@/shared/ui';
import { Banner } from '@/widgets/banner';
import { ProductSection } from '@/widgets/product';
import { StoreSection } from '@/widgets/store';

export const HomePage = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000));

  return (
    <Shell>
      <Banner />

      <StoreSection
        title="Stores"
        description="Explore stores from around the world"
        linkText="View all stores"
        href={PUBLIC_ROUTES.stores}
        className="pt-14 md:pt-20 lg:pt-24"
        stores={storeData}
      />

      <ProductSection
        title="Popular Products"
        description="Find your next favorite product"
        linkText="View all products"
        href={PUBLIC_ROUTES.products}
        className="py-14 md:py-20 lg:py-24"
        products={productData}
      />
    </Shell>
  );
};

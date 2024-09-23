import { notFound } from 'next/navigation';

import { StoreHeader } from '@/entities/store/ui/StoreHeader';
import { productData, storeData } from '@/shared/fake-data';
import { Shell } from '@/shared/ui';
import { ProductSection } from '@/widgets/product';

import { CartSidebar } from './CartSidebar/CartSidebar';

type Props = {
  params: {
    id: string;
  };
};

export const StorePage = ({ params }: Props) => {
  const store = storeData.find(store => store.id === params.id);

  if (!store) notFound();

  return (
    <Shell as="div" className="flex">
      <main className="flex-1 space-y-6">
        <StoreHeader store={store} />
        <ProductSection title="Products" view="grid" products={productData} />
      </main>
      <CartSidebar />
    </Shell>
  );
};

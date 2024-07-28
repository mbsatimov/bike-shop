import { StoreCard } from '@/entities/store';
import { storeData } from '@/shared/fake-data';
import { PUBLIC_ROUTES } from '@/shared/router';

export const StoreList = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
      {storeData.map(store => (
        <StoreCard
          key={store.id}
          href={PUBLIC_ROUTES.store(store.id)}
          store={store}
        />
      ))}
    </div>
  );
};

import { Info, StarIcon, TruckIcon } from 'lucide-react';

import { Store } from '@/entities/store';
import { Button, PlaceholderImage } from '@/shared/ui';

type Props = {
  store: Store;
};

export const StoreHeader = ({ store }: Props) => {
  return (
    <div className="relative h-[260px] w-full md:h-[320px]">
      <div className="relative z-10 flex h-full flex-col justify-end space-y-6 p-6 md:p-10">
        <h1 className="text-4xl font-bold lg:text-5xl">{store.name}</h1>
        <div className="flex gap-2">
          <Button size="lg" className="pr-4">
            <div className="mr-3">
              <TruckIcon size={32} />
            </div>
            <div className="flex flex-col items-start py-3">
              <div className="text-xl">
                {store.deliveryTime.min + '-' + store.deliveryTime.max}
              </div>
              <span className="text-[12px] leading-3 text-muted-foreground">
                min
              </span>
            </div>
          </Button>
          <Button size="lg" className="pr-4">
            <div className="mr-3">
              <StarIcon size={32} />
            </div>
            <div className="flex flex-col">
              <div className="text-xl">{store.rating}</div>
              <span className="text-[12px] leading-[13px] text-muted-foreground">
                {store.ratingCount}+
              </span>
            </div>
          </Button>
          <Button size="iconLg">
            <Info size={32} />
          </Button>
        </div>
      </div>
      <PlaceholderImage className="absolute inset-0 size-full" />
    </div>
  );
};

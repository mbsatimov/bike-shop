import { ProductCardSkeleton } from '@/entities/product';
import { StoreCardSkeleton } from '@/entities/store';
import { Shell, Skeleton } from '@/shared/ui';

export const HomeSkeleton = () => {
  return (
    <Shell>
      <div className="row-span-2 grid aspect-[3/1] grid-cols-5 gap-4">
        <div className="col-span-3 row-span-2">
          <Skeleton className="size-full" />
        </div>
        <div className="col-span-2 row-span-1">
          <Skeleton className="size-full" />
        </div>
        <div className="col-span-1 row-span-1">
          <Skeleton className="size-full" />
        </div>
        <div className="col-span-1 row-span-1">
          <Skeleton className="size-full" />
        </div>
      </div>

      <div className="space-y-8 pt-14 md:pt-20 lg:pt-24">
        <div className="space-y-2">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-6 w-1/3" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <StoreCardSkeleton key={index} />
          ))}
        </div>
      </div>

      <div className="space-y-8 pt-14 md:pt-20 lg:pt-24">
        <div className="space-y-2">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-6 w-1/3" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <ProductCardSkeleton
              key={index}
              footerSlot={
                <div className="w-full space-y-3">
                  <Skeleton className="h-8 w-24 rounded-full" />
                  <Skeleton className="h-8 w-full" />
                </div>
              }
            />
          ))}
        </div>
      </div>
    </Shell>
  );
};

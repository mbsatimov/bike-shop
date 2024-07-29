import { ProductCardSkeleton } from '@/entities/product';
import { StoreCardSkeleton } from '@/entities/store';
import { Shell, Skeleton } from '@/shared/ui';

export const SearchSkeleton = () => {
  return (
    <Shell>
      <div className="mt-4 md:mt-8 lg:mt-10">
        <Skeleton className="h-8 w-60" />
      </div>

      <div className="space-y-8 pt-8 md:pt-14">
        <div className="space-y-2">
          <Skeleton className="h-8 w-40" />
        </div>

        <div className="flex overflow-hidden">
          {[...Array(5)].map((_, index) => (
            <div
              className="shrink-0 basis-[80%] sm:basis-2/3 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 [&:not(:first-child)]:pl-4"
              key={index}
            >
              <StoreCardSkeleton />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8 pt-14 md:pt-20 lg:pt-24">
        <div className="space-y-2">
          <Skeleton className="h-8 w-40" />
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4">
          {[...Array(10)].map((_, index) => (
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

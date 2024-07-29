import { Shell } from '@/shared/ui';
import { StoreList } from '@/widgets/store';

export const StoresPage = () => {
  return (
    <Shell>
      <div>
        <h2 className="text-2xl font-bold leading-[1.1] md:text-3xl">
          All Stores
        </h2>
        <p className="max-w-[46.875rem] text-balance text-sm leading-normal text-muted-foreground sm:text-base sm:leading-7">
          Explore stores from around the world
        </p>
      </div>
      <StoreList />
    </Shell>
  );
};

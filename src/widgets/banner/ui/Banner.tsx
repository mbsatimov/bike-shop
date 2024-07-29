import { PlaceholderImage } from '@/shared/ui';

export const Banner = () => (
  <div>
    <div className="row-span-2 grid aspect-[3/1] grid-cols-5 gap-4">
      <div className="col-span-3 row-span-2">
        <PlaceholderImage />
      </div>
      <div className="col-span-2 row-span-1">
        <PlaceholderImage />
      </div>
      <div className="col-span-1 row-span-1">
        <PlaceholderImage />
      </div>
      <div className="col-span-1 row-span-1">
        <PlaceholderImage />
      </div>
    </div>
  </div>
);

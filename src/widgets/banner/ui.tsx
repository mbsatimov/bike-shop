import React from 'react';

import { PlaceholderImage } from '@/shared/ui/placeholder-image';

export const Banner = () => (
  <div>
    <div className="row-span-2 grid grid-cols-5 gap-4">
      <div className="col-span-3 row-span-2">
        <PlaceholderImage ratio={3 / 2} />
      </div>
      <div className="col-span-2 row-span-1">
        <PlaceholderImage ratio={2 / 1} />
      </div>
      <div className="col-span-1 row-span-1">
        <PlaceholderImage ratio={1 / 1} />
      </div>
      <div className="col-span-1 row-span-1">
        <PlaceholderImage ratio={1 / 1} />
      </div>
    </div>
  </div>
);

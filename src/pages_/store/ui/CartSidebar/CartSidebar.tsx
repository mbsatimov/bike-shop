import React from 'react';

import { CartClearButton } from '@/features/cart/ui/CartClearButton';

export const CartSidebar = () => {
  return (
    <aside className="sticky top-[88px] ml-6 hidden h-[calc(100vh-88px)] w-[320px] lg:block">
      <div className="h-full rounded-t-lg bg-secondary">
        <div className="flex justify-between p-4">
          <h2 className="text-2xl font-bold">Cart</h2>
          <CartClearButton variant="ghost" size="sm">
            Clear
          </CartClearButton>
        </div>
      </div>
    </aside>
  );
};

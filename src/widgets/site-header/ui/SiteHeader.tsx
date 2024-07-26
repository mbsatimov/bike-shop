import { ShoppingBasket, User2 } from 'lucide-react';

import { CatalogSheet } from '@/entities/catalog';
import { ProfilePopover } from '@/features/account';
import { CartSheet } from '@/features/cart';
import { SelectLanguage } from '@/features/language';
import { SearchAutoComplete } from '@/features/search';
import { Button } from '@/shared/ui/button';

export const SiteHeader = () => (
  <header className="sticky top-0 z-50 w-full border-b bg-background">
    <div className="container flex h-16 items-center">
      <div className="flex flex-1 space-x-2">
        <SelectLanguage />

        <CatalogSheet options={{ side: 'left' }}>
          <Button>Catalog</Button>
        </CatalogSheet>
      </div>

      <div className="flex items-center space-x-4">
        <SearchAutoComplete />

        <CartSheet>
          <Button className="gap-2">
            <ShoppingBasket />
            Cart
          </Button>
        </CartSheet>

        <ProfilePopover
          options={{
            align: 'end',
          }}
        >
          <Button size={'icon'} variant="secondary" className="rounded-full">
            <User2 className="text-muted-foreground" />
          </Button>
        </ProfilePopover>
      </div>
    </div>
  </header>
);

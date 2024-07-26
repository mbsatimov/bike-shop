import type { ComponentProps } from 'react';
import React from 'react';
import Link from 'next/link';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/sheet';

export type CartSheetProps = ComponentProps<typeof Sheet> & {
  open?: boolean;
  setOpen?: () => void;
  children?: React.ReactNode;
  options?: ComponentProps<typeof SheetContent>;
};

export const CartSheet = ({
  open,
  setOpen,
  children,
  options,
  ...props
}: CartSheetProps) => {
  return (
    <Sheet open={open} onOpenChange={setOpen} {...props}>
      {!!children && <SheetTrigger asChild>{children}</SheetTrigger>}
      <SheetContent {...options}>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <div>
          <ul>
            <li>
              <Link href="/category/1">Category 1</Link>
            </li>
            <li>
              <Link href="/category/2">Category 2</Link>
            </li>
            <li>
              <Link href="/category/3">Category 3</Link>
            </li>
            <li>
              <Link href="/category/4">Category 4</Link>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

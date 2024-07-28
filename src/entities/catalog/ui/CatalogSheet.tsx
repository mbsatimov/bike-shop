import Link from 'next/link';
import type { ComponentProps } from 'react';
import React from 'react';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui';

type Props = ComponentProps<typeof Sheet> & {
  open?: boolean;
  setOpen?: () => void;
  children?: React.ReactNode;
  options?: ComponentProps<typeof SheetContent>;
};

export const CatalogSheet = ({
  open,
  setOpen,
  children,
  options,
  ...props
}: Props) => {
  return (
    <Sheet open={open} onOpenChange={setOpen} {...props}>
      {!!children && <SheetTrigger asChild>{children}</SheetTrigger>}
      <SheetContent {...options}>
        <SheetHeader>
          <SheetTitle>Katalog</SheetTitle>
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

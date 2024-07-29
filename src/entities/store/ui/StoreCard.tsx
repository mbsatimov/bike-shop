import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Icons,
} from '@/shared/ui';

import { Store } from '..';

type Props = React.ComponentProps<typeof Link> & {
  store: Store;
  href: string;
};

export const StoreCard = ({ store, href, ...props }: Props) => {
  const isUserStore = href.includes('dashboard');

  return (
    <Link href={href} {...props}>
      <Card className="relative rounded-lg transition-colors hover:bg-muted/25">
        <CardHeader>
          <CardTitle className="line-clamp-1">{store.name}</CardTitle>
          <CardDescription className="line-clamp-1">
            {store.description?.length
              ? store.description
              : `Explore ${store.name} products`}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-4 pt-4 text-[0.8rem] text-muted-foreground">
          <div className="flex items-center">
            <Icons.product className="mr-1.5 size-3.5" aria-hidden="true" />
            {store.productCount} products
          </div>
          {isUserStore ? (
            <>
              <div className="flex items-center">
                <Icons.cart className="mr-1.5 size-3.5" aria-hidden="true" />
                {store.orderCount} orders
              </div>
              <div className="flex items-center">
                <Icons.users className="mr-1.5 size-3.5" aria-hidden="true" />
                {store.customerCount} customers
              </div>
            </>
          ) : null}
        </CardContent>
      </Card>
    </Link>
  );
};

import { Store as StoreIcon } from 'lucide-react';
import Link from 'next/link';

import { Store } from '@/entities/store';
import { PUBLIC_ROUTES } from '@/shared/router';
import { Badge } from '@/shared/ui';
import { cn } from '@/shared/utils';

type Props = React.ComponentProps<typeof Badge> & {
  store: Pick<Store, 'id' | 'name' | 'image'>;
};
export const StoreBadge = ({ store, className, ...props }: Props) => {
  return (
    <Link href={PUBLIC_ROUTES.store(store.id)}>
      <Badge variant="secondary" className={cn('gap-2', className)} {...props}>
        <div className="rounded-full p-1">
          <StoreIcon className="size-4" />
        </div>
        <span>{store.name}</span>
      </Badge>
    </Link>
  );
};

import Image from 'next/image';
import Link from 'next/link';

import { PUBLIC_ROUTES } from '@/shared/router';
import {
  AspectRatio,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  PlaceholderImage,
} from '@/shared/ui';
import { cn, formatPrice } from '@/shared/utils';

import { Product } from '..';

type Props = React.ComponentProps<typeof Card> & {
  product: Product;
  actionSlot?: React.ReactNode;
  footerSlot?: React.ReactNode;
};

export const ProductCard = ({
  actionSlot,
  product,
  className,
  footerSlot,
  ...props
}: Props) => {
  return (
    <Card
      className={cn('size-full overflow-hidden rounded-lg', className)}
      {...props}
    >
      <Link aria-label={product.name} href={PUBLIC_ROUTES.product(product.id)}>
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={4 / 3}>
            {product.images?.length ? (
              <Image
                src={
                  product.images[0]?.url || '/images/product-placeholder.webp'
                }
                alt={product.images[0]?.name ?? product.name}
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                fill
                loading="lazy"
              />
            ) : (
              <PlaceholderImage className="rounded-none" asChild />
            )}
          </AspectRatio>
        </CardHeader>
        <span className="sr-only">{product.name}</span>
      </Link>
      <Link href={PUBLIC_ROUTES.product(product.id)} tabIndex={-1}>
        <CardContent className="space-y-1.5 p-4">
          <CardTitle className="line-clamp-1">{product.name}</CardTitle>
          <CardDescription className="line-clamp-1">
            {formatPrice(product.price)}
          </CardDescription>
        </CardContent>
      </Link>
      {footerSlot && <CardFooter className="p-4 pt-1">{footerSlot}</CardFooter>}
      {actionSlot && <div className="absolute right-4 top-4">{actionSlot}</div>}
    </Card>
  );
};

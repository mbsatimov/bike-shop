'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye } from 'lucide-react';

import { AspectRatio } from '@/shared/ui/aspect-ratio';
import { buttonVariants } from '@/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { PlaceholderImage } from '@/shared/ui/placeholder-image';
import { cn, formatPrice } from '@/shared/utils';

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
  variant?: 'default' | 'switchable';
  isAddedToCart?: boolean;
  onSwitch?: () => Promise<void>;
}

export const ProductCard = ({
  product,
  className,
  ...props
}: ProductCardProps) => {
  return (
    <Card
      className={cn('size-full overflow-hidden rounded-lg', className)}
      {...props}
    >
      <Link aria-label={product.name} href={`/product/${product.id}`}>
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
      <Link href={`/product/${product.id}`} tabIndex={-1}>
        <CardContent className="space-y-1.5 p-4">
          <CardTitle className="line-clamp-1">{product.name}</CardTitle>
          <CardDescription className="line-clamp-1">
            {formatPrice(product.price)}
          </CardDescription>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-1">
        <div className="flex w-full items-center space-x-2">
          <Link
            href={`/preview/product/${product.id}`}
            title="Preview"
            className={cn(
              buttonVariants({
                variant: 'secondary',
                size: 'icon',
                className: 'h-8 w-8 shrink-0',
              })
            )}
          >
            <Eye className="size-4" aria-hidden="true" />
            <span className="sr-only">Preview</span>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

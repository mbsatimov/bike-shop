'use client';

import { toast } from 'sonner';

import { Button, ButtonProps } from '@/shared/ui';

type Props = ButtonProps;

export const AddToCartButton = ({ ...props }: Props) => {
  const onAddProduct = () => {
    toast.success('Product added to cart');
  };

  return (
    <Button
      aria-label="Add to cart"
      size="sm"
      className="h-8 w-full rounded-sm"
      onClick={onAddProduct}
      {...props}
    >
      Add to cart
    </Button>
  );
};

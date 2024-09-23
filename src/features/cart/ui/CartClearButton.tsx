'use client';

import React from 'react';

import { Button, ButtonProps } from '@/shared/ui';

type Props = ButtonProps;

export const CartClearButton = React.forwardRef(({ ...props }: Props) => {
  const onClear = () => {
    console.log('cart cleared');
  };

  return <Button onClick={onClear} {...props} />;
});

CartClearButton.displayName = 'CartClearButton';

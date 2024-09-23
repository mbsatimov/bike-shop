import React from 'react';

type Props = {
  cart: number;
};

export const CartItem = ({ cart }: Props) => {
  return <div>{cart}</div>;
};

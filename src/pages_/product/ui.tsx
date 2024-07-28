import React from 'react';

type Props = {
  params: {
    id: string;
  };
};

export const ProductPage = ({ params }: Props) => {
  return <div>ProductPage {params.id}</div>;
};

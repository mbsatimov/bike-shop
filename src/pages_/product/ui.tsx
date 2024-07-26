import React from 'react';

type ProductPageProps = {
  params: {
    id: string;
  };
};

export const ProductPage = ({ params }: ProductPageProps) => {
  return <div>ProductPage {params.id}</div>;
};

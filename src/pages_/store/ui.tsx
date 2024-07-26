import React from 'react';

type StorePageProps = {
  params: {
    id: string;
  };
};

export const StorePage = ({ params }: StorePageProps) => {
  return <div>StorePage {params.id}</div>;
};

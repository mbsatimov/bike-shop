import React from 'react';

type Props = {
  params: {
    id: string;
  };
};

export const StorePage = ({ params }: Props) => {
  return <div>StorePage {params.id}</div>;
};

'use client';

import { useRouter } from 'next/navigation';

import { useSearchParams } from '@/shared/router';
import { AutoComplete } from '@/shared/ui';

export const SearchAutoComplete = () => {
  const { getParam } = useSearchParams();
  const router = useRouter();
  const query = getParam('query') || undefined;

  const onSelect = (value: string) => {
    router.push(`/search?query=${value}`);
  };

  return (
    <AutoComplete
      options={['Category 1', 'Category 2', 'Category 3', 'Category 4']}
      emptyMessage="No resulsts."
      placeholder="Find something"
      onValueChange={onSelect}
      value={query}
    />
  );
};

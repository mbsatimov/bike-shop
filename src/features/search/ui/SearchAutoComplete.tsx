'use client';

import { useState } from 'react';

import { AutoComplete } from '@/shared/ui/autocomplete';

export const SearchAutoComplete = () => {
  const [value, setValue] = useState<{ value: string; label: string }>({
    value: '',
    label: '',
  });

  return (
    <div>
      <AutoComplete
        options={[
          {
            value: 'bike1',
            label: 'Bike 1',
          },
          {
            value: 'bike2',
            label: 'Bike 2',
          },
          {
            value: 'bike3',
            label: 'Bike 3',
          },
        ]}
        emptyMessage="No resulsts."
        placeholder="Find something"
        onValueChange={setValue}
        value={value}
      />
    </div>
  );
};

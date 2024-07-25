import React from 'react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';

export const SelectLanguage = () => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder='Select a language' />
      </SelectTrigger>
      <SelectContent defaultValue='en'>
        <SelectItem value='ru'>Russian</SelectItem>
        <SelectItem value='uz'>Uzbek</SelectItem>
        <SelectItem value='en'>English</SelectItem>
      </SelectContent>
    </Select>
  );
};

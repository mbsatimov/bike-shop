import React from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';

export const SelectLanguage = () => {
  return (
    <Select>
      <SelectTrigger className="w-32">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="w-32" defaultValue="en">
        <SelectItem value="ru">Russian</SelectItem>
        <SelectItem value="uz">Uzbek</SelectItem>
        <SelectItem value="en">English</SelectItem>
      </SelectContent>
    </Select>
  );
};

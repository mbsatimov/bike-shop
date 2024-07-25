import { CatalogSheet } from '@/features/catalog';
import { SelectLanguage } from '@/features/language';

export const SiteHeader = () => (
  <header className='sticky top-0 z-50 w-full border-b bg-background'>
    <div className='container flex h-16 items-center'>
      <div className='flex flex-1 space-x-2'>
        <SelectLanguage />
        <CatalogSheet />
      </div>
      <div className='flex items-center space-x-2'>
        {/* <SearchInput />
        <CartSheet />
        <SettingsDropdown /> */}
      </div>
    </div>
  </header>
);

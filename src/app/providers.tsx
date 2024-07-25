'use client';

import type { PropsWithChildren } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export const Providers = ({ children }: PropsWithChildren) => (
  <NextThemesProvider
    attribute='class'
    defaultTheme='system'
    enableSystem
    disableTransitionOnChange
  >
    {children}
  </NextThemesProvider>
);

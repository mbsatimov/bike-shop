import type { PropsWithChildren } from 'react';
import React from 'react';

import { SiteFooter } from '@/widgets/site-footer';
import { SiteHeader } from '@/widgets/site-header';

const LobbyLayout = ({ children }: PropsWithChildren) => (
  <div className='relative flex min-h-screen flex-col'>
    <SiteHeader />
    <main>{children}</main>
    <SiteFooter />
  </div>
);

export default LobbyLayout;

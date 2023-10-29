import React, { FC, PropsWithChildren } from 'react';
import { StaticLayout } from '@stn-ui/layout';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <StaticLayout title="FAQ" subtitle="The most frequently asked questions">
    {children}
  </StaticLayout>
);

export default Layout;

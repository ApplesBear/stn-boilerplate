import React, { FC, PropsWithChildren } from 'react';
import { StaticLayout } from '@stn-ui/layout';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <StaticLayout title="Features" subtitle="The best features in the world">
    {children}
  </StaticLayout>
);

export default Layout;

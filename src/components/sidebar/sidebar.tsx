'use client';

import React, { FC } from 'react';
import { Sidebar as SidebarComponent } from '@stn-ui/sidebar';
import SidebarNavigation from './sidebar-navigation';

const Sidebar: FC = () => (
  <div>
    <SidebarComponent>
      <SidebarNavigation />
    </SidebarComponent>
  </div>
);

export default Sidebar;

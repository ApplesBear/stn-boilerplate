'use client';

import React, { FC, PropsWithChildren } from 'react';
import { UIProvider } from '@stn-ui/provider';
import { ToastProvider } from '@stn-ui/toasts';

const AppProvider: FC<PropsWithChildren> = ({ children }) => <UIProvider>{children}</UIProvider>;

export default AppProvider;

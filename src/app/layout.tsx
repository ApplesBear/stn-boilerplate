import { NextPage } from 'next';
import { Inter } from 'next/font/google';
import { DashboardLayout } from '@stn-ui/layout';
import AppProvider from '@/components/app-provider';
import '@stn-ui/theme/stn-ui.css';
import Sidebar from '@/components/sidebar/sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

const RootLayout: NextPage<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>
      <AppProvider>
        <DashboardLayout sidebar={<Sidebar />}>{children}</DashboardLayout>
      </AppProvider>
    </body>
  </html>
);

export default RootLayout;

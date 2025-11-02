import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

import Sidebar from '@/components/sidebar/Sidebar';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Pre-built components with awesome default',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        {/* <Navbar /> */}
      </div>
      <div className="h-full hidden md:flex flex-col w-56 fixed inset-y-0 border-r z-50 ">
        <Sidebar />
      </div>
      <main className="h-full pt-[80px] md:pl-56">{children}</main>
    </div>
  );
}

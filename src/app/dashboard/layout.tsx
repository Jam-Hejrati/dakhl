import Header from '@/src/components/Dashboard/Header/Header';
import Sidebar from '@/src/components/Dashboard/Sidebar/Sidebar';
import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col lg:flex-row h-screen w-screen'>
      <div className='w-full h-full flex flex-col'>
        <Header />
        {children}
      </div>
      <Sidebar />
    </div>
  );
}

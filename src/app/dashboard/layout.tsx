import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <div className='flex flex-col lg:flex-row h-screen w-screen'>{children}</div>;
}

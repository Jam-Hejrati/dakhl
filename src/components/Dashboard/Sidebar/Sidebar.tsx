import HomeIcon from '@/src/icons/HomeIcon';
import React from 'react';

function Sidebar() {
  const pages = [
    { id: 1, title: 'خانه', icon: <HomeIcon /> },
    { id: 2, title: 'تست', icon: <HomeIcon /> },
  ];

  return (
    <div className='fixed lg:relative bottom-0 lg:h-full p-4 w-full lg:w-auto bg-slate-200 flex justify-center lg:flex-col gap-2'>
      {pages.map((page) => (
        <div key={page.id} className='flex justify-end gap-2'>
          <p className='text-black hidden lf:flex'>{page.title}</p>
          <div className='text-black'>{page.icon}</div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;

'use client';

import React from 'react';
import Profile from './Profile/Profile';
import ThemeButton from './ThemeButton/ThemeButton';

export default function Header() {
  return (
    <div className='bg-stone-50 flex items-center justify-between flex-row-reverse'>
      <Profile />
      <ThemeButton />
    </div>
  );
}

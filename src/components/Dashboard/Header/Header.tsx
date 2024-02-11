'use client';

import React from 'react';
import Profile from './Profile/Profile';
import ThemeButton from './ThemeButton/ThemeButton';
import SettingButton from './SettingButton/SettingButton';

export default function Header() {
  return (
    <div className='bg-stone-50 flex items-center justify-between flex-row-reverse'>
      <Profile />
      <div className='flex'>
        <SettingButton />
        <ThemeButton />
      </div>
    </div>
  );
}

import DarkModeIcon from '@/src/icons/DarkModeIcon';
import LightModeIcon from '@/src/icons/LightModeIcon';
import { themeMode } from '@/src/store/themeModeAtom';
import { Button } from '@nextui-org/react';
import { useAtom } from 'jotai';

export default function ThemeButton() {
  const [theme, setTheme] = useAtom(themeMode);

  const handleThemeChange = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div>
      <Button onClick={handleThemeChange} className='bg-transparent w-min min-w-fit py-1 px-2 ml-1 outline-none'>
        {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </Button>
    </div>
  );
}

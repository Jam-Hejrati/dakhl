import SettingIcon from '@/src/icons/SettingIcon';
import { Button } from '@nextui-org/react';

export default function SettingButton() {
  return (
    <div>
      <Button className='bg-transparent w-min min-w-fit py-1 px-2 ml-1'>
        <SettingIcon />
      </Button>
    </div>
  );
}

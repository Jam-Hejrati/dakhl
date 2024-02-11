import SettingIcon from '@/src/icons/SettingIcon';
import { Button, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/react';

export default function SettingButton() {
  return (
    <div>
      <Dropdown dir='rtl'>
        <DropdownTrigger>
          <Button isIconOnly className='ml-2 bg-transparent'>
            <SettingIcon />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label='Static Actions'>
          <DropdownItem key='profile'>پروفایل</DropdownItem>
          <DropdownItem key='setting'>تنظیمات</DropdownItem>
          <DropdownSection className='border-t-1 pt-1 mt-1 mb-0'>
            <DropdownItem key='logout' className='text-danger' color='danger'>
              خروج از حساب
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

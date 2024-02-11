import ProfileImage from '@/src/assets/Images/profile.jpg';
import Image from 'next/image';

export default function Profile() {
  return (
    <div>
      <div className='m-1 flex flex-row-reverse items-center gap-2'>
        <Image src={ProfileImage} style={{ borderRadius: '50%' }} width='40' height='40' alt='عکس پروفایل' />
        <p className='text-lg font-semibold mb-1.5'>جم هجرتی</p>
      </div>
    </div>
  );
}

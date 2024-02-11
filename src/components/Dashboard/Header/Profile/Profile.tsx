import ProfileImage from '@/src/assets/Images/profile.jpg';
import Image from 'next/image';

export default function Profile() {
  return (
    <div className='m-2 flex flex-row-reverse items-center gap-2 w-full'>
      <Image src={ProfileImage} priority style={{ borderRadius: '50%', width: '10%', maxWidth: '40px' }} alt='عکس پروفایل' />
      <p className='text-base sm:text-lg font-semibold mb-0.5 text-slate-800'>جم هجرتی</p>
    </div>
  );
}

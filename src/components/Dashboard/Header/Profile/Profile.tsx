import ProfileImage from '@/src/assets/Images/profile.jpg';
import Image from 'next/image';

export default function Profile() {
  return (
    <div>
      <div className='m-2 flex flex-row-reverse items-center gap-2'>
        <Image src={ProfileImage} style={{ borderRadius: '50%', width: '10%', maxWidth: '40px' }} alt='عکس پروفایل' />
        <p className='text-base font-semibold mb-0.5 text-slate-800'>جم هجرتی</p>
      </div>
    </div>
  );
}

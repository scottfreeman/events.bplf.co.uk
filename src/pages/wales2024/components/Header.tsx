import Image from 'next/image';

import logoImage from '../images/logo.jpg';

export function Header() {
  return (
    <header className='bg-black'>
      <div className='bg-black container pt-8 px-4 mx-auto flex justify-center'>
        <Image
          src={logoImage}
          alt='WPU World Pro Cup 2024 & 100% Strict Curl Championships'
          height={500}
          className='rounded-xl'
        ></Image>
      </div>
    </header>
  );
}

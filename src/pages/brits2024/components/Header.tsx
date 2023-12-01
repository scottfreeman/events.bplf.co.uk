import Image from 'next/image';

import logoImage from '../images/logo.jpg';

export function Header() {
  return (
    <header className='bg-black'>
      <div className='bg-black container pt-8 px-4 mx-auto flex justify-center'>
        <Image src={logoImage} alt='BPF BRITISH CHAMPIONSHIPS 2024' height={500} className='rounded-xl'></Image>
      </div>
    </header>
  );
}

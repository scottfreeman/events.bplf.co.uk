import Image from 'next/image';

import logoImage from '../images/logo.jpg';
import image0 from '../images/image0.jpg';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';

export function Header() {
  return (
    <header className='bg-white'>
      <div className='bg-white container p-4 mx-auto flex justify-center'>
        <div className='px-4'>
          <Image src={image0} alt='' width={150} className='rounded-xl'></Image>
        </div>
        <div className='px-4'>
          <Image src={image1} alt='' width={150} className='rounded-xl'></Image>
        </div>
        <div className='px-4'>
          <Image src={image2} alt='' width={150} className='rounded-xl'></Image>
        </div>
      </div>
      <div className='bg-black container pt-8 px-4 mx-auto flex justify-center'>
        <Image src={logoImage} alt='Mr & Mrs univers pro meet' height={500} className='rounded-xl'></Image>
      </div>
    </header>
  );
}

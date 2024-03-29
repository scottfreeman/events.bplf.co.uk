import Image from 'next/image';

import { A } from '@/components/atoms';
import bpfLogo from '../../../images/bpf.png';
import wpuLogo from '../../../images/wpu.jpg';

export function Footer() {
  return (
    <footer className='bg-gray-200 text-black'>
      <div className='container px-5 py-8 mx-auto flex flex-col items-center'>
        <div className='flex justify-center items-center'>
          <div className='mx-4'>
            <A href='https://www.bplf.co.uk/' target='_blank'>
              <Image src={bpfLogo} alt='British Powerlifting Federation' width={125} />
            </A>
          </div>
          <div className='mx-4'>
            <A href='https://www.bplf.co.uk/' target='_blank'>
              <Image src={wpuLogo} alt='World Powerlifting Union' width={125} />
            </A>
          </div>
        </div>
        <div className='mt-5 text-xs'>&copy; 2024 British Powerlifting Federation. All Rights Reserved.</div>
      </div>
    </footer>
  );
}

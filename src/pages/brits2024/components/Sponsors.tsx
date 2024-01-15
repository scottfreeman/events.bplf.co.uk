import Image from 'next/image';
import { A } from '@/components/atoms';

import strengthShop from '../../../images/sponsors/strength-shop.jpg';
import zkc from '../../../images/sponsors/zkc.jpg';
import bpf from '../../../images/sponsors/bpf.png';
import curl from '../../../images/sponsors/strict-curl-federation.jpg';

export function Sponsors() {
  return (
    <section className='xl:w-5/6 m-auto mb-10'>
      <div className='text-3xl uppercase font-bold m-4 text-center'>Thank you to our sponsors</div>
      <div className='flex justify-center mb-4 align-middle items-center'>
        <div className='mx-4'>
          <Image src={zkc} alt='ZKC Strength' width={200} />
        </div>
        <div className='mx-4'>
          <A href='https://www.bplf.co.uk/' target='_blank'>
            <Image src={bpf} alt='BRITISH POWERLIFTING FEDERATION AND ACADEMY LTD' height={150} />
          </A>{' '}
        </div>
        <div className='mx-4'>
          <A href='https://www.strengthshop.co.uk/' target='_blank'>
            <Image src={strengthShop} alt='Strength Shop' />
          </A>
        </div>
        <div className='mx-4'>
          <Image src={curl} alt='100% STRICT CURL GB ' />
        </div>
      </div>
      <div className='text-center'>
        Are you interested in being a sponsor? Contact{' '}
        <A href='mailto:bpf.secretary@gmail.com'>bpf.secretary@gmail.com</A>.
      </div>
    </section>
  );
}

import { Button } from '@/components/atoms';

export function Registration() {
  return (
    <div className='bg-black text-white text-xl px-4 mt:px-0'>
      <section className='flex flex-wrap m-auto mb-10'>
        <div className='m-auto p-10 pb-14 text-center'>
          <div className='text-6xl uppercase font-bold mb-2'>Registration</div>
          <p className='mb-2 text-2xl mb-4'>To enter the competition, please complete the registration form.</p>
          <div>
            <Button
              href='https://docs.google.com/forms/d/e/1FAIpQLSfOGZbm7bfU-RZfx3IyUlpcRJ8ifTgvvEPggvRK1MPPa28_3w/viewform'
              target='_blank'
              className='bg-red-700 hover:bg-red-800 uppercase text-xl lg:text-3xl'
            >
              Registration Form
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

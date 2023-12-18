import { Button } from '@/components/atoms';

export function Registration() {
  return (
    <div className='bg-gray-200 px-4 mt:px-0'>
      <section className='flex flex-wrap xl:w-3/4 2xl:w-1/2 m-auto mb-10'>
        <div className='m-auto p-4 text-center'>
          <div className='text-4xl uppercase font-bold mb-2'>Registration</div>
          <p className='mb-2'>Entry form will go live on 28th January, 2024</p>
          {/* <p className='mb-2'>To enter the competition, please complete the registration form.</p>
          <div>
            <Button href='#' target='_blank' className='bg-red-700 hover:bg-red-800 uppercase text-xl lg:text-3xl'>
              Registration Form
            </Button>
          </div> */}
        </div>
      </section>
    </div>
  );
}

import { Button } from '@/components/atoms';

export function Registration() {
  return (
    <div className='bg-gray-200 px-4 mt:px-0'>
      <section className='flex flex-wrap xl:w-3/4 2xl:w-1/2 m-auto mb-10'>
        <div className='m-auto p-4 text-center'>
          <div className='text-4xl uppercase font-bold mb-2'>Registration</div>
          <p className='mb-2'>To enter the competition, please complete the appropriate registration form.</p>
          <div className='mb-4'>
            <Button
              href='https://forms.gle/hE9WCEyCLinH7ntTA'
              target='_blank'
              className='bg-red-700 hover:bg-red-800 uppercase text-xl'
            >
              DAY 1 PLATFORM 1 SINGLE LIFTS 100% RAW
            </Button>
          </div>
          <div className='mb-4'>
            <Button
              href='https://forms.gle/FjXTDUATwxXme1UT8'
              target='_blank'
              className='bg-red-700 hover:bg-red-800 uppercase text-xl'
            >
              DAY 1 PLATFORM 2 SINGLE LIFTS BPF/WPU
            </Button>
          </div>
          <div className='mb-4'>
            <Button
              href='https://forms.gle/3N6FRbeegkyFS8dz8'
              target='_blank'
              className='bg-red-700 hover:bg-red-800 uppercase text-xl'
            >
              DAY 2 PLATFORM 1 FULL POWER RAW 10% RAW
            </Button>
          </div>
          <div className='mb-4'>
            <Button
              href='https://forms.gle/6PeJhhtRQ9TFsTin7'
              target='_blank'
              className='bg-red-700 hover:bg-red-800 uppercase text-xl'
            >
              DAY 2 PLATFORM 2 FULL POWER BPF/WPU
            </Button>
          </div>
          <div className='mb-4'>
            <Button
              href='https://www.tickettailor.com/events/welshfitnessexpo'
              target='_blank'
              className='bg-red-900 hover:bg-red-800 text-sm uppercase'
            >
              Spectator Tickets
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

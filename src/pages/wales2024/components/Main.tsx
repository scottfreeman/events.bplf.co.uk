import Countdown, { CountdownRenderProps } from 'react-countdown';

import { A, Button } from '@/components/atoms';

export function Main() {
  const date = new Date('2024-06-29 10:00:00');
  const now = new Date();
  const endDate = new Date('2024-06-30 17:00:00');

  const countdownRenderer = ({ completed, formatted }: CountdownRenderProps) => {
    if (completed) {
      if (now < endDate) {
        return (
          <div className='mx-4'>
            {/* <Button
              href='#'
              target='_blank'
              className='bg-gradient-to-b from-orange-500 to-orange-900 text-2xl lg:text-4xl uppercase hover:from-orange-600 hover:to-orange-900'
            >
              Watch Livestream
            </Button> */}
          </div>
        );
      }
    } else {
      return (
        <div className='flex'>
          <div className='flex flex-col items-center m-2 lg:m-4'>
            <div className='bg-gradient-to-b from-orange-500 to-orange-900 rounded text-white p-2 lg:p-5 text-2xl lg:text-5xl'>
              <span suppressHydrationWarning={true}>{formatted.days}</span>
            </div>
            <div className='uppercase text-xs lg:text-sm'>Days</div>
          </div>
          <div className='flex flex-col items-center m-2 lg:m-4'>
            <div className='bg-gradient-to-b from-orange-500 to-orange-900 rounded text-white p-2 lg:p-5 text-2xl lg:text-5xl'>
              <span suppressHydrationWarning={true}>{formatted.hours}</span>
            </div>
            <div className='uppercase text-xs lg:text-sm'>Hours</div>
          </div>
          <div className='flex flex-col items-center m-2 lg:m-4'>
            <div className='bg-gradient-to-b from-orange-500 to-orange-900 rounded text-white p-2 lg:p-5 text-2xl lg:text-5xl'>
              <span suppressHydrationWarning={true}>{formatted.minutes}</span>
            </div>
            <div className='uppercase text-xs lg:text-sm'>Minutes</div>
          </div>
          <div className='flex flex-col items-center m-2 lg:m-4'>
            <div className='bg-gradient-to-b from-orange-500 to-orange-900 rounded text-white p-2 lg:p-5 text-2xl lg:text-5xl'>
              <span suppressHydrationWarning={true}>{formatted.seconds}</span>
            </div>
            <div className='uppercase text-xs lg:text-sm'>Seconds</div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <section className='bg-black text-white py-8 lg:py-10 flex flex-col items-center text-center'>
        <div className='mb-8 mx-4'>
          <div className='text-4xl lg:text-6xl font-bold mb-12 uppercase'>Mr & Mrs univers pro meet</div>
          <div className='text-2xl lg:text-4xl font-bold mb-2 uppercase'>
            RAW, CLASSIC RAW & SINGAL PLY platform 2 : BRITISH POWERLIFTING FEDERATION / WORLD POWERLIFTING UNION Mr &
            Mrs Universe pro meet (non tested) Wales
            <br />
            <br />
            RAW only platform 1 : 100% raw powerlifting Mr & Mrs universe pro meet tested wales
          </div>
          <div className='text-2xl lg:text-4xl font-bold mb-2 uppercase'>ICC Wales, Newport</div>
        </div>
        <div className='text-xl lg:text-4xl font-bold mb-8 uppercase'>
          29 - 30<sup className='lowercase text-sm lg:-top-5'>th</sup> June, 2024
        </div>
        <div>
          <Countdown date={date} renderer={countdownRenderer} />
        </div>
      </section>

      <section className='lg:grid grid-cols-2 items-stretch flex-wrap xl:w-5/6 m-auto'>
        <div className='flex w-full'>
          <div className='flex flex-col flex-1 bg-gray-200 rounded m-4 p-4 w-full h-96 lg:h-auto'>
            <div>
              <div className='uppercase text-sm mb-2'>Event Location</div>
              <div className='text-lg lg:text-xl mb-2'>ICC Wales, Coldra Woods, Newport, South Wales, NP18 1HQ</div>
            </div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.114843052968!2d-2.9318942238663985!3d51.602784303731276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871e634f777d02d%3A0x7674cde20b827f70!2sInternational%20Convention%20Centre%20Wales!5e0!3m2!1sen!2sus!4v1702899018243!5m2!1sen!2sus'
              width='600'
              loading='lazy'
              className='w-full flex-1 '
            ></iframe>
          </div>
        </div>
        <div className='flex w-full'>
          <div className='flex-1 bg-gray-200 rounded m-4 p-4'>
            <div className='uppercase text-sm mb-2'>Event Information</div>
            <div className='mb-2'>
              <span className='font-bold'>Spectators fee:</span>
              <br />
              &pound;10 each day for 16 years old and over.
              <br />
              Lifting begins 10am each day.
            </div>
            <div className='mb-2'>
              <span className='font-bold'>Powerlifting bars used:</span>
              <br />
              Squat bar: 25kg Kabuki Squat Bar.
              <br />
              Bench bar: 20kg Kabuki Power Bar.
              <br />
              Deadlift bar: 20kg Kabuki Deadlift Bar.
            </div>
            <div className='mb-2'>
              <span className='font-bold'>Livestream:</span>
              <br />
              Link coming soon.
            </div>
            <div className='mb-2'>
              <span className='font-bold'>Meet Directors:</span>
              <div className='md:flex justify-start items-start align-top'>
                <div className='md:w-1/2 mb-2 md:mb-0'>
                  Marcus Griffiths
                  <div className='lg:text-sm'>BPF/WPU president.</div>
                </div>
                <div className='md:w-1/2'>
                  Lady Petra Kent
                  <div className='lg:text-sm'>BPF/WPU vice-president.</div>
                </div>
              </div>
            </div>
            <div className='mb-2'>
              <span className='font-bold'>Contact:</span>
              <br />
              <A href='mailto:bpfwpuheadoffice@gmail.com'>bpfwpuheadoffice@gmail.com</A>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

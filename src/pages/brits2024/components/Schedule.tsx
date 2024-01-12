import { A } from '@/components/atoms';

export function Schedule() {
  return (
    <div className='xl:w-5/6 m-auto mb-10'>
      <section className='flex flex-wrap'>
        <div className='flex w-full lg:w-1/2'>
          <div className='m-4 border rounded w-full'>
            <div className='flex-1 m-4 p-4 text-center'>
              <div className='text-2xl uppercase font-bold mb-4'>Lifting Schedule</div>
              <div className='mb-8'>
                <div className='text-lg font-bold'>Saturday 29th June</div>
                <div>Platform 1: 100% raw powerlifting Mr & Mrs Universe pro meet tested</div>
                <div>Platform 2: WPU Mr & Mrs Universe pro meet untested</div>
              </div>
              <div className='mb-8'>
                <div className='text-lg font-bold'>Sunday 30th June</div>
                <div>Platform 1: 100% raw powerlifting Mr & Mrs Universe pro meet tested (raw only lifers)</div>
                <div>Platform 2: WPU Mr & Mrs Universe pro meet untested & tested (classic raw, s/p and equipped)</div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-full lg:w-1/2'>
          <div className='m-4 border rounded w-full'>
            <div className='flex-1 m-4 p-4 text-center'>
              <div className='text-2xl uppercase font-bold mb-4'>Weigh-In &amp; Gear Check Schedule</div>
              <div className='mb-8'>
                <div className='mb-2'>
                  Friday 28th June 2024 for Saturday athletes will be weigh-in, kit and ID checks 12pm till 2pm
                </div>
                <div className='mb-2'>
                  Saturday 29th June 2024 for Sunday athletes will be weigh-in, kit and ID checks 12pm till 2pm
                </div>
                <div>This is a 24 hour weigh in no one will be weighed in on the day they are lifting.</div>
              </div>
              <div className='text-2xl uppercase font-bold mb-4'>Rules</div>
              <div>
                <ul>
                  <li>
                    <A href='https://bplf.co.uk/rules' target='_blank'>
                      BPF / WPU RULE BOOK 2023
                    </A>
                  </li>
                  <li>
                    <A href='https://rawpowerlifting.com/rules/' target='_blank'>
                      100% RAW POWERLIFTING RULE BOOK 2023
                    </A>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

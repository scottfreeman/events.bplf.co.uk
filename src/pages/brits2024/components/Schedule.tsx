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
                <div className='text-lg font-bold'>Saturday 18th May 2024</div>
                <div>Platform 1: Women up to 75kg B/W Classes</div>
                <div>Platform 2: Men up to 82.5kg B/W Classes</div>
                <div>Platform 3: ALL STRICT CURL LIFTERS</div>
              </div>
              <div className='mb-8'>
                <div className='text-lg font-bold'>Sunday 19th May 2024 full power</div>
                <div>Platform 1: Women over 75kg B/W Classes</div>
                <div>Platform 2: Men over 82.5kg B/W/ Classes</div>
                <div>All teen and junior lifters</div>
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
                  Friday 17th May 2024 for Saturday athletes will be weigh-in, kit and ID checks 12pm till 3pm
                </div>
                <div className='mb-2'>
                  Saturday 18th May 2024 for Sunday athletes will be weigh-in, kit and ID checks 12pm till 2pm
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

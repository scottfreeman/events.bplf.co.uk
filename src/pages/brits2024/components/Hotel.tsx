import { A, Button } from '@/components/atoms';

export function Hotel() {
  return (
    <div className='xl:w-5/6 m-auto mb-10'>
      <section className='bg-white text-black flex flex-wrap'>
        <div className='mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-2'>
          <div className='bg-gray-200 rounded p-4'>
            <div className='text-2xl uppercase font-bold'>Airports</div>
            <ul className='list-disc list-outside mt-2 ml-5'>
              <li className='list-item'>
                <span className='font-bold'>Birmingham International Airport</span> (BHX)
                <br />
                <span>~15 minutes drive</span>.<br />
                <A
                  target='_blank'
                  href='https://www.google.com/maps/dir/BHX,+Birmingham/Royal+Court+Hotel,+Tamworth+Rd,+Coventry+CV7+8JG/@52.4365774,-1.68307,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x4870b0deff56c9e3:0xd7fab23579355bb!2m2!1d-1.7435071!2d52.4523821!1m5!1m1!1s0x48774cc392ad6929:0xab89d5d52186d00a!2m2!1d-1.5413319!2d52.4452701!3e0?hl=en'
                >
                  Open Map
                </A>
              </li>
              <li className='list-item mt-2'>
                <span className='font-bold'>East Midlands European Airport</span> (EMA)
                <br />
                <span>~45 minutes drive</span>.<br />
                <A
                  target='_blank'
                  href='https://www.google.com/maps/dir/East+Midlands+Airport+(EMA),+Castle+Donington,+Derby/Royal+Court+Hotel,+Tamworth+Rd,+Coventry+CV7+8JG/@52.6246232,-1.7911145,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x4879e5b2f87b0e53:0x32972cb4ce3df85!2m2!1d-1.332134!2d52.829374!1m5!1m1!1s0x48774cc392ad6929:0xab89d5d52186d00a!2m2!1d-1.5413319!2d52.4452701!3e0?hl=en'
                >
                  Open Map
                </A>
              </li>
            </ul>
          </div>
          <div className='bg-gray-200 rounded p-4'>
            <div className='text-2xl uppercase font-bold'>Taxis</div>
            <div className='text-sm mt-2'>
              We offer this as a convenience, not as a recommendation. Other taxi firms are available.
            </div>
            <ul className='list-disc list-outside mt-2 ml-5'>
              <li className='list-item'>
                <span className='font-bold'>Allens Taxis</span>
                <br />
                <span>02476 555 555</span>
                <br />
                <A target='_blank' href='https://www.allenstaxis.com/'>
                  Website
                </A>
              </li>
              <li className='list-item mt-2'>
                <span className='font-bold'>Central Taxis</span>
                <br />
                <span>024 7633 3333</span>
                <br />
                <A target='_blank' href='https://centraltaxiswestmidlands.co.uk/'>
                  Website
                </A>
              </li>
              <li className='list-item mt-2'>
                <span className='font-bold'>Lewis Taxis</span>
                <br />
                <span>024 7666 6666</span>
                <br />
                <A target='_blank' href='https://www.lewistaxis.co.uk/'>
                  Website
                </A>
              </li>
            </ul>
          </div>
          <div className='bg-gray-200 rounded p-4'>
            <div className='text-2xl uppercase font-bold mb-2'>Hotels</div>
            <div className='mb-2 text-xl font-bold'>Premier Inn</div>
            <div className='mb-2'>
              <A target='_blank' href='https://www.google.com/travel/hotels/s/CJHxDLwstkbjoPoJ6'>
                View Hotel Information
              </A>
            </div>
            <div className='mb-2 text-xl font-bold'>ibis Hotel</div>
            <div className='mb-2'>
              <A target='_blank' href='https://www.google.com/travel/hotels/s/wTY73RwQ4n8BwM6Z6'>
                View Hotel Information
              </A>
            </div>
          </div>
          <div className='bg-gray-200 rounded p-4'>
            <div className='text-2xl uppercase font-bold mb-2'>Activities</div>
            <div className='mb-2'>
              <A
                target='_blank'
                href='https://www.dayoutwiththekids.co.uk/things-to-do/west-midlands/west-midlands/coventry'
              >
                View Information
              </A>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

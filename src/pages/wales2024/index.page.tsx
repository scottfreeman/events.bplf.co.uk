import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Registration } from './components/Registration';
import { Sponsors } from './components/Sponsors';
import { Schedule } from './components/Schedule';
import { A } from '@/components/atoms';

const LandingPage = () => {
  return (
    <div className='bg-white text-black'>
      <NextSeo
        title='Mr & Mrs univers pro meet'
        description='Mr & Mrs univers pro meet on 28th & 29th June 2024. Hosted by the British Powerlifting Federation.'
      />
      <Head>
        <title>Mr & Mrs univers pro meet | 29th & 30th June 2024 | Wales, UK</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Main />
      <Registration />
      <Schedule />
      <section className='xl:w-5/6 m-4 lg:m-auto mb-10'>
        <div className='grid lg:grid-cols-3 lg:space-x-2 space-y-2'>
          <div className='border rounded p-4 mt-2 lg:ml-2'>
            <div className='text-2xl uppercase font-bold mb-4'>MEET DIRECTORE’S</div>
            Mr Marcus Griffiths
            <br />
            Lady Petra Griffiths
          </div>
          <div className='border rounded p-4'>
            <div className='text-2xl uppercase font-bold mb-4'>SPONCERS</div>
            ZKC STRENGTH
            <br />
            BRITISH POWERLIFTING FEDERATION AND ACADEMY LTD
            <br />
            WORLD POWERLIFTING UNION <br />
            STRENGTH SHOP UK
            <br />
            100% STRICT CURL GB
          </div>
          <div className='border rounded p-4'>
            <div className='text-2xl uppercase font-bold mb-4'>AWARDS</div>
            EACH WEIGHT & AGE CLASS
            <br />
            MEN 1ST 2ND & 3RD PLACING
            <br />
            WOMENS 1ST 2ND 3RD PLACING <br />
            BEST OVER ALL LIFTER FOR FEMALE
            <br />
            BEST OVER ALL LIFTER FOR MALE
          </div>
          <div className='border rounded p-4'>
            <div className='text-2xl uppercase font-bold mb-4'>EQUIPMENT</div>
            SQUAT BAR 25KG KABUKI
            <br />
            BENCH BAR 20KG KABUKI
            <br />
            DEADLIFT BAR 20KG KABUKI
            <br />
            ZKC AND STRENGTH SHOP CALIBRATED PLATES
            <br />
            STRENGTH SHOPE EZ BARS
          </div>
          <div className='border rounded p-4'>
            <div className='text-2xl uppercase font-bold mb-4'>PLACES TO VISIT IN CARDIFF, ENGLAND</div>
            <A
              href='https://www.tripadvisor.co.uk/Attractions-g186460-Activities-Cardiff_South_Wales_Wales.html'
              target='_blank'
            >
              Attractions-g186460-Activities-Cardiff_South_Wales_Wales.html
            </A>
            <br />
            <br />
            Closes air port is <br />
            <br />
            <A href='https://g.co/kgs/D8fidcs' target='_blank'>
              https://g.co/kgs/D8fidcs
            </A>
            <br />
            Cardiff international <br />
            code : CWL
            <br />
          </div>
          <div className='border rounded p-4'>
            <div className='text-2xl uppercase font-bold mb-4'>HOTELS</div>
            1/
            <br />
            <A href='https://www.booking.com/Share-KpqWD4U' target='_blank'>
              The Manor House At Celtic Manor
            </A>
            <br />
            which has a airport shuttle
            <br />
            <br />
            2/
            <A
              href='https://www.booking.com/hotel/gb/holidayinnnewport.en-gb.html?label=New_English_EN_GBIE_5496343105-o3H*rANRilZd5LRixj8tfwS217287031174%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&sid=37fb4949beb2dac35bfceec474471364&aid=318615&ucfs=1&arphpl=1&checkin=2024-06-23&checkout=2024-06-24&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=2&hapos=2&sr_order=distance_from_search&srpvid=c458905f6a320289&srepoch=1705437394&all_sr_blocks=22585123_94353334_2_2_0&highlighted_blocks=22585123_94353334_2_2_0&matching_block_id=22585123_94353334_2_2_0&sr_pri_blocks=22585123_94353334_2_2_0__10440&from=searchresults#hotelTmpl'
              target='_blank'
            >
              Holiday Inn Newport, an IHG HotelOpens in new window
            </A>
            <br />
            <br />
            3/{' '}
            <A href='https://www.booking.com/Share-CkBgdF' target='_blank'>
              Tŷ Newport
            </A>{' '}
            which has a airport shuttle
            <br />
            which has a airport shuttle
            <br />
            <br />
            4/{' '}
            <A
              href='https://www.booking.com/hotel/gb/coldra-court-hotel.en-gb.html?label=New_English_EN_GBIE_5496343105-o3H*rANRilZd5LRixj8tfwS217287031174%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&sid=37fb4949beb2dac35bfceec474471364&aid=318615&ucfs=1&arphpl=1&checkin=2024-06-23&checkout=2024-06-24&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=5&hapos=5&sr_order=distance_from_search&srpvid=c458905f6a320289&srepoch=1705437394&all_sr_blocks=3810119_95162064_0_2_0&highlighted_blocks=3810119_95162064_0_2_0&matching_block_id=3810119_95162064_0_2_0&sr_pri_blocks=3810119_95162064_0_2_0__10700&from_sustainable_property_sr=1&from=searchresults#hotelTmpl'
              target='_blank'
            >
              Coldra Court Hotel by Celtic ManorOpens in new window
            </A>
            <br />
            <br />
            5/{' '}
            <A
              href='https://www.booking.com/hotel/gb/celticmanor.en-gb.html?label=New_English_EN_GBIE_5496343105-o3H*rANRilZd5LRixj8tfwS217287031174%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&sid=37fb4949beb2dac35bfceec474471364&aid=318615&ucfs=1&arphpl=1&checkin=2024-06-23&checkout=2024-06-24&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=4&hapos=4&sr_order=distance_from_search&srpvid=c458905f6a320289&srepoch=1705437600&all_sr_blocks=13496_88650491_0_2_0&highlighted_blocks=13496_88650491_0_2_0&matching_block_id=13496_88650491_0_2_0&sr_pri_blocks=13496_88650491_0_2_0__12600&from_sustainable_property_sr=1&from=searchresults#hotelTmpl'
              target='_blank'
            >
              The Celtic Manor ResortOpens in new window
            </A>
            <br />
            <br />
            6/{' '}
            <A
              href='https://www.booking.com/hotel/gb/the-old-barn-inn.en-gb.html?label=New_English_EN_GBIE_5496343105-o3H*rANRilZd5LRixj8tfwS217287031174%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&sid=37fb4949beb2dac35bfceec474471364&aid=318615&ucfs=1&arphpl=1&checkin=2024-06-23&checkout=2024-06-24&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=15&hapos=15&sr_order=distance_from_search&srpvid=ccc4919e32bf0a71&srepoch=1705437794&all_sr_blocks=4696901_361073783_0_1_0&highlighted_blocks=4696901_361073783_0_1_0&matching_block_id=4696901_361073783_0_1_0&sr_pri_blocks=4696901_361073783_0_1_0__8910&from=searchresults#hotelTmpl'
              target='_blank'
            >
              Budget HotelThe Old Barn InnOpens in new window
            </A>
          </div>
        </div>
      </section>
      <Sponsors />
      <Footer />
    </div>
  );
};

export default LandingPage;

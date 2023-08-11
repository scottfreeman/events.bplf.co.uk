import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import { Header } from './sections/Header';
import { Main } from './sections/Main';
import { Footer } from './sections/Footer';
import { Hotel } from './sections/Hotel';
import { Registration } from './sections/Registration';
import { Schedule } from './sections/Schedule';
import { Sponsors } from './sections/Sponsors';

const Worlds = () => {
  return (
    <div className='bg-white text-black'>
      <NextSeo
        title='IPL Tested World Powerlifting Championships 2023'
        description='IPL Tested World Powerlifting Championships in Coventry, UK on 18th to 22nd October, 2023. Hosted by British Powerlifting Federation.'
      />
      <Head>
        <title>IPL Tested World Powerlifting Championships 2023 | 18th - 22nd October 2023 | Coventry, UK</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Main />
      <Schedule />
      <Registration />
      <Hotel />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Worlds;

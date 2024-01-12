import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Hotel } from './components/Hotel';
import { Registration } from './components/Registration';
import { Schedule } from './components/Schedule';
import { Sponsors } from './components/Sponsors';

const Worlds = () => {
  return (
    <div className='bg-white text-black'>
      <NextSeo
        title='BPF BRITISH CHAMPIONSHIPS 2024'
        description='BPF BRITISH CHAMPIONSHIPS in Coventry, UK on 17th, 18th, 19th May. Hosted by British Powerlifting Federation.'
      />
      <Head>
        <title>BPF BRITISH CHAMPIONSHIPS 2024 | 17 - 19 May 2024 | Coventry, UK</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Main />
      <Registration />
      <Schedule />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Worlds;

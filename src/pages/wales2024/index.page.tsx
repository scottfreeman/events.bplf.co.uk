import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Registration } from './components/Registration';
import { Sponsors } from './components/Sponsors';
import { Schedule } from './components/Schedule';

const LandingPage = () => {
  return (
    <div className='bg-white text-black'>
      <NextSeo
        title='WPU World Pro Cup 2024 & 100% Strict Curl Championships'
        description='WPU World Pro Cup 2024 & 100% Strict Curl Championships on 28th & 29th June 2024. Hosted by the British Powerlifting Federation.'
      />
      <Head>
        <title>WPU World Pro Cup 2024 & 100% Strict Curl Championships | 29th & 30th June 2024 | Wales, UK</title>
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

export default LandingPage;

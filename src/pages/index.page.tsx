import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Events | British Powerlifting Federation</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='text-white flex flex-col h-screen items-center justify-center align-middle from-gray-950 to-gray-700 bg-gradient-to-tl'>
        <div className='text-4xl md:text-6xl -mt-10'>
          <Link href='https://bplf.co.uk/events'>bplf.co.uk/events</Link>
        </div>
      </main>
    </>
  );
}

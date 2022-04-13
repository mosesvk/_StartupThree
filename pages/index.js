import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>_StartupThree</title>
        <meta name='description' content='UI/UX by Moses Kaumatule' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Navbar />
      </main>
    </div>
  );
}

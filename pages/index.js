import Head from 'next/head';
import Navbar from '../components/Navbar';
import CTA from '../containers/CTA';
import Features from '../containers/Features';
import Hero from '../containers/Hero';
import Testimonials from '../containers/Testimonials';

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
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
}

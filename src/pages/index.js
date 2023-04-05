import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Banner from '@/components/Banner/Banner';
import AboutSection from '@/components/AboutSection/AboutSection';
import ServicesSection from '@/components/servicessection/ServicesSection';
import Mission from '@/components/mission/Mission';
import Appointment from '@/components/bookAppointment/Appointment';
import Subscribe from '@/components/subscribe/Subscribe';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Study Abroad</title>
        <meta name="description" content="Study Abroad" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <AboutSection />
      <Mission />
      <ServicesSection />
      {/* <Appointment /> */}
      <Subscribe />
    </>
  );
}

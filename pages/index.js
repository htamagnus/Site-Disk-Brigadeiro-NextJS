import CardsBrigadeiros from '@/src/components/CardsBrigadeiros/CardsBrigadeiros'
import Texto from '@/src/components/Texto/Texto'
import Head from 'next/head'
import Header from '../src/components/Header/Header'
import { useEffect } from "react";
import dynamic from 'next/dynamic'
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from '@/src/components/About/About';
const Banner = dynamic(() => import ("@/src/components/Banner/Banner"));

export default function Home() {
  useEffect(() => {
    AOS.init({
    offset: 80,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate'
    });
    }, [])
    
  return (
    <>
      <Head>
        <title>Disk Brigadeiro | Doces Gourmets</title>
        <meta name="description" content="Conheça nosso catálogo de doces goumerts, os melhores de Torres - RS"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/ogimage.png"/>
        <meta property="og:description" content="Conheça nosso catálogo de doces goumerts, os melhores de Torres - RS" />
      </Head>
      <Header/>
      <Banner />
      <CardsBrigadeiros />
      <About />
    </>
  )
}

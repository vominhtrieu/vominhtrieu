import Head from 'next/head'
import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import MainNavbar from '../components/MainNavbar';
import About from '../components/About';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [scrollAmount, setScrollAmount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    window.addEventListener('wheel', (event) => {
      const scrollAmount = parseInt(event.deltaY);
      setScrollAmount((amount) => amount + scrollAmount);
    });
  }, []);

  useEffect(() => {
    if (scrollAmount > 300) {
      setCurrentPage((page) => {
        if (page === 5) {
          return 5;
        } else {
          return page + 1;
        }
      })
      setScrollAmount(0);
    } else if (scrollAmount < -300) {
      setCurrentPage((page) => {
        if (page === 0) {
          return 0;
        } else {
          return page - 1;
        }
      });
      setScrollAmount(0);
    }
  }, [scrollAmount])

  let page = null;
  switch (currentPage) {
    case 0:
      page = <Banner />;
      break;
    case 1:
      page = <About />
      break;
    default:
      page = <Banner />;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Võ Minh Triều | A simple web dev</title>
        <meta name="description" content="My name is Vo Minh Trieu. I'm a full-stack web developer. I'm on the way to be better and better everyday." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainNavbar />
      {page}
    </div>
  )
}

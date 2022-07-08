import { useRef } from "react";
import Head from 'next/head';
import Banner from '../components/Banner';
import MainNavbar from '../components/MainNavbar';
import About from '../components/About';
import Education from "../components/Education"
import styles from '../styles/Home.module.css';
import Skills from "../components/Skills";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  const pageContainer = useRef(null);
  return (
    <div className={styles.container}>
      <Head>
        <title>Võ Minh Triều | A simple web dev</title>
        <meta name="description" content="My name is Vo Minh Trieu. I'm a full-stack web developer. I'm on the way to be better and better everyday." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainNavbar pageContainer={pageContainer} />

      <div className={styles.pageContainer} ref={pageContainer}>
        <Banner />
        <Education />
        <Experiences />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

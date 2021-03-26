import styles from '../styles/Home.module.css'
import { Fragment } from "react";
import HomeContent from '../components/home-page/home-content';
import { getAllSections } from '../lib/sections-util.js';



function Home() {
  return (
    <Fragment>
      <Hero />
      <HomeContent sections={props.sections} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allSections = getAllSections();
  return {
    props: {
      sections: allSections
    }
  }
}

export default Home

import React, { useEffect } from "react";

import Description from "./Description/Description";
import MisionVision from "./Mision&Vision/MisionVision";

import { motion as m } from "framer-motion";

import styles from "./aboutUs.module.css";
import CounterUp from "./CounterUpSection/CounterUp";
import Values from "./Values/Values";

const AboutUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <m.section
      className={styles.aboutUs}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <Description />
      <MisionVision />
      <CounterUp />
      <Values />
    </m.section>
  );
};

export default AboutUs;

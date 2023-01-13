import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import styles from "./counterUp.module.css";

const CounterUp = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className={styles.counterUp}>
        <div className={styles.item}>
          <h2>
            {counterOn && (
              <CountUp start={0} end={40} duration={1} delay={0} />
            )}
            +
          </h2>
          <p>Años de experiencia</p>
        </div>
        <div className={styles.item}>
          <h2>
            {counterOn && (
              <CountUp start={0} end={50} duration={1} delay={0} />
            )}
            +
          </h2>
          <p>Productos de calidad</p>
        </div>
        <div className={styles.item}>
          <h2>
            {counterOn && (
              <CountUp start={0} end={100} duration={1} delay={0} />
            )}
            +
          </h2>
          <p>Presentaciones diferentes</p>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default CounterUp;

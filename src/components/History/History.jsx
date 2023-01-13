import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './history.module.css';

const History = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={styles.history}>
      <div className={styles.timeline}>
        <NavLink to='/historia/1985' className={styles.dot} >
          <p className={styles.right}>1985</p>
        </NavLink>
        <NavLink to='/historia/1999' className={styles.dot}>
          <p  className={styles.left}>1999</p>
        </NavLink>
        <NavLink to='/historia/2002' className={styles.dot}>
          <p className={styles.right}>2002</p>
        </NavLink>
        <NavLink to='/historia/2013' className={styles.dot}>
          <p className={styles.left}>2013</p>
        </NavLink>
        <NavLink to='/historia/2020' className={styles.dot}>
          <p className={styles.right}>2020</p>
        </NavLink>
        <NavLink to='/historia/2023' className={styles.dot}>
          <p className={styles.left}>2023</p>
        </NavLink>
      </div>
    </section>
  )
}

export default History;
import React from "react";
import { Link } from 'react-router-dom';
 
import styles from "./bestSellers.module.css";
import adhesivoAcuoso from '../../../assets/Adhesivo Acuoso.png';
import hotmelt from '../../../assets/hotmelt.png';
import pur31 from '../../../assets/pur31.png';
import colaFria from '../../../assets/Cola Fria.png';
import sellanteAcrilicos from '../../../assets/Sellante Acrilicos.png';


const BestSellers = () => {
  return (
    <section className={styles.bestSellers}>
      <p className={styles.title}>
        Nuestros productos <span>más vendidos</span>
      </p>
      <div className={styles.products}>
        <Link to="/">
            <img src={adhesivoAcuoso} alt="AdhesivoAcuoso" />
        </Link>
        <Link to="/">
            <img src={hotmelt} alt="hotmelt" />
        </Link>
        <Link to="/">
            <img src={pur31} alt="pur31" /> 
        </Link>
        <Link to="/">
            <img src={colaFria} alt="colaFria" />
        </Link>
        <Link to="/" className={styles.lastChild}>
            <img src={sellanteAcrilicos} alt="sellanteAcrilicos" />
        </Link>
      </div>
    </section>
  );
};

export default BestSellers;

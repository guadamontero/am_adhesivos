import React from "react";
import Icon from "../../Global/Icon";
import {
  faTruck,
  faDolly,
  faHandHoldingHeart,
  faAward,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./services.module.css";

const Services = () => {
  return (
    <section className={styles.container}>
      <p className={styles.title}>
        Nuestros <span>servicios</span>
      </p>
      <div className={styles.services}>
        <div className={styles.service}>
          <Icon css={styles.iconService} icon={faTruck} />
          <p className={styles.serviceTitle}>Servicio de transporte</p>
        </div>
        <div className={styles.service}>
          <Icon css={styles.iconService} icon={faDolly} />
          <p className={styles.serviceTitle}>Armado de pedidos</p>
        </div>
        <div className={styles.service}>
          <Icon css={styles.iconService} icon={faHandHoldingHeart} />
          <p className={styles.serviceTitle}>Lo hacemos con amor</p>
        </div>
        <div className={styles.service}>
          <Icon css={styles.iconService} icon={faAward} />
          <p className={styles.serviceTitle}>La mejor calidad</p>
        </div>
        <div className={styles.service}>
          <Icon css={styles.iconService} icon={faScrewdriverWrench} />
          <p className={styles.serviceTitle}>Asesoramiento técnico</p>
        </div>
      </div>
    </section>
  );
};

export default Services;

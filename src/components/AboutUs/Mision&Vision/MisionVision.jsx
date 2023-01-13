import React from 'react';

import styles from './misionVision.module.css';
import heart from '../../../assets/VectorCorazon.png';
import eye from '../../../assets/VectorOjo.png';

const MisionVision = () => {
  return (
    <section className={styles.misionVisionContainer}>
        <div className={styles.mision}>
            <img src={heart} alt="VectorCorazon" />
            <h3>Nuestra <span>misión</span></h3>
            <p>Nosotros de AM Adhesivos, existimos para crear valor a través de soluciones diferenciadas, promoviendo el desarrollo sostenible y facilitando la vida de los clientes.</p>
        </div>
        <div className={styles.vision}>
            <img src={eye} alt="VectorOjo" />
            <h3>Nuestra <span>visión</span></h3>
            <p>Ser referencia en soluciones diferenciadas, sustentabilidad y sólida reputación.</p>
        </div>
    </section>
  )
}

export default MisionVision;
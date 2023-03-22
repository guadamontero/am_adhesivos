import React from "react";
import Icon from "../../Global/Icon";
import {
  faAward,
  faLightbulb,
  faHandHoldingDollar,
  faLayerGroup,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import styles from "./whyUs.module.css";

const WhyUs = () => {
  return (
    <section className={styles.whyUs}>
      <p className={styles.title}>
        ¿Por qué <span>AM adhesivos</span>?
      </p>
      <p className={styles.subtitle}>
        Nos importan nuestros clientes, por eso queremos brindarte
        un servicio de calidad.
      </p>
      <div className={styles.features}>
        <div className={styles.featureContainer}>
          <div className={styles.iconContainer}>
            <Icon css={styles.iconFeature} icon={faAward} />
          </div>
          <p className={styles.featureTitle}>Calidad</p>
          <p className={styles.featureSubtitle}>
            Nuestros especialistas en químicos avalan la calidad de nuestros
            productos, nuestros clientes la reafirman.
          </p>
        </div>
        <div className={styles.featureContainer}>
          <div className={styles.iconContainer}>
            <Icon css={styles.iconFeature} icon={faLightbulb} />
          </div>
          <p className={styles.featureTitle}>Innovación</p>
          <p className={styles.featureSubtitle}>
            Estamos enfocados en innovar cada día en nuestros procesos para
            ofrecerte el producto que necesitas.
          </p>
        </div>
        <div className={styles.featureContainer}>
          <div className={styles.iconContainer}>
            <Icon css={styles.iconFeature} icon={faFaceSmile} />
          </div>
          <p className={styles.featureTitle}>El mejor servicio</p>
          <p className={styles.featureSubtitle}>
            No te hacemos esperar porque sabemos que tus proyectos también nos
            importan.
          </p>
        </div>
        <div className={styles.featureContainer}>
          <div className={styles.iconContainer}>
            <Icon css={styles.iconFeature} icon={faHandHoldingDollar} />
          </div>
          <p className={styles.featureTitle}>Precio justo</p>
          <p className={styles.featureSubtitle}>
            Somos la opción ideal para el mejor costo beneficio de tus
            proyectos.
          </p>
        </div>
        <div className={styles.featureContainer}>
          <div className={styles.iconContainer}>
            <Icon css={styles.iconFeature} icon={faLayerGroup} />
          </div>
          <p className={styles.featureTitle}>Variedad</p>
          <p className={styles.featureSubtitle}>
            ¿Para qué buscar en diversas marcas? En AM adhesivos somos
            especialistas en pegamentos, siliconas, selladores, cantos y
            herrajes.
          </p>
        </div>
        <div className={styles.featureContainer}>
          <div className={styles.iconContainer}>
            <Icon css={styles.iconFeature} icon={faFlask} />
          </div>
          <p className={styles.featureTitle}>Experiencia</p>
          <p className={styles.featureSubtitle}>
            AM Adhesivos es representante de Artecola Química, empresa
            multinacional con más de 70 años de experiencia. Sabemos lo que
            hacemos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

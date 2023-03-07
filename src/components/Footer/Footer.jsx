import React from "react";
import Icon from "../Global/Icon";
import SocialNetworks from "../Header/menuDrawer/SocialNetworks";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          <span>© AM Adhesivos</span>
          <p>Todos los derechos reservados</p>
        </div>
        <div className={styles.location}>
          <Icon icon={faLocationDot} />
          <div className={styles.address}>
            <span>Córdoba, Argentina</span>
            <p>Córdoba Capital, Zona Norte</p>
            <p>Barrio Argüello CP: 5147</p>
          </div>
        </div>
        <div className={styles.socialNetworks}>
          <SocialNetworks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

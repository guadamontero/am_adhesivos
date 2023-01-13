import React, { useEffect } from "react";
import Icon from "../Global/Icon";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faClock } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styles from "./contact.module.css";

import { motion as m } from "framer-motion";

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <m.section
      className={styles.contact}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className={styles.contactLeft}>
        <div className={styles.titleSubtitle}>
          <h2 className={styles.titleLeft}>
            Envíanos un <span>mensaje</span>
          </h2>
          <p>Ponte en contacto con nosotros llenando el siguiente formulario</p>
        </div>
        <form
          className={styles.form}
          id="contactForm"
          action="/"
          method="POST"
          // onSubmit={handleSubmitLogin}
        >
          <div className={styles.top}>
            <div className={styles.groupForm}>
              <label className="labelForm">Nombre y Apellido</label>
              <input
                type="text"
                id="nameAndLastName"
                name="nameAndLastName"
                // onBlur={handleBlur}
                // onChange={handleChange}
                // value={form.emailLogin}
                // className={errors.emailLogin && styles.errorInput}
              />
            </div>
            <div className={styles.groupForm}>
              <label className="labelForm">Email</label>
              <input
                type="mail"
                id="email"
                name="email"
                // onBlur={handleBlur}
                // onChange={handleChange}
                // value={form.emailLogin}
                // className={errors.emailLogin && styles.errorInput}
              />
            </div>
            <div className={styles.groupForm}>
              <label className="labelForm">Teléfono</label>
              <input
                type="text"
                id="phone"
                name="phone"
                // onBlur={handleBlur}
                // onChange={handleChange}
                // value={form.emailLogin}
                // className={errors.emailLogin && styles.errorInput}
              />
            </div>
            <div className={styles.groupForm}>
              <label className="labelForm">Ciudad</label>
              <input
                type="text"
                id="city"
                name="city"
                // onBlur={handleBlur}
                // onChange={handleChange}
                // value={form.emailLogin}
                // className={errors.emailLogin && styles.errorInput}
              />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.groupForm}>
              <label className="labelForm">Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                // onBlur={handleBlur}
                // onChange={handleChange}
                // value={form.emailLogin}
                // className={errors.emailLogin && styles.errorInput}
              />
            </div>
            <div className={styles.groupForm}>
              <label className="labelForm">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                cols="50"
                className={styles.textarea}
                // placeholder={text.selectedOption}
                // onChange={(e) => {
                //   setText({
                //     selectedOption: e.target.value,
                //   });
                // }}
              />
            </div>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className={styles.contactRight}>
        <div className={styles.contactUs}>
          <h2 className={styles.titleRight}>Contáctanos</h2>
          <p>
            <Icon css={styles.icon} icon={faEnvelope} />
            montero12horacio@gmail.com
          </p>
          <p>
            <Icon css={styles.icon} icon={faPhone} />
            +5493515186464
          </p>
          <p>
            <Icon css={styles.icon} icon={faWhatsapp} />
            +5493515186464
          </p>
        </div>
        <div className={styles.schedule}>
          <h2 className={styles.titleRight}>Horario de atención</h2>
          <p>
            <Icon css={styles.icon} icon={faClock} />
            Lunes a Viernes de 8hs a 17hs
          </p>
        </div>
      </div>
    </m.section>
  );
};

export default Contact;

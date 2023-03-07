import React, { useEffect, useRef } from "react";
import Icon from "../Global/Icon";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faClock } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styles from "./contact.module.css";
import { motion as m } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendEmail = (e) => {
    const form = document.getElementById("form");
    emailjs.sendForm(
      "service_ed1uggj",
      "template_0c40an1",
      form,
      "8y_n9KZ5BhCza8GXw"
    );
    Swal.fire("¡Mensaje enviado!", "Gracias por contactarnos", "success");
    reset();
  };

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
          onSubmit={handleSubmit(sendEmail)}
          id="form"
        >
          <div className={styles.top}>
            <div className={styles.groupForm}>
              <label className="labelForm">Nombre y Apellido</label>
              <input
                type="text"
                name="user_name"
                {...register("user_name", { required: true })}
              />
              {errors.user_name && (
                <span className={styles.errorInput}>
                  Este campo debe ser completado
                </span>
              )}
            </div>
            <div className={styles.groupForm}>
              <label className="labelForm">Email</label>
              <input
                type="mail"
                name="user_email"
                {...register("user_email", { required: true })}
              />
              {errors.user_email && (
                <span className={styles.errorInput}>
                  Este campo debe ser completado
                </span>
              )}
            </div>
            <div className={styles.groupForm}>
              <label className="labelForm">Teléfono</label>
              <input
                type="text"
                name="user_phone"
                {...register("user_phone", { required: true })}
              />
              {errors.user_phone && (
                <span className={styles.errorInput}>
                  Este campo debe ser completado
                </span>
              )}
            </div>
            <div className={styles.groupForm}>
              <label className="labelForm">Ciudad</label>
              <input
                type="text"
                name="user_city"
                {...register("user_city", { required: true })}
              />
              {errors.user_city && (
                <span className={styles.errorInput}>
                  Este campo debe ser completado
                </span>
              )}
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.groupForm}>
              <label className="labelForm">Asunto</label>
              <input
                type="text"
                name="user_subject"
                {...register("user_subject", { required: true })}
              />
              {errors.user_subject && (
                <span className={styles.errorInput}>
                  Este campo debe ser completado
                </span>
              )}
            </div>
            <div className={styles.groupForm}>
              <label className="labelForm">Mensaje</label>
              <textarea
                name="user_message"
                rows="10"
                cols="50"
                className={styles.textarea}
                {...register("user_message", { required: true })}
              />
              {errors.user_message && (
                <span className={styles.errorInput}>
                  Este campo debe ser completado
                </span>
              )}
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

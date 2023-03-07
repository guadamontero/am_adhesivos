import React from "react";
import Icon from "../Global/Icon";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import styles from "./socialmediashare.module.css";
import useModal from "../../hooks/useModal";
import Modal from "../Global/modal/Modal"
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";

const SocialMediaShare = ({ url, category, title }) => {
  const [isOpenModalSocialMedia, openModalSocialMedia, closeModalSocialMedia] = useModal(false);
  const text = `Mira este producto! \nNombre: ${title} \nCategoria: ${category} \nUrl:`;
  return (
    <>
      <button onClick={openModalSocialMedia} className={styles.button}>
        <Icon css={styles.icon} icon={faShareNodes} />
      </button>
      <Modal
        className={styles.modal}
        isOpen={isOpenModalSocialMedia}
        closeModal={closeModalSocialMedia}
      >
        <div className={styles.modalContainer}>
          <div className={styles.textContainer}>
            <h4>¿Te gustó?</h4>
            <span>Compartilo en tus redes:</span>
          </div>
          <div className={styles.socialMediaContainer}>
            <FacebookShareButton url={url} hashtag="#AMAdhesivos">
              <FacebookIcon logofillcolor="white" round={true} size={50} />
            </FacebookShareButton>
            <WhatsappShareButton title={text} url={url}>
              <WhatsappIcon logofillcolor="white" round={true} size={50} />
            </WhatsappShareButton>
            <TwitterShareButton
              title="Mira este producto!"
              url={url}
              hashtags={["AMAdhesivos", "Resistente", "Confiable"]}
            >
              <TwitterIcon logofillcolor="white" round={true} size={50} />
            </TwitterShareButton>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SocialMediaShare;

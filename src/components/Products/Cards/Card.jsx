import React from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.css";

const Card = ({ id, img, category, name, description }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardLeft}>
        <img src={img} className={styles.cardImg} alt="cardImg" />
      </div>
      <div className={styles.cardRight}>
        <div className={styles.cardHeader}>
          <h3>{category.toUpperCase()}</h3>
          <h2>{name}</h2>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.cardButtonContainer}>
          <Link className={styles.cardButton} to={`/producto/${id}`}> Ver más </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

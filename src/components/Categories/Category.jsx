import React from "react";
import styles from "./category.module.css";

const Category = ({ category, img }) => {
  return (
    <div className={styles.category}>
      <img className={styles.img} src={img} alt="imgCategory" />
      <h3>{category}</h3>
    </div>
  );
};

export default Category;

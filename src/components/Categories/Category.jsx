import React from "react";
import styles from "./category.module.css";

const Category = ({ img }) => {
  return (
    <div className={styles.category}>
      <img className={styles.img} src={img} alt="imgCategory" />
    </div>
  );
};

export default Category;

import React from "react";
import styles from "./description.module.css";
import socios from "../../../assets/socios.jpg";

const Description = () => {
  return (
    <div className={styles.container}>
      <img src={socios} alt="socios" />
      <div className={styles.textContainer}>
        <div className={styles.textTitle}>
          <h3 className={styles.title}>AM ADHESIVOS</h3>
        </div>
        <div className={styles.textContent}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur magni laudantium sunt modi? Beatae eveniet reprehenderit tempore dolore nemo voluptas quo velit minima similique quibusdam temporibus cumque, sed iusto fugit omnis exercitationem. Qui doloribus excepturi accusamus obcaecati nobis eos exercitationem quidem eaque aliquam necessitatibus consequuntur sequi, modi asperiores totam nisi debitis, minus at quaerat dolor nesciunt? Esse, ex obcaecati saepe, eum corporis itaque beatae ipsa praesentium dolorem laudantium dolores deserunt commodi facilis perspiciatis at dolorum debitis minus officia ad soluta vero, impedit architecto? Doloribus nobis incidunt culpa perspiciatis, vero ipsum quaerat quidem non, dolorem accusamus distinctio velit voluptates nisi enim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;

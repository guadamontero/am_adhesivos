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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            ipsum deleniti ducimus ratione ab accusamus distinctio animi, vel
            delectus deserunt iste! Tempora quos maxime distinctio sit
            reiciendis ipsum est earum quisquam! Alias placeat aspernatur
            pariatur tempora ad ipsa neque a quos. Excepturi maiores quisquam
            error molestiae aliquid iure quae ab soluta sint architecto, esse
            illum, quos laboriosam ex cumque hic voluptate perferendis, dolores
            enim expedita. Similique laborum facere, aliquam nemo dolorem eum
            blanditiis ipsam maxime unde eaque obcaecati officiis doloribus
            placeat magnam est saepe quisquam! Sapiente voluptatibus, ad,
            perspiciatis eius nobis quas saepe error odit atque earum officiis
            voluptates sit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;

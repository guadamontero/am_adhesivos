import React from "react";
import PRODUCTOS from "../../data/products.json";
import styles from "./random.module.css";
import { Link } from "react-router-dom";

const Random = () => {
  const mostrarProductosAleatorios = () => {
    const productosAleatorios = [];
    while (productosAleatorios.length < 3) {
      const randomIndex = Math.floor(Math.random() * PRODUCTOS.length);
      if (!productosAleatorios.includes(PRODUCTOS[randomIndex])) {
        productosAleatorios.push(PRODUCTOS[randomIndex]);
      }
    }
    return productosAleatorios;
  };

  const handleVerMasClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.randomContainer}>
      <p className={styles.randomTitle}>
        Te puede <span>interesar</span>
      </p>
      <div className={styles.randomCardsContainer}>
        {mostrarProductosAleatorios().map((producto) => (
          <div key={producto.id} className={styles.randomCard}>
            <div className={styles.imgContainer}>
              <img src={producto.img} alt="randomCardImg" />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.cardHeader}>
                <h4>{producto.category.toUpperCase()}</h4>
                <h3>{producto.name}</h3>
              </div>
              <Link
                to={`/producto/${producto.id}`}
                onClick={handleVerMasClick}
                className={styles.cardButton}
              >
                Ver más
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Random;

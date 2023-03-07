import React, { useContext } from "react";

import Card from "./Card";
import FilterContext from "../../../context/FilterContext";
import Icon from "../../Global/Icon";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./cards.module.css";

const Cards = ({ data }) => {
  const { valuesForm, selectedCategory, filterHandlers } =
    useContext(FilterContext);

  return (
    <div className={styles.container}>
      <h2 className={styles.filterTitle}>
        {selectedCategory.name === null && valuesForm.product === null
          ? "Nuestros productos"
          : "Resultado de tu búsqueda"}
      </h2>
      <div className={styles.filterContainer}>
        {selectedCategory.name === null ? (
          ""
        ) : (
          <span className={styles.filterItem}>
            {selectedCategory.name}
            <Icon
              css={styles.iconDelete}
              icon={faXmark}
              event={filterHandlers.handleClearCategory}
            />
          </span>
        )}
        {valuesForm.product === null ||
        valuesForm.product === "¿Que producto desea buscar?" ? (
          ""
        ) : (
          <span className={styles.filterItem}>
            {valuesForm.product}
            <Icon
              css={styles.iconDelete}
              icon={faXmark}
              event={filterHandlers.handleClearProduct}
            />
          </span>
        )}
      </div>
      <div className={styles.cardsContainer}>
        {typeof currentItems === "string"
          ? "No se encontraron resultados"
          : data &&
            data.map((producto) => (
              <div key={producto.id}>
                <Card
                  id={producto.id}
                  name={producto.name}
                  img={producto.img}
                  category={producto.category}
                  description={producto.description}
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Cards;

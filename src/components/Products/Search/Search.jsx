import React, { useState, useContext } from "react";
import FilterContext from "../../../context/FilterContext";

//Styles
import styles from "./search.module.css";

//Components
import Dropdown from "../Dropdown/Dropdown";
import Button from "../../Global/Button";

const Search = () => {
  const [idProduct, setIdProduct] = useState(null);

  const {
    setValuesForm,
    setSelectedCategory,
    selectedProduct,
    setSelectedProduct,
  } = useContext(FilterContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValuesForm(() => {
      return {
        product: selectedProduct,
        id: idProduct,
      };
    });
    setSelectedCategory(() => {
      return {
        name: null,
        id: null,
      };
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.buscador}>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className={styles.content}
        >
          <div className={styles.select}>
            <Dropdown
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              setIdProduct={setIdProduct}
            />
          </div>
          <div className={styles.buttonContainer}>
            <Button css={styles.button} text="Buscar" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;

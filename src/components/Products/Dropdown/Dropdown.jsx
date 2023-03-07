import React, { useState } from "react";
import styles from "./dropdown.module.css";
import PRODUCTOS from "../../../data/products.json";
import Icon from "../../Global/Icon";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ selectedProduct, setSelectedProduct, setIdProduct }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdownBtn}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <Icon icon={faMagnifyingGlass} />
        {selectedProduct}
      </div>
      {isActive && (
        <div className={styles.dropdownContent}>
          {PRODUCTOS.map((producto) => (
            <div
              key={producto.id}
              onClick={() => {
                setSelectedProduct(producto.name);
                setIdProduct(producto.id);
                setIsActive(false);
              }}
              className={styles.dropdownItem}
            >
              <div className={styles.dropdownItemCity}>
                <p>{producto.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

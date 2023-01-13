import React from "react";
import styles from "./products.module.css";
import { FilterContextProvider } from "../../context/FilterContext";

import { motion as m } from "framer-motion";

const Products = () => {
  return (
    <FilterContextProvider>
      <m.section
        className={styles.products}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        
      </m.section>
    </FilterContextProvider>
  );
};

export default Products;

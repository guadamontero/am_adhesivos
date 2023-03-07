import React from "react";

import { FilterContextProvider } from "../../context/FilterContext";

import styles from "./products.module.css";
import { motion as m } from "framer-motion";
import Search from "./Search/Search";
import Categories from "../Categories/Categories";

import CATEGORIES from "../../data/categories.json";
import Pagination from "./Pagination";

const Products = () => {
  return (
    <FilterContextProvider>
      <m.section
        className={styles.producs}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Search />
        <div className={styles.container}>
          <h2 className={styles.title}>
            Busca por <span>tipo</span> de producto
          </h2>
          <Categories items={CATEGORIES} />
          <Pagination itemsPerPage={4}/>
        </div>
      </m.section>
    </FilterContextProvider>
  );
};

export default Products;

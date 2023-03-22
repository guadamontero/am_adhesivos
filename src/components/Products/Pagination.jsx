import React, { useContext, useState, useEffect } from "react";
import styles from "./pagination.module.css";
import FilterContext from "../../context/FilterContext";

import ReactPaginate from "react-paginate";
import Icon from "../Global/Icon";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Cards from "./Cards/Cards";

import PRODUCTOS from "../../data/products.json";

const Pagination = ({ itemsPerPage }) => {
  const { valuesForm, selectedCategory } = useContext(FilterContext);
  const category = selectedCategory.name && selectedCategory.name;
  const product = valuesForm.id && valuesForm.id;

  const [allItems, setAllItems] = useState(PRODUCTOS);
  const [items, setItems] = useState(PRODUCTOS);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (Array.isArray(items)) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(items && items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items && items.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, items]);

  useEffect(() => {
    // Filter items based on selected category and product
    let filteredItems = allItems;
    if (category) {
      filteredItems = filteredItems.filter((item) => item.category === category);
    }
    if (product) {
      filteredItems = filteredItems.filter((item) => item.id === product);
    }
    // Shuffle the items array
    // filteredItems.sort(() => Math.random() - 0.5);
    setItems(filteredItems);
  }, [allItems, category, product]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };


  return (
    <>
      <Cards data={currentItems} />
      <ReactPaginate
        previousLabel={<Icon css={styles.iconPagination} icon={faArrowLeft} />}
        nextLabel={<Icon css={styles.iconPagination} icon={faArrowRight} />}
        breakLabel={"..."}
        pageCount={pageCount}
        pageRangeDisplayed={1}
        marginPagesDisplayed={2}
        containerClassName={styles.containerPagination}
        pageClassName={`${styles.itemPagination} ${styles.pageNumber}`}
        pageLinkClassName={styles.itemLinkPagination}
        activeClassName={styles.activePagination}
        onPageChange={handlePageClick}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
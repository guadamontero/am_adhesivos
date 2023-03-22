import React, { useContext } from "react";
import FilterContext from "../../context/FilterContext";
import Category from "./Category";
import styles from "./categories.module.css";

const Categories = ({ items }) => {
    const { setSelectedCategory, setValuesForm } = useContext(FilterContext);

  const handleClick = (name, id) => {
    setSelectedCategory({
      name: name,
      id: id
    });
    setValuesForm({
      product: null,
      id: null
    })
  }
  
  return (
    <div className={styles.containerCategories}>
      {items &&
        items.map((category) => (
          <div
            onClick={() => handleClick(category.name, category.id)}
            key={category.id}
            className={styles.category}
          >
            <Category
              img={category.img}
            />
          </div>
        ))}
    </div>
  );
};

export default Categories;

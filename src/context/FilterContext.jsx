import { createContext, useState } from "react";

const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(
    "¿Que producto desear buscar?"
  );

  const [selectedCategory, setSelectedCategory] = useState({
    name: null,
  });

  const [valuesForm, setValuesForm] = useState({
    product: null,
  });

  const filterHandlers = {
    handleClearCategory: () => {
      setSelectedCategory({
        name: null,
        id: null,
      });
    },
    handleClearProduct: () => {
      setValuesForm({
        product: null,
        id: null,
      });
      setSelectedProduct("¿Que producto desear buscar?");
    },
  };

  return (
    <FilterContext.Provider
      value={{
        valuesForm,
        setValuesForm,
        selectedCategory,
        setSelectedCategory,
        filterHandlers,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContextProvider };
export default FilterContext;

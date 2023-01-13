import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Home/Home";
import Products from "../Products/Products";
import AboutUs from "../AboutUs/AboutUs";
import History1985 from "../History/Years/History1985";
import History1999 from "../History/Years/History1999";
import History2002 from "../History/Years/History2002";
import History2013 from "../History/Years/History2013";
import History2020 from "../History/Years/History2020";
import History2023 from "../History/Years/History2023";
import Contact from "../Contact/Contact";

import styles from "./generalTemplate.module.css";

import { AnimatePresence } from "framer-motion";

const GeneralTemplate = () => {
  return (
    <div className={styles.body}>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />}></Route>
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/historia/1985" element={<History1985 />} />
          <Route path="/historia/1999" element={<History1999 />} />
          <Route path="/historia/2002" element={<History2002 />} />
          <Route path="/historia/2013" element={<History2013 />} />
          <Route path="/historia/2020" element={<History2020 />} />
          <Route path="/historia/2023" element={<History2023 />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default GeneralTemplate;

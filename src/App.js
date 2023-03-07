import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import GeneralTemplate from "./components/GeneralTemplate/GeneralTemplate";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <GeneralTemplate />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

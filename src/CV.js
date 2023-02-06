import React from "react";
import Info from "./CVCard/Info";
import About from "./CVCard/About";
import Interests from "./CVCard/Interests";
import Footer from "./CVCard/Footer";

export default function CV() {
  return (
    <div className="divCV">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Stays from "../../components/Stays/Stays";

import "./styles.css"

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <Stays/>
      <Footer/>
    </div>
  );
};

export default HomePage;

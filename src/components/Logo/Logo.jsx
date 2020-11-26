import React from "react";

import logo from "../../assets/img/logo.png";
import "./styles.css";

const Logo = () => {
  return (
    <div className="col s5">
      <img className="logo" src={logo} alt="" />
    </div>
  );
};

export default Logo;

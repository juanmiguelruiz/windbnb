import React from "react";
import ExtendedMenu from "./ExtendedMenu";

import "./styles.css";

const Nav = () => {
  function displayExtendedMenu() {
    document.getElementsByClassName("menu")[0].style.display = "inline";
    document.getElementsByClassName("stays")[0].style.opacity = "0.3";
  }

  return (
    <div className="col s12 l5">
      <ExtendedMenu />
      <div onClick={displayExtendedMenu} className="row nav">
        <div className="col s6">
          <input
            className="nav__input"
            type="text"
            placeholder="Location"
            value="Helsinki, Finland"
          />
        </div>
        <div className="col s4">
          <input className="nav__input" type="text" placeholder="Add guests" />
        </div>
        <div className="col s2">
          <button>
            <i className="material-icons nav__icon">search</i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Nav;

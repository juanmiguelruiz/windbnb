import React from "react";

import "./styles.css";

const Nav = () => {
  return (
    <div className="col s12">
      <div className="row nav">
        <div className="col s6">
          <input type="text" placeholder="Location" value="Helsinki, Findland"/>
        </div>
        <div className="col s4">
          <input type="text" placeholder="Add guests"/>
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

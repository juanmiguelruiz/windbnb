import React from "react";

import stays from "../../assets/data/stays.json";

const ExtendedMenu = () => {
  var locations = [];

  function location() {
    let allCities = [];
    stays.map((i) => allCities.push(i.city + ", " + i.country));
    locations = allCities.filter(function (a, b) {
      return allCities.indexOf(a) === b;
    });
  }

  function hideExtendedMenu() {
    document.getElementsByClassName("menu")[0].style.display = "none";
    document.getElementsByClassName("stays")[0].style.opacity = "1";
    document.getElementsByClassName("nav__input-menu")[0].style.borderRight =
      "none";
  }

  return (
    <div className="menu" onLoad={location()}>
      <div className="row">
        <div className="col s12">
          <span className="left">Edit your search</span>
          <span className="right">
            <i onClick={hideExtendedMenu} className="material-icons">
              close
            </i>
          </span>
          <div className="nav">
            <div className="row">
              <div className="col s12">
                <input
                  className="nav__input-menu"
                  type="text"
                  placeholder="Location"
                  value="Helsinki, Finland"
                />

                <input
                  className="nav__input-menu"
                  type="text"
                  placeholder="Add guests"
                />
              </div>
            </div>
          </div>
          <div className="nav__location-list">
            {locations.map((i) => (
              <div className="col s12 nav__location-item">
                <i className="material-icons nav__location-extended left">
                  location_on
                </i>
                <span className="nav__location">{i}</span>
              </div>
            ))}
          </div>
          <div className="nav__button-container">
            <a href className="nav__button-extended">
              <i className="material-icons nav__search-extended left">search</i>
              Search
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtendedMenu;

import React, { useEffect } from "react";
import stays from "../../assets/data/stays.json";

const ExtendedMenu = () => {
  function hideExtendedMenu() {
    document.getElementsByClassName("menu")[0].style.display = "none";
    document.getElementsByClassName("stays")[0].style.opacity = "1";
    document.getElementsByClassName("input-menu")[0].style.borderRight="none";

  }

  var locations = [];

  function location() {
    let allCities = [];
    stays.map((i) => allCities.push(i.city + ", " + i.country));
    locations = allCities.filter(function (a, b) {
      return allCities.indexOf(a) === b;
    });
  }

  useEffect(() => {
    console.log(locations[0]);
  });

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
                className="input-menu"
                  type="text"
                  placeholder="Location"
                  value="Helsinki, Findland"
                  
                />

                <input                 className="input-menu"
 type="text" placeholder="Add guests" />
              </div>
            </div>
          </div>
          <div className="location-list">
              {locations.map((i) => (
                <div className="col s12 location-item">
                  <i className="material-icons location-extended left">
                    location_on
                  </i>
                  <span className="location">{i}</span>
                </div>
              ))}
          </div>
          <div className="button-container">
            <a href className="button-extended">
              <i className="material-icons search-extended left">search</i>
              Search
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtendedMenu;

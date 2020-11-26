import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const Stay = ({ image, super_host, description, rating, especs }) => {
  return (
    <div className="stay">
      <div className="col s12 l4">
        <img className="stay__img" src={image} alt="" />
        <div className="col s12 stay__text">
          {super_host === true ? (
            <span className="stay__super-host">Super Host</span>
          ) : (
            ""
          )}
          <span className="stay__especs">{especs}</span>

          <span className="stay__rating right">
            {" "}
            <span>★</span> {rating}
          </span>
          <p className="stay__description">{description}</p>
        </div>
      </div>
    </div>
  );
};

Stay.propTypes = {
  image: PropTypes.string,
  super_host: PropTypes.bool,
  description: PropTypes.string,
  especs: PropTypes.string,
  rating: PropTypes.string,
};

export default Stay;

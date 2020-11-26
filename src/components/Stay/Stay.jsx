import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const Stay = ({image, super_host, description, rating}) => {
  
  return (
    <div className="row stay">
        <img className="stay__img" src={image} alt=""/>
    <div className="s12">
      {
       super_host===true? <span className="stay__super-host">Super Host</span>:""

      }
      
        <span className="stay__description">{description}</span>
        <span className="stay__rating">  <span>★</span> {rating}</span>
    </div>
        
    </div>
  );
};

Stay.propTypes = {
    image: PropTypes.string,
    super_host: PropTypes.bool,
    description: PropTypes.string,
    rating: PropTypes.string

}

export default Stay;

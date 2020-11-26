import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const Info = ({ location, stays }) => {
  return (
    <div className="col s12">
      <p className="stays__info__location left">Stays in {location}</p>
      <p className="stays__info__stays right">{stays}</p>
    </div>
  );
};

Info.propTypes = {
  location: PropTypes.string,
  stays: PropTypes.string,
};

export default Info;

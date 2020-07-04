import React from "react";
import PropTypes from "prop-types";

const mystyle = {
  width: "100%"
};

const Img = ({ src = "", alt = "", classStyle = "" }) => (
  <img src={src} alt={alt} className={classStyle} style={mystyle} />
);

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  classStyle: PropTypes.string
};

export default Img;

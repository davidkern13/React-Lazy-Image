import React from "react";
import PropTypes from "prop-types";

const Img = ({ src = "", alt = "", classStyle = "", loading, customStyle }) => (
  <img src={src} alt={alt} className={classStyle} style={customStyle} loading={loading}/>
);

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  classStyle: PropTypes.string,
  loading: PropTypes.string
};


Img.defaultProps = {
  src: "",
  alt: "",
  classStyle: "",
  loading: ""
};

export default Img;

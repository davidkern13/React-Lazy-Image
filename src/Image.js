import React from "react";
import PropTypes from "prop-types";


 
const Img = React.forwardRef(({ src = "", alt = "", classStyle = "", loading, customStyle},  ref) => {

  if(!Object.keys(ref).length){
    return <img src={src} alt={alt} className={classStyle} style={customStyle} loading={loading} ref={ref}/> ;
  }else{
    return <img src={src} alt={alt} className={classStyle} style={customStyle} loading={loading}/>;
  }

});

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

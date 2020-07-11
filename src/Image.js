import React from "react";
import PropTypes from "prop-types";
 
const Img = React.forwardRef(({ src = "", alt = "", classStyle = "", loading, customStyle, noscript}, ref) => {

  let refExist = !Object.keys(ref).length ? ref : null;

  return (
    <>
      <img 
        src={src} 
        alt={alt} 
        className={classStyle} 
        style={customStyle} 
        loading={loading} 
        ref={refExist}
      /> 

      {/* For SEO and JavaScript unavailable */}

      {noscript &&
        <noscript>
          <img
            src={src}
            alt={alt} 
            className={classStyle}
          />
        </noscript>
      }
      
    </>
  );


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

export default React.memo(Img);

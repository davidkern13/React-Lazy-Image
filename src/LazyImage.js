import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

import Img from "./Image";
import { imageOrientation } from "./utils";

const LazyImage = (props) => {

  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const DECODING = "async";
  const LOADING = "lazy";

  let {
    src,
    unloadedSrc,
    alt,
    childRef,
    beforeLoad,
    afterLoad,
    orientation,
    errorLoad,
    delayTime = 300,
    decoding = DECODING,
    loading = LOADING,
    noscript,
    customStyle,
    srcStyleClass,
    unloadedSrcStyleClass
  } = props;

  useEffect(() => {
    if (beforeLoad) {
      beforeLoad();
    }
    
    let img = new Image();
    img.decoding = decoding || DECODING;

    img.onload = () => {
      setLoaded(true);

      if (afterLoad) {
        afterLoad();
      }

      if (orientation) {
        orientation(checkLandscape(img));
      }
    };
    img.onerror = () => {
      setError(true);
      if (errorLoad) {
        errorLoad();
      }
    };

    setTimeout(function() {
      img.src = src;
    }, delayTime);

  }, [afterLoad, beforeLoad, decoding, delayTime, errorLoad, orientation, src]);

  const checkLandscape = img => {
    return imageOrientation(img);
  };

  const getCustomStyle = style => {
    return style ? style : null;
  };

  const refitem = el => {
    childRef(el);
  };

  return (
    <>
      {error || !loaded ? (
        <Img 
          src={unloadedSrc}
          loading={loading || LOADING}
          alt={alt}
          classStyle={unloadedSrcStyleClass}
          customStyle={getCustomStyle(customStyle)}
          ref={refitem || null}
          noscript={noscript}
        />
      ) : (
        <Img 
          src={src}
          loading={loading || LOADING}
          alt={alt}
          classStyle={srcStyleClass}
          customStyle={getCustomStyle(customStyle)}
          ref={refitem || null}
          noscript={noscript}
        />
      )}
    </>
  );
}

LazyImage.propTypes = {
  src: PropTypes.string,
  unloadedSrc: PropTypes.string,
  alt: PropTypes.string,
  childRef: PropTypes.func,
  beforeLoad: PropTypes.func,
  afterLoad: PropTypes.func,
  orientation: PropTypes.func,
  errorLoad: PropTypes.func,
  delayTime: PropTypes.number,
  decoding: PropTypes.string,
  loading: PropTypes.string,
  srcStyle: PropTypes.string,
  unloadedSrcStyle: PropTypes.string
};

LazyImage.defaultProps = {
  src: "",
  unloadedSrc: "",
  alt: "",
  childRef: () => null,
  afterLoad: () => ({}),
  beforeLoad: () => ({}),
  orientation: () => ({}),
  errorLoad: () => ({}),
  delayTime: 300,
  decoding: "",
  loading: "",
  srcStyle: "",
  unloadedSrcStyle: ""
};

export default React.memo(LazyImage);

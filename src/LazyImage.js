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
    };
    img.onerror = () => {
      setError(true);
      if (errorLoad) {
        errorLoad();
      }
    };

    if (orientation) {
      orientation(checkLandscape(img));
    }
    timeOut(img, delayTime);
  }, []);

  const timeOut = (img, delayTime) => {
    setTimeout(function() {
      img.src = src;
    }, delayTime);
  };

  const checkLandscape = img => {
    return imageOrientation(img);
  };

  const getCustomStyle = style => {
    return style ? style : null;
  };

  return (
    <>
      {error || !loaded ? (
        <Img src={unloadedSrc} loading={loading || LOADING} alt={alt} classStyle={unloadedSrcStyleClass} customStyle={getCustomStyle(customStyle)} ref={childRef || null}/>
      ) : (
        <Img src={src} loading={loading || LOADING} alt={alt} classStyle={srcStyleClass} customStyle={getCustomStyle(customStyle)} ref={childRef || null}/>
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
  childRef: () => ({}),
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

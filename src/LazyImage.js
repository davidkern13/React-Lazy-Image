import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

import Img from "./Image";
import { imageOrientation } from "./utils";

function LazyImage(props) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  let {
    src,
    unloadedSrc,
    alt,
    beforeLoad,
    afterLoad,
    orientation,
    errorLoad,
    delayTime = 300
  } = props;

  useEffect(() => {
    if (beforeLoad) {
      beforeLoad();
    }

    let img = new Image();
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
  });

  const timeOut = (img, delayTime) => {
    setTimeout(function() {
      img.src = src;
    }, delayTime);
  };

  const checkLandscape = img => {
    return imageOrientation(img);
  };

  return (
    <div className={"image-wrap"}>
      {error || !loaded ? (
        <Img src={unloadedSrc} alt={alt} classStyle={"error"} />
      ) : (
        <Img src={src} alt={alt} classStyle={checkLandscape(src)} />
      )}
    </div>
  );
}

LazyImage.propTypes = {
  src: PropTypes.string,
  unloadedSrc: PropTypes.string,
  alt: PropTypes.string,
  beforeLoad: PropTypes.func,
  afterLoad: PropTypes.func,
  orientation: PropTypes.func,
  errorLoad: PropTypes.func,
  delayTime: PropTypes.number
};

LazyImage.defaultProps = {
  src: "",
  unloadedSrc: "",
  alt: "",
  afterLoad: () => ({}),
  beforeLoad: () => ({}),
  orientation: () => ({}),
  errorLoad: () => ({}),
  delayTime: 300
};

export default LazyImage;

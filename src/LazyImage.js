import React, { useEffect, memo } from "react";
import { PropTypes } from "prop-types";

import gsap from 'gsap';

import Img from "./Image";
import useObserver from "./useObserver";
import { imageOrientation } from "./utils";

const DECODING = "async";
const LOADING = "lazy";
const ERROR_LOAD = "💡 Error occurred while loading image";

const LazyImage = (props) => {

  let {
    placeholder,
    src,
    alt,
    beforeLoad,
    afterLoad,
    orientation,
    errorLoad,
    delayTime,
    decoding,
    loading,
    noscript,
    customStyle,
    styleClass
  } = props;

  let debounce = {debounce: delayTime || 300}

  const [setElement, lazyImageRef] = useObserver(debounce);
  
  useEffect(() => {
    checkImageRef(lazyImageRef);
    return () => { checkImageRef(lazyImageRef) }
  });

  const checkImageRef = img => {
    if(!img) return;
    beforeLoad();
    img.decoding = decoding || DECODING;
    img.onload = (e) => loadHandle(e);
    img.onerror = (e) => errorHandle(e);
  };

  const loadHandle = e => {
    let { path : [img] } = e;
    if(img.src && img.src !== placeholder) {
      gsapAnimation(img);
      if (afterLoad) afterLoad(img);
      if (orientation) orientation(checkLandscape(img));
    }     
  };

  const errorHandle = e => {
    let { path : [img] } = e;
    if(img) img.src = placeholder;
    if (errorLoad) errorLoad(ERROR_LOAD);
  };

  const checkLandscape = img => imageOrientation(img);
  const getCustomStyle = style => style ? style : null;
  const gsapAnimation = (img) => gsap.from(img, 0.7,{css:{opacity:0}, ease : 'easeInOut'});
  
  return (
    <>
        <Img 
          src={placeholder}
          placeholder={src}
          loading={loading || LOADING}
          alt={alt}
          classStyle={styleClass}
          customStyle={getCustomStyle(customStyle)}
          ref={setElement}
          noscript={noscript}
        />
    </>
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
  delayTime: PropTypes.number,
  decoding: PropTypes.string,
  loading: PropTypes.string,
  styleClass: PropTypes.string
};

LazyImage.defaultProps = {
  src: "",
  unloadedSrc: "",
  alt: "",
  afterLoad: () => ({}),
  beforeLoad: () => ({}),
  orientation: () => ({}),
  errorLoad: () => ({}),
  delayTime: 300,
  decoding: "",
  loading: "",
  styleClass: ""
};

export default memo(LazyImage);

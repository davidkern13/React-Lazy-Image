import React, { useEffect, useState } from "react";

import Img from "./Image";
import { imageOrientation } from "./utils";

export default function LazyImage(props) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  let { src, unloadedSrc, alt } = props;

  useEffect(() => {
    let img = new Image();
    img.onload = () => {
      setLoaded(true);
    };
    img.onerror = () => {
      setError(true);
    };
    img.src = props.src;
  });

  const checkLandscape = src => {
    return imageOrientation(props.src);
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

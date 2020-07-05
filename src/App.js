import React, { useCallback } from "react";
import "./styles.css";

import LazyImage from "./LazyImage";

const Image =
  "https://i.ibb.co/DtbLVMN/Purple-and-White-Math-Tutor-Bordered-Linked-In-Banner.png";

const ErrorImage = "https://i.ibb.co/5Ykzw98/Lighter-District.png";

const BrokenImage = "https://i.ibb.co/5Ykzw98/Ligh-District.png";

export default function App() {
  const mystyle = {
    width: "100%"
  };

  const afterLoadImage = () => {
    console.log("afterLoadImage");
  };

  const beforeLoadImage = () => {
    console.log("beforeLoadImage");
  };

  const orientationImage = e => {
    console.log("orientationImage", e);
  };

  const errorImage = e => {
    console.log("error", e);
  };

  return (
    <div className="App" style={mystyle}>
      <h1>React Lazy Image Example</h1>

      <p>Lazy image</p>
      <LazyImage
        unloadedSrc={ErrorImage}
        src={Image}
        alt={`react`}
        beforeLoad={beforeLoadImage}
        afterLoad={afterLoadImage}
        orientation={orientationImage}
        errorLoad={errorImage}
        delayTime={500}
      />

      <p>Broken image</p>
      <LazyImage unloadedSrc={ErrorImage} src={BrokenImage} alt={`react`} />
    </div>
  );
}

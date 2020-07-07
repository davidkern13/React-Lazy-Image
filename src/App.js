import React, { useState, useEffect } from "react";
import axios from 'axios';

import LazyImage from "./LazyImage";

import './style.css';

import { ErrorImage } from './utils';

const App = () => {

  let [images, setImages] = useState(0);

  useEffect(() => {
      apiRequest();
    return () => {
      apiRequest();
    };

  }, []);

  const apiRequest = () =>{
    axios
      .get("https://jsonplaceholder.typicode.com/photos/")
      .then(response => setImages(response.data.slice(0, 8)));
  }

  const customStyle = {
    width: "100%"
  };

  const afterLoadImage = () => {
    // your code
  };

  const beforeLoadImage = () => {
    // your code
  };

  const orientationImage = e => {
    // your code
  };

  const errorImage = e => {
    // your code
  };
 
  return (
    <div className="App">
      <ul id={'GridList'}>
        {
          Array.isArray(images) && images.map((image, idx) => {
            return (
              <li className={'grid-item'} key={idx}>
                <LazyImage
                  unloadedSrc={ErrorImage}
                  src={image.thumbnailUrl}
                  alt={`react`}
                  beforeLoad={beforeLoadImage}
                  afterLoad={afterLoadImage}
                  orientation={orientationImage}
                  errorLoad={errorImage}
                  delayTime={500}
                  decoding={"async"}
                  loading={"lazy"}
                  customStyle={customStyle}
                  srcStyle={"lazy-image"}
                  unloadedSrcStyle={"error-image"}
                />
              </li>
              )
          })
        }
      </ul>
    </div>
  );
}

export default App;
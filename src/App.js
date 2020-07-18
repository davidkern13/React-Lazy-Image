import React, { useState, useEffect } from "react";
import axios from 'axios';

import LazyImage from "./LazyImage";

import './style.css';

import { ErrorImage } from './utils';

const App = () => {

  let [images, setImages] = useState(0);

  const customStyle = {
    width: "100%"
  };

  useEffect(() => {
      apiRequest();
    return () => {
      apiRequest();
    };
  }, []);

  const apiRequest = () =>{
    axios
      .get("https://picsum.photos/v2/list?page=13&limit=40")
      .then(response => setImages(response.data));
  }

  const afterLoadImage = element => {
    // your code
  };

  const beforeLoadImage = () => {
    // your code
  };

  const orientationImage = event => {
    // your code
  };

  const errorImage = event => {
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
                  placeholder={ErrorImage}
                  src={image.download_url}
                  alt={`react`}
                  beforeLoad={beforeLoadImage}
                  afterLoad={afterLoadImage}
                  orientation={orientationImage}
                  errorLoad={errorImage}
                  delayTime={300}
                  decoding={"async"}
                  loading={"lazy"}
                  noscript={true}
                  customStyle={customStyle}
                  styleClass={"lazy-image"}
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
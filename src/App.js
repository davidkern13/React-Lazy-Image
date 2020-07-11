import React, { useState, useEffect } from "react";
import axios from 'axios';
import gsap from 'gsap';

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
      .get("https://picsum.photos/v2/list?page=1&limit=20")
      .then(response => setImages(response.data));
  }

  const animationRef = (element) => {
    if(element?.src && element?.src !== ErrorImage){
      gsap.from(element, {
        duration:1,
        autoAlpha: 0,
        ease:'none',
        delay:0.3,
        webkitFilter:"blur(0.1)"
      })
    }
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
                  src={image.download_url}
                  alt={`react`}
                  childRef={animationRef} 
                  beforeLoad={beforeLoadImage}
                  afterLoad={afterLoadImage}
                  orientation={orientationImage}
                  errorLoad={errorImage}
                  delayTime={0}
                  decoding={"async"}
                  loading={"lazy"}
                  noscript={true}
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
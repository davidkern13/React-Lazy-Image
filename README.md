![](https://i.ibb.co/DtbLVMN/Purple-and-White-Math-Tutor-Bordered-Linked-In-Banner.png)

### Loading lazy image with control of the events and display replacement image is not visible or loaded and utils.

### Using [Live demo (code)](https://codesandbox.io/s/github/davidkern13/React-Lazy-Image) ⚡

### Check [Live action](https://react-lazy-image.netlify.app/) ⚡

<hr/>

### Features

- Includes one component what containing 2 props of images, ```src``` for image display and ```unloadedSrc``` if image is not visible or loaded.
- ```beforeLoad```, ```afterLoad```, ```orientation```, ```errorLoad```, ```animationRef``` events.
- custom style class names for ```srcStyle``` and ```unloadedSrcStyle``` props.

<hr/>

### :books: ```LazyImage``` usage

```
import React from 'react';
import LazyImage from "./LazyImage";

const image = 'image.png';
const errorImage = 'error-image.png';
  
const App = () => {

  const customStyle = {
    width: "50px"
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
    <div>
      <LazyImage
        unloadedSrc={errorImage}
        src={image}
        alt={`image`}
        beforeLoad={beforeLoadImage}
        afterLoad={afterLoadImage}
        orientation={orientationImage}
        errorLoad={errorImage}
        delayTime={500} // Default is 300 (ms)
        decoding={"async"}
        loading={"lazy"}
        customStyle={customStyle}
        srcStyle={"lazy-image"}
        unloadedSrcStyle={"error-image"}
      />
    </div>
  );
}

export default App;
```

#### Props

| Prop  | Type | Default | Description | Event |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| unloadedSrc  | String  |   | Image src to display when image is not visible or loaded. | |
| src  | String  |   | Image src to display.  | |
| alt  | String  |   |   | |
| beforeLoad  | Function  |   | The function is called immediately before the image is loaded. | |
| afterLoad  | Function  |   | The function is called immediately after the image is uploaded. | |
| orientation  | Function  |   | The function returns the orientation of the image.  | ```landscape```,```portrait```,```even``` |
| errorLoad  | Function  |   | The function returns an error when the image failed to load. | ```error``` |
| delayTime  | Number  | 300  | Delay to load image. | |
| decoding  | String  | "async"  | Name of the ```decoding``` props types to use ```sync```, ```async```, ```auto```. read the next line below  how to use them  | |
| loading  | String  | "lazy"  | Name of the ```loading``` props types to use ```lazy```, ```eager```. read the next line below  how to use them  | |
| customStyle  | Object  | null  | Props customStyle style passed to inline of image.  | |
| srcStyle  | String  |   | Custom ```classStyle``` of ```src``` image.  | |
| unloadedSrcStyle  | String  |   | Custom ```classStyle``` of ```unloadedSrc``` image.  | |

##### 📚 ```Check bellow how add Animation to LazyImage```

##### Using prop decoding

- ```sync```: Decode the image synchronously for atomic presentation with other content.
- ```async```: Decode the image asynchronously to reduce delay in presenting other content.
- ```auto```: Default mode, which indicates no preference for the decoding mode. The browser decides what is best for the user.

##### Using Prop loading

- ```lazy```: Tells the user agent to hold off on loading the image until the browser estimates that it will be needed imminently. For instance, if the user is scrolling through the document, a value of lazy will cause the image to only be loaded shortly before it will appear in the window's
- ```eager```: The default behavior, eager tells the browser to load the image as soon as the <img> element is processed.

<hr/>

### :zap: ```List of LazyImage with Animation``` usage

```
import React, { useState, useEffect } from "react";
import axios from 'axios';
import gsap from 'gsap'; // animation lib

import LazyImage from "./LazyImage";

const errorImage = 'error-image.png';

const App = () => {

  let [images, setImages] = useState(0);

  const customStyle = {
    width: "100%"
  };

  useEffect(() => { // component did mount
      apiRequest();
  }, []); 

  const apiRequest = () => {
    // your code to request and setImages
  }

  const animationRef = (element) => { 
    gsap.from(element, { // add animation to element ref
      duration: 1,
      autoAlpha: 0,
      ease: 'none',
      delay: 0.5,
      webkitFilter: "blur(0.1)"
    })
  };
 
  return (
    <div className="App">
      <ul>
        {
          Array.isArray(images) && images.map((image, idx) => {
            return (
              <li key={idx}>
                <LazyImage
                  unloadedSrc={ErrorImage}
                  src={image.thumbnailUrl}
                  alt={`react`}
                  childRef={animationRef} 
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
```

#### Props

| Prop  | Type | Default | Description | Event |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| animationRef  | Function  |  | The function is called when image use ```ref```. | element |

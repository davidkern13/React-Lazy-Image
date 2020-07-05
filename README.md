![](https://i.ibb.co/DtbLVMN/Purple-and-White-Math-Tutor-Bordered-Linked-In-Banner.png)

### Loading a lazy image with control of the events and display replacement image is not visible or loaded.

### [Live demo (code)](https://codesandbox.io/s/github/davidkern13/React-Lazy-Image)

### Features

- Includes one component what containing 2 props of images, ```src``` for image display and ```unloadedSrc``` if image is not visible or loaded.
- ```beforeLoad```, ```afterLoad```, ```orientation```, ```errorLoad``` events.
- custom style class names for ```srcStyle``` and ```unloadedSrcStyle``` props.

<hr/>

### React-Lazy-Image usage

```
import React from 'react';
import LazyImage from "./LazyImage";
 
const MyLazyImage = ({ image }) =>

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
        unloadedSrc={ErrorImage}
        src={Image}
        alt={`react`}
        beforeLoad={beforeLoadImage}
        afterLoad={afterLoadImage}
        orientation={orientationImage}
        errorLoad={errorImage}
        delayTime={500}
        decoding={"async"}
        loading={"lazy"}
        srcStyle={"lazy-image"}
        unloadedSrcStyle={"error-image"}
      />
    </div>
  );
}

export default MyLazyImage;
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
| decoding  | String  | "async"  | Name of the ```decoding``` props types to use ```sync```, ```async```, ```auto```  | |
| loading  | String  | "lazy"  | Name of the ```loading``` props types to use ```lazy```, ```eager```.  | |
| srcStyle  | String  |   | Custom ```classStyle``` of ```src``` image.  | |
| unloadedSrcStyle  | String  |   | Custom ```classStyle``` of ```unloadedSrc``` image.  | |

##### Using prop decoding

- ```sync```: Decode the image synchronously for atomic presentation with other content.
- ```async```: Decode the image asynchronously to reduce delay in presenting other content.
- ```auto```: Default mode, which indicates no preference for the decoding mode. The browser decides what is best for the user.

##### Using Prop loading

- ```lazy```: Tells the user agent to hold off on loading the image until the browser estimates that it will be needed imminently. For instance, if the user is scrolling through the document, a value of lazy will cause the image to only be loaded shortly before it will appear in the window's
- ```eager```: The default behavior, eager tells the browser to load the image as soon as the <img> element is processed.

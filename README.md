![](https://i.ibb.co/DtbLVMN/Purple-and-White-Math-Tutor-Bordered-Linked-In-Banner.png)

<p align="center">
 Loading a lazy image with control of the events and display replacement image is not visible or loaded.
</p>

### [Live demo (code)](https://codesandbox.io/s/github/davidkern13/React-Lazy-Image)

### Features

- Includes one component what containing 2 props of images, ```src``` for display and ```unloadedSrc``` if image is not visible or loaded.
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

Props

| Prop  | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| unloadedSrc  | String  |   | Image src to display when image is not visible or loaded. |
| src  | String  |   | Image src to display.  |
| alt  | String  |   |   |
| beforeLoad  | Function  |   | The function is called immediately before the image is loaded. |
| afterLoad  | Function  |   | The function is called immediately after the image is uploaded. |
| orientation  | Function  |   | The function returns the orientation of the image.  |
| errorLoad  | Function  |   | The function returns an error when the image failed to load. |
| delayTime  | Number  | 300  | Delay to load image. |
| decoding  | String  | "async"  |   |
| loading  | String  | "lazy"  |   |
| srcStyle  | String  |   | Css class of current image  |
| unloadedSrcStyle  | String  |   | Css class of current image  |

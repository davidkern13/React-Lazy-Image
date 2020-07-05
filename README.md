![](https://i.ibb.co/DtbLVMN/Purple-and-White-Math-Tutor-Bordered-Linked-In-Banner.png)

<p align="center">
Check the codesandbox example copy the code to your project and follow next steps to get result.
</p>



<hr/>

### React-Lazy-Image usage

[Live demo (code)](https://codesandbox.io/s/github/davidkern13/React-Lazy-Image)

```
import React from 'react';
import LazyImage from "./LazyImage";
 
const LazyImage = ({ image }) =>

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

export default LazyImage;
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

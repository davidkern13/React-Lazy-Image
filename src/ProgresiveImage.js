import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

import Img from "./Image";

const ProgresiveImage = (props) => {

  let {src, alt, placeholder, childRef = null} = props;

  const [startLoad, setStartLoad] = useState(false);

  useEffect(() => {
 
      if ( !("IntersectionObserver" in window) ||!("IntersectionObserverEntry" in window)) {
        setStartLoad(true);
      }

      var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

      if ("IntersectionObserver" in window) {
        // Create new observer object
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            // Loop through IntersectionObserverEntry objects
            

            entries.forEach(function(entry) {
        
                const { isIntersecting, intersectionRatio } = entry;

                const inView = isIntersecting !== undefined ? isIntersecting : intersectionRatio > 0;
    
                if (inView && !startLoad) {
                  let lazyImage = entry.target;
                  lazyImage.src = lazyImage.dataset.src;
                  lazyImage.classList.remove("lazy");
                  lazyImageObserver.unobserve(lazyImage);
                }
            
            });
        });
      
        // Loop through and observe each image
        lazyImages.forEach(function(lazyImage) {
          lazyImageObserver.observe(lazyImage);
        });
      }


  }, []);

  const refitem = el => {
      if(childRef){
        childRef(el);
      }
  };

  return (
    <>
        <Img 
          src={'https://i.ibb.co/5Ykzw98/Lighter-District.png'}
          placeholder={src}
          alt={alt}
          ref={refitem || null}
        />
    </>
  );
}

export default React.memo(ProgresiveImage);

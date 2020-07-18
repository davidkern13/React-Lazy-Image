import { useState, useEffect, useCallback, useRef } from "react";

const options = {
    root: null,
    threshold: 0,
};

const useObserver = props => {

    let {
        debounce
    } = props;

    const [startLoad, setStartLoad] = useState(false);
    const [element, setElement] = useState(false);

    useEffect(() => {
        if ("IntersectionObserver" in window) {
            if(element) observerRef.current.observe(element);
        }
    }, [element]);

    const callback = useCallback(([entry]) => {
        
        if ( !("IntersectionObserver" in window) ||!("IntersectionObserverEntry" in window)) {
            setStartLoad(true);
        }

        const { isIntersecting, intersectionRatio } = entry;
        const inView = isIntersecting !== undefined ? isIntersecting : intersectionRatio > 0;

        if (inView && !startLoad) {     
            let lazyImage = entry.target;
            setTimeout(function() {
                lazyImage.decode().then(() => {
                    if(lazyImage.complete){
                        lazyImage.src = lazyImage.dataset.src;  
                        lazyImage.removeAttribute('data-src');        
                        observerRef.current.unobserve(lazyImage);
                    }
                })
                .catch((encodingError) => {
                    console.log(encodingError);
                })
            }, debounce);
        }else{
         
        }
    }, [debounce, startLoad]);

    const observerRef = useRef(new IntersectionObserver(callback, options));
    

    return [setElement, element];
}

export default useObserver;
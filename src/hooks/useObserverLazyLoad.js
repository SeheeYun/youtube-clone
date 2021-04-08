import { useEffect, useRef, useState } from 'react';

function useObserverLazyLoad() {
  const [isloaded, setIsLoaded] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    let io;
    if (itemRef) {
      io = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            return;
          }
          setIsLoaded(true);
          io.unobserve(itemRef.current);
        },
        { threshold: 0 }
      );

      io.observe(itemRef.current);
    }

    return () => io && io.disconnect(itemRef);
  }, [itemRef]);

  return { isloaded, itemRef };
}

export default useObserverLazyLoad;

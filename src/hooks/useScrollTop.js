import { useEffect, useState } from 'react';

const useScrollTop = (targetRef, rootMargin) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      },
    );
    if (targetRef?.current) {
      observer.observe(targetRef.current);
    }
  }, [rootMargin, targetRef]);

  return isIntersecting;
};

export default useScrollTop;

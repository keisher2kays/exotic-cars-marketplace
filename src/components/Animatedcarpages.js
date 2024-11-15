import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    // Smooth scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return null;
};

export default ScrollToTop;
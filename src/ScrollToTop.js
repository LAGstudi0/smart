// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Increase the delay to ensure that the main page layout has fully rendered
    setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const header = document.querySelector('header');
          const headerHeight = header ? header.offsetHeight : 0;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 200); // Adjust delay as needed (200ms is a good starting point)
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

import { useEffect } from 'react';

export const useScrollLiquid = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const liquidElements = document.querySelectorAll('.liquid-scroll');
      
      liquidElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        htmlElement.style.transform = `translateY(${yPos}px) scale(${1 + scrolled * 0.0001})`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export default useScrollLiquid;

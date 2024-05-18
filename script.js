"use strict";


/*--------------------Fade-In---------------*/
document.addEventListener('DOMContentLoaded', () => {
  const gridItems = document.querySelectorAll('.fade-in');
  const offset = 150;

  const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
          rect.left >= 0 &&
          rect.bottom >= 0 &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  };

  const handleScroll = () => {
      gridItems.forEach((item) => {
          if (isInViewport(item)) {
              item.classList.add('fade-in--visible');
          }
      });
  };

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);

  // Initial check
  handleScroll();
});

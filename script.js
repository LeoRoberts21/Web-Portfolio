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
              item.classList.add('fade-in-visible');
          }
      });
  };

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);

  // Initial check
  handleScroll();
});


// PROJECT SCROLL VIDEO

document.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.querySelector('.video-container');
  if (!videoContainer) return; // Stop execution if the element doesn't exist

  const video = videoContainer.querySelector('video');
  if (!video) return;

  const isInViewport = (element, offset = 0) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= -offset && 
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleScroll = () => {
    if (isInViewport(videoContainer, 700)) {
      video.play().catch(error => console.error("Video play failed:", error));
    } else {
      video.pause();
    }
  };

  window.addEventListener('scroll', handleScroll);
});

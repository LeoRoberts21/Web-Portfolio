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



// // hero gif 

// // List of image URLs for each frame in the animation
// const frames = [
// "hero-gif/ocr.webp",
// "hero-gif/frame-2.webp",
// "hero-gif/cg.webp",
// "hero-gif/az.webp",
// "hero-gif/frame-5.webp",
// "hero-gif/frame-6.webp",
// "hero-gif/frame-7.webp",
// "hero-gif/n-5.webp",
// "hero-gif/frame-10.webp",
// "hero-gif/n-6.webp",
// "hero-gif/n-7.webp",
// "hero-gif/frame-16.webp",
// "hero-gif/frame-14.webp",
// "hero-gif/frame-15.webp",
// "hero-gif/kind.webp",
// "hero-gif/frame-17.webp",
// "hero-gif/frame-18.webp",
// "hero-gif/frame-20.webp",
// "hero-gif/ocr.webp",
//   ];

  
//   // Preload images
//   let loadedFrames = 0;
//   const totalFrames = frames.length;
  
//   frames.forEach((src) => {
//     const img = new Image();
//     img.src = src;
//     img.onload = () => {
//       loadedFrames += 1;
//       // When all frames are loaded, start the animation
//       if (loadedFrames === totalFrames) {
//         document.getElementById("hero-gif").classList.add("start-animation");
//       }
//     };
//   });
  


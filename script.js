"use strict";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

<<<<<<< HEAD
// Theme application
(function() {
  const savedTheme = localStorage.getItem('portfolioTheme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  
  document.documentElement.classList.add('gsap-loaded');
  
  function updateWorkButtonForMobile() {
    const workLink = document.querySelector('.work-link');
    if (!workLink) return;
    
    if (window.innerWidth <= 639 && window.innerWidth >= 320) {
      workLink.href = '#footer';
    } else {
      workLink.href = '#project-grid';
    }
  }
  
  updateWorkButtonForMobile();
  window.addEventListener('resize', updateWorkButtonForMobile);
  
  // Hero animations
  function initHeroAnimation() {
    const heroElements = {
      h1: document.querySelector('.hero h1'),
      leadText: document.querySelector('.hero .lead-text'),
      buttons: document.querySelector('.double-btns'),
      banner: document.querySelector('.banner')
    };
    
    
    const heroTimeline = gsap.timeline({
      onComplete: () => {
        document.body.setAttribute('data-hero-animated', 'true');
        if (heroElements.h1) heroElements.h1.classList.add('gsap-visible');
        if (heroElements.leadText) heroElements.leadText.classList.add('gsap-visible');
        if (heroElements.buttons) heroElements.buttons.classList.add('gsap-visible');
        if (heroElements.banner) heroElements.banner.classList.add('gsap-visible');
      }
    });
    
    heroTimeline
      .to(heroElements.h1, {
        duration: 0.5,
        y: 0,
        opacity: 1,
        ease: "power2.out"
      })
      .to(heroElements.leadText, {
        duration: 0.4,
        y: 0,
        opacity: 1,
        ease: "power2.out"
      }, "-=0.2")
      .to(heroElements.buttons, {
        duration: 0.4,
        y: 0,
        opacity: 1,
        ease: "power2.out"
      }, "-=0.1")
      .to(heroElements.banner, {
        duration: 0.4,
        scale: 1,
        opacity: 1,
        ease: "power2.out"
      }, "-=0.1");
  }
  
  initHeroAnimation();

  // Scroll animations
  if (document.body.id !== 'p-body') {
    gsap.utils.toArray('.fade-in').forEach((element, index) => {
      gsap.set(element, {
        y: 50,
        opacity: 0
      });
    
    gsap.to(element, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        invalidateOnRefresh: true,
        onRefresh: () => {
          if (!element.hasAttribute('data-fade-animated')) {
            gsap.set(element, {
              y: 50,
              opacity: 0
            });
          }
        },
        onComplete: () => {
          element.setAttribute('data-fade-animated', 'true');
        }
      }
    });
  });
  }
  if (document.body.id === 'p-body') {
    gsap.utils.toArray('.fade-in').forEach((element, index) => {
      gsap.to(element, {
=======
/* ==========================================================================
   GSAP ANIMATIONS INITIALIZATION
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  /* ==========================================================================
     HERO INTRO ANIMATION
     ========================================================================== */
  
  // Hero section intro animation with snappier timing
  const heroTimeline = gsap.timeline();
  
  // Animate hero elements
  heroTimeline
    .from('.hero h1', {
      duration: 0.5,
      y: 20,
      opacity: 0,
      ease: "power2.out"
    })
    .from('.hero .lead-text', {
      duration: 0.4,
      y: 15,
      opacity: 0,
      ease: "power2.out"
    }, "-=0.2")
    .from('.double-btns', {
      duration: 0.4,
      y: 15,
      opacity: 0,
      ease: "power2.out"
    }, "-=0.1")
    .from('.banner .img-1, .banner .img-2, .banner .img-3, .banner .img-4, .banner .img-5, .banner .img-6, .banner .img-7, .banner .img-8, .banner .img-9, .banner .img-10, .banner .img-11, .banner .img-12, .banner .img-13', {
      duration: 0.5,
      scale: 0.9,
      opacity: 0,
      stagger: 0.05,
      ease: "back.out(1.4)"
    }, "-=0.1");

  /* ==========================================================================
     SCROLL REVEAL ANIMATIONS
     ========================================================================== */
  
  // Replace old fade-in animations with GSAP ScrollTrigger
  gsap.utils.toArray('.fade-in').forEach((element, index) => {
    gsap.fromTo(element, 
      {
        y: 50,
        opacity: 0
      },
      {
>>>>>>> 2f517c7195c39b5927ba8a066758483af70f6ca3
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
<<<<<<< HEAD
        delay: index * 0.1,
=======
>>>>>>> 2f517c7195c39b5927ba8a066758483af70f6ca3
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
<<<<<<< HEAD
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true
        }
      });
    });
  }

  // Project grid items
  gsap.utils.toArray('.grid-item').forEach((item, index) => {
    gsap.set(item, {
      y: 60,
      opacity: 0,
      scale: 0.95
    });
    
    gsap.to(item, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
      delay: index * 0.1,
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        once: false,
        invalidateOnRefresh: true,
        onRefresh: () => {
          if (!item.hasAttribute('data-animated')) {
            gsap.set(item, {
              y: 60,
              opacity: 0,
              scale: 0.95
            });
          }
        },
        onComplete: () => {
          item.setAttribute('data-animated', 'true');
        }
      }
    });
=======
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Project grid items with staggered reveal
  gsap.utils.toArray('.grid-item').forEach((item, index) => {
    gsap.fromTo(item,
      {
        y: 60,
        opacity: 0,
        scale: 0.95
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
>>>>>>> 2f517c7195c39b5927ba8a066758483af70f6ca3
  });

  // Project page sections
  gsap.utils.toArray('.p-row-container').forEach((container, index) => {
    gsap.fromTo(container,
      {
        y: 40,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

<<<<<<< HEAD
=======
  /* ==========================================================================
     HOVER EFFECTS WITH GSAP
     ========================================================================== */
  
  // Button hover effects (excluding talk-btn and linkedin-btn which have their own animations)
  gsap.utils.toArray('.button-secondary').forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        duration: 0.3,
        scale: 1.05,
        ease: "power2.out"
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        duration: 0.3,
        scale: 1,
        ease: "power2.out"
      });
    });
  });

  /* ==========================================================================
     LINKEDIN BUTTON HOVER EFFECTS
     ========================================================================== */
  
  // LinkedIn button hover effects (both hero and footer)
  gsap.utils.toArray('a[href*="linkedin.com"]').forEach(linkedinLink => {
    const linkedinBtn = linkedinLink.querySelector('.linkedin-btn');
    const linkedinText = linkedinLink.querySelector('span');
    
    if (!linkedinBtn) return;
    
    // Create GSAP timeline for smooth animations
    const hoverTimeline = gsap.timeline({ paused: true });
    const leaveTimeline = gsap.timeline({ paused: true });
    
    // Hover animation: scale icon and change text color
    hoverTimeline
      .to(linkedinBtn, {
        duration: 0.2,
        scale: 1.1,
        ease: "power2.out"
      }, 0)
      .to(linkedinText, {
        duration: 0.2,
        color: "#666666", // Grey color
        ease: "power2.out"
      }, 0);
    
    // Leave animation: reset everything
    leaveTimeline
      .to(linkedinBtn, {
        duration: 0.2,
        scale: 1,
        ease: "power2.out"
      }, 0)
      .to(linkedinText, {
        duration: 0.2,
        color: "", // Reset to original color
        ease: "power2.out"
      }, 0);
    
    // Text hover: animate both text and icon
    if (linkedinText) {
      linkedinText.addEventListener('mouseenter', () => {
        leaveTimeline.kill();
        hoverTimeline.restart();
      });
      
      linkedinText.addEventListener('mouseleave', () => {
        hoverTimeline.kill();
        leaveTimeline.restart();
      });
    }
    
    // Icon hover: animate only icon
    linkedinBtn.addEventListener('mouseenter', () => {
      leaveTimeline.kill();
      gsap.to(linkedinBtn, {
        duration: 0.2,
        scale: 1.1,
        ease: "power2.out"
      });
    });
    
    linkedinBtn.addEventListener('mouseleave', () => {
      gsap.to(linkedinBtn, {
        duration: 0.2,
        scale: 1,
        ease: "power2.out"
      });
    });
    
    // Link container hover: handle mouse leave for entire link
    linkedinLink.addEventListener('mouseleave', () => {
      hoverTimeline.kill();
      leaveTimeline.kill();
      gsap.to(linkedinBtn, {
        duration: 0.2,
        scale: 1,
        ease: "power2.out"
      });
      if (linkedinText) {
        gsap.to(linkedinText, {
          duration: 0.2,
          color: "",
          ease: "power2.out"
        });
      }
    });
  });

>>>>>>> 2f517c7195c39b5927ba8a066758483af70f6ca3
  // Project card hover effects
  gsap.utils.toArray('.grid-item').forEach(item => {
    const img = item.querySelector('.grid-item-img');
    const title = item.querySelector('.h3');
    const arrow = item.querySelector('.arrow-right');
    
    item.addEventListener('mouseenter', () => {
      gsap.to(img, {
        duration: 0.4,
        scale: 1.02,
        ease: "power2.out"
      });
      
      gsap.to(title, {
        duration: 0.3,
<<<<<<< HEAD
        x: window.innerWidth <= 640 ? 25 : 52,
=======
        x: 52,
>>>>>>> 2f517c7195c39b5927ba8a066758483af70f6ca3
        ease: "power2.out"
      });
      
      gsap.to(arrow, {
        duration: 0.3,
        opacity: 1,
        x: 0,
        ease: "power2.out"
      });
    });
    
    item.addEventListener('mouseleave', () => {
      gsap.to(img, {
        duration: 0.4,
        scale: 1,
        ease: "power2.out"
      });
      
      gsap.to(title, {
        duration: 0.3,
        x: 0,
        ease: "power2.out"
      });
      
      gsap.to(arrow, {
        duration: 0.3,
        opacity: 0,
        x: -24,
        ease: "power2.out"
      });
    });
  });

  // Logo slider hover effects
  gsap.utils.toArray('.slider-logo-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        duration: 0.3,
        scale: 1.05,
        ease: "power2.out"
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        duration: 0.3,
        scale: 1,
        ease: "power2.out"
      });
    });
  });

<<<<<<< HEAD
  // Dark mode toggle
  (function() {
    const savedTheme = localStorage.getItem('portfolioTheme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  })();

  function initFreshDarkMode() {
    const toggle = document.querySelector('.ios-toggle-input');
    const label = document.querySelector('.ios-toggle');
    const thumb = document.querySelector('.ios-toggle-thumb');

    if (!toggle || !label) {
      console.log('Dark mode toggle not found on this page');
      return;
    }

    const currentTheme = localStorage.getItem('portfolioTheme') || 'light';
    const isDark = currentTheme === 'dark';
    toggle.checked = isDark;
    label.setAttribute('aria-checked', isDark.toString());
    if (thumb) {
      thumb.style.transform = `translateX(${isDark ? 22 : 0}px)`;
      thumb.style.transition = 'transform 0.3s ease';
    }

    toggle.addEventListener('change', function() {
      const newTheme = this.checked ? 'dark' : 'light';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      document.body.classList.toggle('dark-mode', newTheme === 'dark');
      
      localStorage.setItem('portfolioTheme', newTheme);
      
      label.setAttribute('aria-checked', this.checked.toString());
      if (thumb) {
        thumb.style.transform = `translateX(${this.checked ? 22 : 0}px)`;
      }
    });

    label.addEventListener('keydown', function(e) {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggle.checked = !toggle.checked;
        toggle.dispatchEvent(new Event('change'));
      }
    });

    console.log('Fresh dark mode initialized successfully');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFreshDarkMode);
  } else {
    initFreshDarkMode();
  }

  if (document.body.id === 'p-body') {
    console.log('Project page detected - skipping GSAP animations');
    return;
  }

  // Video scroll
=======
  /* ==========================================================================
     DARK MODE TOGGLE ANIMATION
     ========================================================================== */
  
  const iosToggle = document.querySelector('.ios-toggle');
  const iosToggleInput = document.querySelector('.ios-toggle-input');
  const html = document.documentElement;
  
  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  
  // Initialize toggle state based on current theme
  const isDarkMode = savedTheme === 'dark';
  if (iosToggleInput) {
    iosToggleInput.checked = isDarkMode;
    iosToggle.setAttribute('aria-checked', isDarkMode.toString());
  }
  
  // Dark mode toggle with GSAP animations
  if (iosToggleInput) {
    iosToggleInput.addEventListener('change', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
      // Animate theme transition
      gsap.to(html, {
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
        }
      });
      
      // Animate toggle thumb with bounce
      const thumb = iosToggle.querySelector('.ios-toggle-thumb');
      gsap.to(thumb, {
        duration: 0.3,
        x: newTheme === 'dark' ? 22 : 0,
        ease: "back.out(1.7)"
      });
      
      // Update ARIA state
      iosToggle.setAttribute('aria-checked', (newTheme === 'dark').toString());
    });
  }
  
  // Keyboard accessibility
  if (iosToggle) {
    iosToggle.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        iosToggleInput.checked = !iosToggleInput.checked;
        iosToggleInput.dispatchEvent(new Event('change'));
      }
    });
  }

  /* ==========================================================================
     PROJECT SCROLL VIDEO
     ========================================================================== */
>>>>>>> 2f517c7195c39b5927ba8a066758483af70f6ca3
  
  const videoContainer = document.querySelector('.video-container');
  if (videoContainer) {
  const video = videoContainer.querySelector('video');
    if (video) {
      ScrollTrigger.create({
        trigger: videoContainer,
        start: "top 70%",
        end: "bottom 30%",
        onEnter: () => {
          gsap.to(video, {
            duration: 0.5,
            opacity: 1,
            scale: 1,
            onComplete: () => {
              video.play().catch(error => console.error("Video play failed:", error));
            }
          });
        },
        onLeave: () => {
          gsap.to(video, {
            duration: 0.3,
            opacity: 0.7,
            scale: 0.98,
            onComplete: () => {
              video.pause();
            }
          });
        },
        onEnterBack: () => {
          gsap.to(video, {
            duration: 0.5,
            opacity: 1,
            scale: 1,
            onComplete: () => {
      video.play().catch(error => console.error("Video play failed:", error));
            }
          });
        },
        onLeaveBack: () => {
          gsap.to(video, {
            duration: 0.3,
            opacity: 0.7,
            scale: 0.98,
            onComplete: () => {
      video.pause();
    }
          });
        }
});
    }
  }

<<<<<<< HEAD
  // Gradient interaction
=======
  /* ==========================================================================
     GRADIENT INTERACTION
     ========================================================================== */
>>>>>>> 2f517c7195c39b5927ba8a066758483af70f6ca3

  const gradientSections = document.querySelectorAll(".cowboy-gradient, .testimonial-gradient");

  gradientSections.forEach(section => {
    section.addEventListener("pointermove", (e) => {
      const { clientX: x, clientY: y } = e;
      const { top: t, left: l, width: w, height: h } = section.getBoundingClientRect();

<<<<<<< HEAD
      const posX = x - l - w / 2;
      const posY = y - t - h / 2;
=======
      // Calculate offsets relative to the center of the element
      const posX = x - l - w / 2;
      const posY = y - t - h / 2;
      
      // Animate the gradient position with GSAP
>>>>>>> 2f517c7195c39b5927ba8a066758483af70f6ca3
      gsap.to(section, {
        duration: 0.3,
        ease: "power2.out",
        '--posX': posX,
        '--posY': posY
    });
  });
});

<<<<<<< HEAD
  // Navbar scroll
=======
  /* ==========================================================================
     NAVBAR SCROLL EFFECT
     ========================================================================== */
>>>>>>> 2f517c7195c39b5927ba8a066758483af70f6ca3
  
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    ScrollTrigger.create({
      start: "top -100",
      end: 99999,
      toggleClass: {className: "scrolled", targets: navbar}
    });
  }

<<<<<<< HEAD
  // Banner animations
  function preloadBannerImages() {
    const bannerElements = gsap.utils.toArray('.banner .img-1, .banner .img-2, .banner .img-3, .banner .img-4, .banner .img-5, .banner .img-6, .banner .img-7, .banner .img-8, .banner .img-9, .banner .img-10, .banner .img-11, .banner .img-12, .banner .img-13');
    const imageUrls = [];
    
    bannerElements.forEach(element => {
      const style = window.getComputedStyle(element);
      const backgroundImage = style.backgroundImage;
      if (backgroundImage && backgroundImage !== 'none') {
        const url = backgroundImage.replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
        imageUrls.push(url);
      }
    });
    const preloadPromises = imageUrls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });
    });
    
    return Promise.all(preloadPromises);
  }
  
  function initBannerAnimations() {
    const bannerImages = gsap.utils.toArray('.banner .img-1, .banner .img-2, .banner .img-3, .banner .img-4, .banner .img-5, .banner .img-6, .banner .img-7, .banner .img-8, .banner .img-9, .banner .img-10, .banner .img-11, .banner .img-12, .banner .img-13');
    
    if (bannerImages.length === 0) return;
    
    gsap.set(bannerImages[0], { opacity: 1, zIndex: -10, visibility: 'visible' });
    gsap.set(bannerImages.slice(1), { opacity: 0, zIndex: -15, visibility: 'visible' });
    
    let currentIndex = 0;
    const cycleDuration = 3;
    const fadeDuration = 0.8;
    
    function crossfadeToNext() {
      const currentImage = bannerImages[currentIndex];
      const nextIndex = (currentIndex + 1) % bannerImages.length;
      const nextImage = bannerImages[nextIndex];
      
      const crossfadeTimeline = gsap.timeline();
      
      crossfadeTimeline
        .set(nextImage, { zIndex: -10 })
        .to(nextImage, {
          opacity: 1,
          duration: fadeDuration,
          ease: "power2.inOut"
        }, 0)
        .to(currentImage, {
          opacity: 0,
          duration: fadeDuration,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(currentImage, { zIndex: -15 });
          }
        }, 0);
      
      currentIndex = nextIndex;
      gsap.delayedCall(cycleDuration, crossfadeToNext);
    }
    
    gsap.delayedCall(cycleDuration, crossfadeToNext);
  }
  
  preloadBannerImages()
    .then(() => {
      initBannerAnimations();
    })
    .catch(() => {
      console.warn('Some banner images failed to preload, but animations will still run');
      initBannerAnimations();
    });

  // Logo slider
=======
  /* ==========================================================================
     BANNER IMAGE ANIMATIONS
     ========================================================================== */
  
  // Banner animation with timeline
  function initBannerAnimations() {
    const bannerImages = gsap.utils.toArray('.banner .img-1, .banner .img-2, .banner .img-3, .banner .img-4, .banner .img-5, .banner .img-6, .banner .img-7, .banner .img-8, .banner .img-9, .banner .img-10, .banner .img-11, .banner .img-12, .banner .img-13');
    
    // Set all images to invisible initially
    gsap.set(bannerImages, { opacity: 0, zIndex: -20, visibility: 'visible' });
    
    // Create timeline for cycling
    const bannerTimeline = gsap.timeline({ repeat: -1 });
    
    bannerImages.forEach((img, index) => {
      // Fade in image
      bannerTimeline.to(img, {
        opacity: 1,
        zIndex: -10,
        duration: 0.8,
        ease: "power2.out"
      }, index * 1.8)
      
      // Hold image briefly
      .to(img, {
        duration: 1.0 // Short hold time
      }, index * 1.8 + 0.8)
      
      // Fade out image
      .to(img, {
        opacity: 0,
        zIndex: -20,
        duration: 0.8,
        ease: "power2.in"
      }, index * 1.8 + 1.8);
    });
    
    // Start first image immediately
    gsap.set(bannerImages[0], { opacity: 1, zIndex: -10 });
  }
  
  // Initialize banner animations
  gsap.delayedCall(0.1, initBannerAnimations);

  /* ==========================================================================
     LOGO SLIDER ANIMATION
     ========================================================================== */
>>>>>>> 2f517c7195c39b5927ba8a066758483af70f6ca3
  
  const logoSlider = document.querySelector('.scroller-track');
  if (logoSlider) {
    gsap.to(logoSlider, {
      x: "-50%",
      duration: 25,
      ease: "none",
      repeat: -1
    });
  }

<<<<<<< HEAD
  // Window resize handling
  
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      const heroElements = {
        h1: document.querySelector('.hero h1'),
        leadText: document.querySelector('.hero .lead-text'),
        buttons: document.querySelector('.double-btns'),
        banner: document.querySelector('.banner')
      };
      if (heroElements.h1) {
        gsap.set([heroElements.h1, heroElements.leadText, heroElements.buttons], {
          y: 0,
          opacity: 1,
          scale: 1,
          clearProps: "transform"
        });
        heroElements.h1.classList.add('gsap-visible');
        if (heroElements.leadText) heroElements.leadText.classList.add('gsap-visible');
        if (heroElements.buttons) heroElements.buttons.classList.add('gsap-visible');
      }
      if (heroElements.banner) {
        gsap.set(heroElements.banner, {
          scale: 1,
          opacity: 1,
          clearProps: "transform"
        });
        heroElements.banner.classList.add('gsap-visible');
      }
      
      if (!document.body.hasAttribute('data-hero-animated')) {
        document.body.setAttribute('data-hero-animated', 'true');
      }
      document.querySelectorAll('.grid-item[data-animated="true"]').forEach(item => {
        gsap.set(item, {
          y: 0,
          opacity: 1,
          scale: 1,
          clearProps: "transform"
        });
      });
      
      document.querySelectorAll('.fade-in[data-fade-animated="true"]').forEach(element => {
        gsap.set(element, {
          y: 0,
          opacity: 1,
          clearProps: "transform"
        });
      });
      
      ScrollTrigger.refresh();
    }, 100);
  });

=======
  /* ==========================================================================
     PERFORMANCE OPTIMIZATIONS
     ========================================================================== */
  
  // Optimize scroll performance
>>>>>>> 2f517c7195c39b5927ba8a066758483af70f6ca3
  gsap.config({
    force3D: true,
    nullTargetWarn: false
  });
<<<<<<< HEAD
=======
  
  // Reduce motion for accessibility
>>>>>>> 2f517c7195c39b5927ba8a066758483af70f6ca3
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.timeScale(0.1);
  }
});

<<<<<<< HEAD
// Scroll speed optimization
=======
/* ==========================================================================
   SCROLL SPEED OPTIMIZATION
   ========================================================================== */
>>>>>>> 2f517c7195c39b5927ba8a066758483af70f6ca3

window.addEventListener('wheel', function(e) {
  if (e.ctrlKey || e.metaKey) {
    e.preventDefault();
    gsap.to(window, {
      duration: 0.1,
      scrollTo: {
        y: window.scrollY + e.deltaY * 2,
        autoKill: false
      },
      ease: "power2.out"
    });
  }
}, { passive: true });
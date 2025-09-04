"use strict";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

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
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
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
        x: 52,
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

  /* ==========================================================================
     GRADIENT INTERACTION
     ========================================================================== */

  const gradientSections = document.querySelectorAll(".cowboy-gradient, .testimonial-gradient");

  gradientSections.forEach(section => {
    section.addEventListener("pointermove", (e) => {
      const { clientX: x, clientY: y } = e;
      const { top: t, left: l, width: w, height: h } = section.getBoundingClientRect();

      // Calculate offsets relative to the center of the element
      const posX = x - l - w / 2;
      const posY = y - t - h / 2;
      
      // Animate the gradient position with GSAP
      gsap.to(section, {
        duration: 0.3,
        ease: "power2.out",
        '--posX': posX,
        '--posY': posY
    });
  });
});

  /* ==========================================================================
     NAVBAR SCROLL EFFECT
     ========================================================================== */
  
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    ScrollTrigger.create({
      start: "top -100",
      end: 99999,
      toggleClass: {className: "scrolled", targets: navbar}
    });
  }

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
  
  const logoSlider = document.querySelector('.scroller-track');
  if (logoSlider) {
    gsap.to(logoSlider, {
      x: "-50%",
      duration: 25,
      ease: "none",
      repeat: -1
    });
  }

  /* ==========================================================================
     PERFORMANCE OPTIMIZATIONS
     ========================================================================== */
  
  // Optimize scroll performance
  gsap.config({
    force3D: true,
    nullTargetWarn: false
  });
  
  // Reduce motion for accessibility
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.timeScale(0.1);
  }
});

/* ==========================================================================
   SCROLL SPEED OPTIMIZATION
   ========================================================================== */

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
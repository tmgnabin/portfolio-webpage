/**
 * ===================================================================
 * PORTFOLIO JAVASCRIPT LOGIC
 * Client: Nabin Tamang | BCA Student & Aspiring Software Developer
 * Stack: Pure Vanilla JavaScript (ES6+)
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* -------------------------------------------------------------------
     1. THEME SYNC WITH LOCALSTORAGE & SYSTEM PREFERENCE
     ------------------------------------------------------------------- */
  const root = document.documentElement;
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');

  const updateMetaThemeColor = (theme) => {
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#1C1917' : '#F6F1E9');
    }
  };

  const getActiveTheme = () => {
    return root.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  };

  const setTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    updateMetaThemeColor(theme);
  };

  // Sync initial meta tag
  updateMetaThemeColor(getActiveTheme());

  // Safe null-checked theme toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = getActiveTheme();
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }

  // Listen to system preference changes if user hasn't explicitly set a preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('portfolio-theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
    }
  });

  /* -------------------------------------------------------------------
     2. MOBILE NAVIGATION HAMBURGER MENU
     ------------------------------------------------------------------- */
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-link');

  if (navToggle && navLinks) {
    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : !navLinks.classList.contains('open');
      navLinks.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      
      // Update hamburger icon lines
      const top = document.getElementById('nav-line-top');
      const mid = document.getElementById('nav-line-mid');
      const bot = document.getElementById('nav-line-bot');

      if (top && mid && bot) {
        if (isOpen) {
          top.setAttribute('y1', '18');
          top.setAttribute('y2', '6');
          mid.style.opacity = '0';
          bot.setAttribute('y1', '6');
          bot.setAttribute('y2', '18');
        } else {
          top.setAttribute('y1', '6');
          top.setAttribute('y2', '6');
          mid.style.opacity = '1';
          bot.setAttribute('y1', '18');
          bot.setAttribute('y2', '18');
        }
      }
    };

    navToggle.addEventListener('click', () => toggleMenu());

    // Close menu when clicking any nav link
    if (navItems.length > 0) {
      navItems.forEach((link) => {
        link.addEventListener('click', () => {
          if (navLinks.classList.contains('open')) {
            toggleMenu(false);
          }
        });
      });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (
        navLinks.classList.contains('open') &&
        !navLinks.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        toggleMenu(false);
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        toggleMenu(false);
      }
    });
  }

  /* -------------------------------------------------------------------
     3. SCROLL SPY FOR ACTIVE NAVIGATION LINK
     ------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');

  const highlightNavOnScroll = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (targetNavLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          targetNavLink.classList.add('active');
        } else {
          targetNavLink.classList.remove('active');
        }
      }
    });
  };

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  /* -------------------------------------------------------------------
     4. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     ------------------------------------------------------------------- */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for browsers without observer
    revealElements.forEach((el) => el.classList.add('active'));
  }

  /* -------------------------------------------------------------------
     5. BACK TO TOP BUTTON
     ------------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    window.addEventListener(
      'scroll',
      () => {
        if (window.scrollY > 350) {
          backToTopBtn.classList.add('show');
        } else {
          backToTopBtn.classList.remove('show');
        }
      },
      { passive: true }
    );

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  /* -------------------------------------------------------------------
     6. TOAST NOTIFICATION UTILITY
     ------------------------------------------------------------------- */
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimeout = null;

  function showToast(message, duration = 3200) {
    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.classList.add('show');

    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }

    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  /* -------------------------------------------------------------------
     7. COPY EMAIL TO CLIPBOARD
     ------------------------------------------------------------------- */
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const targetEmail = 'tmgnabin932@gmail.com';

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(targetEmail);
          showToast(`Copied ${targetEmail} to clipboard!`);
        } else {
          // Fallback
          const textarea = document.createElement('textarea');
          textarea.value = targetEmail;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.focus();
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          showToast(`Copied ${targetEmail} to clipboard!`);
        }
      } catch (err) {
        showToast(`Email: ${targetEmail}`);
      }
    });
  }

  /* -------------------------------------------------------------------
     8. CONTACT FORM SUBMISSION HANDLER
     ------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const subjectInput = document.getElementById('form-subject');
      const messageInput = document.getElementById('form-message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      // Simple Validation
      if (!name || !email || !subject || !message) {
        showToast('Please fill out all required fields.');
        return;
      }

      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address.');
        return;
      }

      // Generate mailto link for seamless local/client sending without server dependency
      const mailtoUrl = `mailto:tmgnabin932@gmail.com?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${subject} - from ${name}`
      )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

      // Inform user and trigger client
      showToast('Opening your email client to send message...');
      
      setTimeout(() => {
        window.location.href = mailtoUrl;
        contactForm.reset();
      }, 700);
    });
  }

  /* -------------------------------------------------------------------
     9. DYNAMIC COPYRIGHT YEAR
     ------------------------------------------------------------------- */
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

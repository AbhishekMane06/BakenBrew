// Cursor Animation
document.addEventListener('click', function(e) {
  const x = e.pageX;
  const y = e.pageY;

  const span = document.createElement("span");
  span.classList.add("click-effect");
  span.style.top = y + "px";
  span.style.left = x + "px";
  document.body.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 500);
});

// Navbar toggle
const navlist = document.getElementById('navlist');
const hamburger = document.getElementById('hamburger');

if (hamburger && navlist) {
  hamburger.addEventListener("click", () => {
    navlist.classList.toggle('navlist-active');
    // Update aria-expanded for accessibility
    const isExpanded = navlist.classList.contains('navlist-active');
    hamburger.setAttribute('aria-expanded', isExpanded);
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navlist.contains(e.target)) {
      navlist.classList.remove('navlist-active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navlist.classList.contains('navlist-active')) {
      navlist.classList.remove('navlist-active');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.focus();
    }
  });
}

// Loader
const skeleton = document.querySelectorAll(".skeleton");
window.addEventListener("load", function () {
  skeleton.forEach((item) => {
    setTimeout(function () {
      item.classList.remove("skeleton");
    }, 3000);
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Close mobile menu if open
        if (navlist && navlist.classList.contains('navlist-active')) {
          navlist.classList.remove('navlist-active');
          hamburger.setAttribute('aria-expanded', 'false');
        }
      }
    }
  });
});

// Form handling
const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const feedbackInput = document.getElementById('input2');
    const feedback = feedbackInput.value.trim();
    
    if (feedback) {
      // Here you would typically send the feedback to a server
      // For now, we'll just show a success message
      alert('Thank you for your feedback! We appreciate your input.');
      feedbackInput.value = '';
    } else {
      alert('Please enter your feedback before submitting.');
      feedbackInput.focus();
    }
  });
}

// Add keyboard navigation support for hamburger menu
if (hamburger) {
  hamburger.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      hamburger.click();
    }
  });
}


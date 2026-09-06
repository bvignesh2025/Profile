/**
 * ==============================================================================
 * VIGNESHWAR BALAMURUGAN — CAMPAIGN SITE INTERACTIVITY
 * Clean Vanilla JavaScript: Zero dependencies, ultra-fast load time.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initProjectFilters();
  initProjectCardClicks();
  initEmailCopy();
  initScrollSpy();
});

/**
 * ------------------------------------------------------------------------------
 * 1. THEME TOGGLE (DARK / LIGHT MODE)
 * Reads initial preference from localStorage or system theme.
 * ------------------------------------------------------------------------------
 */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const htmlRoot = document.documentElement;

  // Retrieve saved theme or default to dark mode (matches engineering aesthetic)
  const savedTheme = localStorage.getItem('vigneshwar_theme') || 'dark';
  htmlRoot.setAttribute('data-theme', savedTheme);

  if (!themeToggleBtn) return;

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlRoot.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    htmlRoot.setAttribute('data-theme', newTheme);
    localStorage.setItem('vigneshwar_theme', newTheme);
  });
}

/**
 * ------------------------------------------------------------------------------
 * 2. PROJECT FILTERING LOGIC
 * Filters the project grid based on category pills (all, embedded, systems, ai).
 * ------------------------------------------------------------------------------
 */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. Remove active state from all buttons & assign to clicked
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // 2. Animate and toggle visibility of matching cards
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 150);
        }
      });
    });
  });
}

/**
 * ------------------------------------------------------------------------------
 * 2b. PROJECT CARD CLICK NAVIGATION
 * Opens project GitHub repository in new tab when clicked anywhere on the card.
 * ------------------------------------------------------------------------------
 */
function initProjectCardClicks() {
  const projectCards = document.querySelectorAll('.project-card[data-url]');

  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't trigger if user specifically clicked a link or button inside the card
      if (e.target.closest('a') || e.target.closest('button')) {
        return;
      }
      const url = card.getAttribute('data-url');
      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    });
  });
}

/**
 * ------------------------------------------------------------------------------
 * 3. 1-CLICK EMAIL COPY & TOAST NOTIFICATION
 * Copies email to clipboard and triggers a clean toast popup.
 * ------------------------------------------------------------------------------
 */
function initEmailCopy() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailText = document.getElementById('emailText');
  const copyBadge = document.getElementById('copyBadge');
  const toast = document.getElementById('toast');

  if (!copyBtn || !emailText) return;

  copyBtn.addEventListener('click', async () => {
    const textToCopy = emailText.textContent.trim();

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // Fallback for non-https/older browsers
        const tempInput = document.createElement('input');
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }

      // Visual feedback on button badge
      if (copyBadge) {
        const originalText = copyBadge.textContent;
        copyBadge.textContent = 'Copied!';
        copyBadge.style.color = 'var(--success)';
        setTimeout(() => {
          copyBadge.textContent = originalText;
          copyBadge.style.color = '';
        }, 2000);
      }

      // Display floating toast
      showToast('Email copied to clipboard: ' + textToCopy);
    } catch (err) {
      console.error('Failed to copy: ', err);
      showToast('Click to send email directly');
    }
  });
}

/**
 * Helper: Shows floating toast message
 */
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

/**
 * ------------------------------------------------------------------------------
 * 4. SCROLL SPY FOR NAVIGATION
 * Highlights active link as user scrolls past sections.
 * ------------------------------------------------------------------------------
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
        link.style.color = 'var(--accent-primary)';
      } else {
        link.style.color = '';
      }
    });
  });
}

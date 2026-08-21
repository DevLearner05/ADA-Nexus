// =========================================
// ADA CAPITAL — REPLICA JAVASCRIPT
// Simple, commented so it's easy to learn from
// =========================================

// ---- 0. Preloader — hide once page fully loads ----
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.classList.add('hidden');
    // Remove from DOM after fade-out transition ends
    preloader.addEventListener('transitionend', () => preloader.remove());
  }
});

// ---- 1. Mobile menu toggle ----
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ---- 2. Navbar background on scroll ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ---- 3. Scroll reveal animation ----
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

// ---- 4. Contact form -> send via WhatsApp ----
const contactForm = document.getElementById('contactForm');
const whatsappNumber = '919555225208'; // country code + number, no + or spaces

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputs = contactForm.querySelectorAll('input, select, textarea');
  const [name, phone, business, type] = inputs;
  const email = contactForm.querySelector('input[type="email"]');
  const message = contactForm.querySelector('textarea');

  const text =
    `Hi ADA Capital! I'm interested in your services.%0A%0A` +
    `*Name:* ${name.value}%0A` +
    `*Phone:* ${phone.value}%0A` +
    `*Business:* ${business.value || '-'}%0A` +
    `*Type:* ${type.value || '-'}%0A` +
    `*Email:* ${email.value || '-'}%0A` +
    `*Message:* ${message.value || '-'}`;

  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
});

// ---- 5. ROI Calculator ----
const roiBizType = document.getElementById('roiBizType');
const roiBottles = document.getElementById('roiBottles');
const roiDuration = document.getElementById('roiDuration');
const roiBottleCount = document.getElementById('roiBottleCount');
const roiReach = document.getElementById('roiReach');
const roiBoost = document.getElementById('roiBoost');
const roiImpressions = document.getElementById('roiImpressions');
const roiCost = document.getElementById('roiCost');

// Business multipliers: [reachPerBottle, walkInBoostBase%, impressionMultiplier, costPerBottle]
const bizData = {
  restaurant:  { reach: 3.5, boost: 25, impr: 3.0, cost: 5 },
  hotel:       { reach: 4.0, boost: 18, impr: 3.5, cost: 5.5 },
  school:      { reach: 5.0, boost: 15, impr: 4.0, cost: 4.5 },
  clinic:      { reach: 3.0, boost: 20, impr: 2.8, cost: 5 },
  corporate:   { reach: 2.5, boost: 12, impr: 2.5, cost: 6 },
  event:       { reach: 6.0, boost: 30, impr: 1.5, cost: 4 },
};

function formatNum(n) {
  return n.toLocaleString('en-IN');
}

// Animate counting up/down to a number
function animateValue(el, newText, prefix = '', suffix = '') {
  el.style.transform = 'scale(1.05)';
  el.style.transition = 'transform 0.2s ease';
  setTimeout(() => {
    el.textContent = prefix + newText + suffix;
    el.style.transform = 'scale(1)';
  }, 100);
}

function calcROI() {
  const biz = bizData[roiBizType.value];
  const bottles = parseInt(roiBottles.value);
  const months = parseInt(roiDuration.value);

  const reach = Math.round(bottles * biz.reach);
  const boost = Math.round(biz.boost * (1 + (bottles - 100) / 10000) * Math.min(months / 3, 2));
  const impressions = Math.round(reach * biz.impr * months);
  const cost = Math.round(bottles * biz.cost);

  // Update display with animation
  roiBottleCount.textContent = formatNum(bottles);
  animateValue(roiReach, formatNum(reach));
  animateValue(roiBoost, boost, '+', '%');
  animateValue(roiImpressions, formatNum(impressions));
  animateValue(roiCost, '₹' + formatNum(cost));
}

// Run on any change
roiBizType.addEventListener('change', calcROI);
roiDuration.addEventListener('change', calcROI);
roiBottles.addEventListener('input', calcROI);

// Initial calculation
calcROI();

// ---- 6. Project Details Modal (Concept Case Studies & Multi-Samples) ----
const projectData = {
  bottle: {
    title: 'Cafe & Dine Visibility Concept',
    tag: 'WATER BOTTLE MARKETING • CONCEPT BLUEPRINT',
    desc: 'A complete physical visibility blueprint designed for food & dining businesses. Features premium waterproof branded bottles distributed across high-footfall cafes, gyms, and corporate offices with trackable QR menus.',
    samples: [
      { name: '✨ 3D AI Render', img: 'assets/AI_bottles.png' },
      { name: '🏷️ Physical Bottle Label', img: 'assets/bottles.jpg' }
    ],
    highlights: [
      { val: '5,000+', label: 'Target Distribution' },
      { val: '+30%', label: 'Estimated Footfall' },
      { val: 'QR Menu', label: 'Direct Conversion' }
    ]
  },
  web: {
    title: 'The Grand Palace Luxury Resort',
    tag: 'WEBSITE DEVELOPMENT • DEMO TEMPLATE',
    desc: 'Modern, ultra-fast resort showcase template built to drive direct bookings. Includes interactive room suites, instant WhatsApp reservations, dynamic reviews, and local search SEO setup.',
    samples: [
      { name: '🖥️ Desktop & Mobile UI', img: 'assets/hotelPlatform.jpg' },
      { name: '✨ 3D Platform Mockup', img: 'assets/AI_hotelPlatform.png' }
    ],
    highlights: [
      { val: '< 1.0s', label: 'Lightning Speed' },
      { val: 'WhatsApp', label: '1-Click Booking' },
      { val: 'SEO Ready', label: 'Google Search Rank' }
    ]
  },
  marketing: {
    title: 'MedCare Clinic 3X Growth System',
    tag: 'AI & DIGITAL MARKETING • STRATEGY BLUEPRINT',
    desc: 'Multi-channel local patient reach framework combining AI-generated health reels, Google Maps rank optimization, Meta hyper-local ads, and automated WhatsApp patient inquiry capture.',
    samples: [
      { name: '🤖 AI Video Reel Concept', img: 'assets/AI_Clinic.png' },
      { name: '📈 Campaign Creatives', img: 'assets/clinic.jpg' }
    ],
    highlights: [
      { val: '3X', label: 'Maps Visibility' },
      { val: 'AI Reels', label: 'Weekly Content' },
      { val: '24/7', label: 'Lead Capture' }
    ]
  }
};

const projectModal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalTag = document.getElementById('modalTag');
const modalDesc = document.getElementById('modalDesc');
const modalImg = document.getElementById('modalImg');
const modalHighlights = document.getElementById('modalHighlights');
const modalGallery = document.getElementById('modalGallery');

function switchModalSample(imgUrl, btn) {
  modalImg.style.backgroundImage = `linear-gradient(135deg, rgba(10, 17, 32, 0.25), rgba(10, 17, 32, 0.45)), url('${imgUrl}')`;
  if (btn) {
    modalGallery.querySelectorAll('.gallery-thumb-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
}

function openProjectModal(key) {
  const data = projectData[key];
  if (!data) return;

  modalTitle.textContent = data.title;
  modalTag.textContent = data.tag;
  modalDesc.textContent = data.desc;

  // Set initial sample image
  if (data.samples && data.samples.length > 0) {
    switchModalSample(data.samples[0].img, null);

    // Render sample switcher buttons
    modalGallery.innerHTML = data.samples.map((s, idx) => `
      <button class="gallery-thumb-btn ${idx === 0 ? 'active' : ''}" onclick="switchModalSample('${s.img}', this)">
        ${s.name}
      </button>
    `).join('');
  } else {
    modalGallery.innerHTML = '';
  }

  // Populate highlights
  modalHighlights.innerHTML = data.highlights.map(h => `
    <div class="modal-highlight-item">
      <strong>${h.val}</strong>
      <span>${h.label}</span>
    </div>
  `).join('');

  projectModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModalDirect() {
  projectModal.classList.remove('active');
  document.body.style.overflow = '';
}

function closeProjectModal(e) {
  if (e.target === projectModal) {
    closeProjectModalDirect();
  }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && projectModal.classList.contains('active')) {
    closeProjectModalDirect();
  }
});

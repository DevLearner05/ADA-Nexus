# ADA Nexus — Build. Brand. Grow. 🚀

> **Hybrid Growth & Branding Agency Platform**  
> Bridging high-impact physical brand visibility (custom water bottle marketing) with modern digital growth engines (web development, AI automation, branding, and local SEO).

---

## 📌 Overview

**ADA Nexus** is a modern, responsive single-page agency website built for a full-suite marketing and branding agency. The platform highlights ADA Nexus's unique multi-channel approach: putting brands directly into customers' hands via distributed branded water bottles while scaling their digital footprint through modern web platforms, AI video content, and targeted digital marketing campaigns.

The site is built with **zero external heavy framework dependencies** — engineered using clean semantic **HTML5**, modular and optimized **Vanilla CSS3**, and high-performance **ES6+ JavaScript**.

---

## 🗂️ Project Structure

```text
ADA Nexus/
├── assets/                          # Static media, mockups, and visual assets
│   ├── logo.png                     # ADA Nexus brand logo
│   ├── bottles.jpg                  # Physical water bottle label mockup
│   ├── AI_bottles.png               # 3D AI render of branded water bottles
│   ├── hotelPlatform.jpg            # Hotel & resort booking platform UI showcase
│   ├── AI_hotelPlatform.png         # 3D platform render for luxury resort concept
│   ├── clinic.jpg                   # Clinic marketing campaign creative mockup
│   └── AI_Clinic.png                # AI promo video reel concept render
├── index.html                       # Main website markup & semantic structure
├── style.css                        # Complete design system, animations & responsive styling
├── script.js                        # Interactive logic (ROI calculator, modal, WhatsApp handler)
└── README.md                        # Documentation & project guide
```

---

## 📂 File Breakdown & Technical Details

### 1. [`index.html`](file:///e:/BUSINESS/ADA%20Nexus/index.html)
The primary entry point of the application containing all structural sections:
- **Preloader (`#preloader`):** Animated initial loading screen with glowing brand logo, shimmer text, and gradient progress bar.
- **Ambient Canvas (`.bg-effects`):** 5 animated gradient floating orbs and a masked technical grid background overlay.
- **Header & Navigation (`#navbar`):** Sticky navigation bar with brand identity, smooth scroll jump links, 3D "Get a Quote" call-to-action button, and mobile hamburger drawer.
- **Hero Section (`.hero`):** High-converting value proposition headline, multi-disciplinary service pill badge, and conversion buttons.
- **Services (`#services`):** 6 core agency service cards (Water Bottle Marketing, Web Development, AI Services, Branding & Design, Packaging, Digital Marketing).
- **Who We Serve (`#who-we-serve`):** Tailored industry cards for Restaurants, Schools, Hotels, Corporates, Clinics, and Events.
- **Why Choose Us (`#why-us`):** Key value propositions paired with an animated live stats showcase (500+ Bottles Distributed, 50+ Websites Built, 30+ Happy Clients).
- **How We Work:** 4-step progressive timeline: *01 Discovery ➔ 02 Strategy ➔ 03 Execution ➔ 04 Launch*.
- **Interactive ROI Calculator (`#roi-calculator`):** Dynamic real-time estimation widget for campaign reach, footfall boost, monthly impressions, and investment.
- **Featured Concept Blueprints & Portfolio (`#portfolio`):** Clickable case studies with interactive multi-sample modals.
- **Project Modal (`#projectModal`):** Dynamic pop-up dialog with gallery switcher, key metric tags, and WhatsApp inquiry trigger.
- **Pricing & Packages (`#pricing`):** Transparent menu for individual services alongside tiered packages (*Startup*, *Business Growth*, *Brand Accelerator*).
- **Contact & WhatsApp Intake (`#contact`):** Instant inquiry form linked directly to WhatsApp.
- **Footer:** Quick navigation links, service directory, and copyright metadata.

---

### 2. [`style.css`](file:///e:/BUSINESS/ADA%20Nexus/style.css)
A custom CSS design system featuring:
- **Design Tokens / CSS Custom Properties:**
  ```css
  :root {
    --bg-dark: #0a1120;     /* Deep slate navy background */
    --bg-card: #101b30;     /* Primary container background */
    --bg-card-2: #0d1626;   /* Secondary card background */
    --border: #1e2c47;      /* Clean border highlights */
    --cyan: #22d3ee;        /* Electric cyan primary accent */
    --cyan-dark: #06b6d4;   /* Hover cyan state */
    --gold: #eab308;        /* Warm gold secondary accent */
    --white: #f5f7fb;       /* Crisp foreground text */
    --gray: #9aa7bd;        /* Muted supporting text */
    --radius: 12px;         /* Standard border radius */
    --max-width: 1200px;    /* Grid container limit */
  }
  ```
- **Visual Effects & Micro-Interactions:**
  - Radial gradient ambient orbs (`.orb-1` through `.orb-5`) with infinite floating keyframes.
  - Linear masked wireframe tech grid (`.bg-grid`).
  - Text shimmer gradients and glowing drop-shadows.
  - 3D tactile button push effects (`.quote-btn`, `.btn-primary`, `.btn-gold`, `.btn-whatsapp`).
  - Smooth Intersection Observer `.reveal` transitions on scroll.
- **Responsive Layout:**
  - Fluid CSS Grid & Flexbox system.
  - Mobile-first breakpoints at `900px`, `560px`, and `360px`.

---

### 3. [`script.js`](file:///e:/BUSINESS/ADA%20Nexus/script.js)
Modular vanilla JavaScript powering site interactivity:
1. **Preloader Controller:** Listens to `window.load` to gracefully fade out and remove the preloader from the DOM.
2. **Mobile Drawer Navigation:** Toggles navigation links with auto-close upon link click.
3. **Scroll Shadow Observer:** Dynamically applies elevation to the navbar when scrolled past `20px`.
4. **Scroll Reveal Animation:** Uses `IntersectionObserver` with a `0.1` threshold for performant entry animations.
5. **Direct WhatsApp Intake:** Captures contact form fields (name, phone, business, industry, email, message) and formats a structured query string directly dispatched via `https://wa.me/`.
6. **Live ROI Calculator Engine:**
   - Evaluates business-type coefficients (restaurant, hotel, school, clinic, corporate, event).
   - Computes:
     $$\text{Estimated Reach} = \text{Bottles} \times \text{Reach Per Bottle}$$
     $$\text{Footfall Boost \%} = \text{Base Boost} \times \left(1 + \frac{\text{Bottles} - 100}{10000}\right) \times \min\left(\frac{\text{Months}}{3}, 2\right)$$
     $$\text{Monthly Impressions} = \text{Reach} \times \text{Impression Multiplier} \times \text{Months}$$
     $$\text{Estimated Investment} = \text{Bottles} \times \text{Cost Per Bottle}$$
   - Includes real-time scaling micro-animations on value updates (`animateValue`).
7. **Portfolio Modal & Multi-Sample Gallery:**
   - Dynamic dataset (`projectData`) containing case studies for Water Bottle Branding, Luxury Hotel Web Portal, and Clinic Marketing Growth System.
   - Interactive switcher between 3D AI renders and physical mockups.
   - ESC key and backdrop click dismissal.

---

### 4. `assets/`
High-resolution visuals and mockups supporting the portfolio and branding:
- `logo.png` — Official transparent logo.
- `bottles.jpg` & `AI_bottles.png` — Physical mockup & 3D render for Cafe & Dine Visibility Concept.
- `hotelPlatform.jpg` & `AI_hotelPlatform.png` — UI showcase & 3D render for The Grand Palace Resort.
- `clinic.jpg` & `AI_Clinic.png` — Marketing campaign creative & AI video concept for MedCare Clinic.

---

## ⚡ Core Features & Capabilities

| Feature | Description |
| :--- | :--- |
| **💧 Offline Marketing** | Branded water bottle distribution campaigns targeting cafes, hotels, schools, events, and offices. |
| **💻 Digital Engineering** | Fast, responsive, SEO-ready business, portfolio, and eCommerce web development. |
| **🤖 AI Integration** | AI-generated promotional reels, video scripts, voiceovers, chatbots, and customer support automations. |
| **🧮 Interactive ROI Calculator** | Live interactive tool estimating campaign reach, footfall boost, impressions, and budget in ₹ (INR). |
| **🖼️ Blueprint Case Studies** | Modal popup showcasing 3D AI concepts, physical mockups, and growth metrics. |
| **💬 1-Click WhatsApp Lead Gen** | Instant client inquiries sent directly to agency WhatsApp with pre-filled details. |
| **📱 Fully Responsive** | Pixel-perfect layout tailored for desktop, tablet, and mobile displays. |

---

## 🚀 Getting Started & Local Development

This project is built with vanilla web technologies and requires no compilation, bundlers, or `npm install`.

### Option 1: Open Directly in Browser
Double-click `index.html` or open it with any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Run with VS Code Live Server
1. Open the project folder in VS Code / Antigravity IDE.
2. Right-click [`index.html`](file:///e:/BUSINESS/ADA%20Nexus/index.html) and select **"Open with Live Server"**.

### Option 3: Run with Python HTTP Server
Run the following command in the project root:
```bash
# Python 3
python -m http.server 3000
```
Then navigate to `http://localhost:3000` in your browser.

---

## ⚙️ Customization & Configuration

### Updating Contact Information & WhatsApp Number
In [`script.js`](file:///e:/BUSINESS/ADA%20Nexus/script.js#L54):
```javascript
const whatsappNumber = '919555225208'; // Country code + 10-digit number (no + or spaces)
```
In [`index.html`](file:///e:/BUSINESS/ADA%20Nexus/index.html#L487-L497):
- Update the email address, phone number, and operating hours in the `#contact` section.

### Adjusting ROI Calculator Rates
In [`script.js`](file:///e:/BUSINESS/ADA%20Nexus/script.js#L87-L94):
```javascript
const bizData = {
  restaurant:  { reach: 3.5, boost: 25, impr: 3.0, cost: 5 },
  hotel:       { reach: 4.0, boost: 18, impr: 3.5, cost: 5.5 },
  school:      { reach: 5.0, boost: 15, impr: 4.0, cost: 4.5 },
  clinic:      { reach: 3.0, boost: 20, impr: 2.8, cost: 5 },
  corporate:   { reach: 2.5, boost: 12, impr: 2.5, cost: 6 },
  event:       { reach: 6.0, boost: 30, impr: 1.5, cost: 4 },
};
```

### Adding / Editing Portfolio Projects
In [`script.js`](file:///e:/BUSINESS/ADA%20Nexus/script.js#L137-L180), update or expand the `projectData` object with new titles, sample image paths, and highlight metrics.

---

## 🎨 Technology Stack

- **Markup:** HTML5 (Semantic & Accessible)
- **Styles:** Vanilla CSS3 (Custom Properties, Flexbox, CSS Grid, Keyframe Animations)
- **Typography:** [Rubik](https://fonts.google.com/specimen/Rubik) & Modern System Fonts
- **Scripting:** Vanilla JavaScript (ES6+, Intersection Observer API)
- **Integrations:** WhatsApp Click-to-Chat API

---

## 📄 License & Copyright

© 2026 **ADA Nexus**. All Rights Reserved.  
*Build. Brand. Grow.*

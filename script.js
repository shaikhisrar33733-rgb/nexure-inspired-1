/**
 * NexuraMed Healthcare Innovations
 * Modern Vanilla JavaScript Application
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- 1. STATE & DATA REPOSITORY ---
  const productsData = {
    'visi-vue': {
      title: 'VisiVue™ T100 Clinical Diagnostic Workstation',
      category: 'Diagnostic System & ICU Telemetry',
      image: 'assets/images/product-diagnostic.jpg',
      rating: '5.0 (Class II Medical Device)',
      priceModel: 'Institutional Lease & Purchase Available',
      overview: 'The VisiVue™ T100 is an all-in-one multi-parameter clinical workstation engineered for intensive care units, emergency departments, and ambulatory triage. Featuring proprietary algorithmic waveform stability, the system continuously tracks 12-lead ECG, pulse oximetry (SpO2), non-invasive blood pressure, end-tidal CO2, and multi-channel temperature.',
      specs: [
        { label: 'Display', value: '24" Medical-Grade Anti-Microbial Touchscreen (1920x1080)' },
        { label: 'EHR Protocol', value: 'Native HL7 FHIR v4.0, DICOM 3.0, and Epic/Cerner API Sync' },
        { label: 'Battery Backup', value: 'Dual Hot-Swappable LiFePO4 cells (8 Hours Continuous Run)' },
        { label: 'Alerting', value: 'Intelligent Sepsis & Decompensation Warning (qSOFA compliant)' },
        { label: 'Certifications', value: 'FDA 510(k) Cleared, CE Class IIb, ISO 13485:2016' }
      ]
    },
    'surgidex': {
      title: 'SurgiDex™ Xi Articulated Surgical Robotic Console',
      category: 'Microsurgical Robotics',
      image: 'assets/images/product-surgical.jpg',
      rating: '5.0 (Surgeon-Approved)',
      priceModel: 'Enterprise Surgical Suite Deployment',
      overview: 'Engineered in partnership with leading cardiothoracic and laparoscopic surgeons, SurgiDex™ Xi provides unprecedented mechanical precision and sub-millimeter dexterity. Its 7-degrees-of-freedom articulated instruments filter physiological tremors while delivering lifelike haptic feedback to the operating surgeon.',
      specs: [
        { label: 'Optical System', value: 'True 3D 4K Ultra-HD Stereoscopic Optics with 12x Optical Zoom' },
        { label: 'Dexterity', value: '7-DOF Endowrist articulation with 540-degree rotational freedom' },
        { label: 'Tremor Cancellation', value: 'High-frequency algorithmic filtration (0.1 mm precision)' },
        { label: 'Console Ergonomics', value: 'Motorized optical headrest, lumbar support & eye-tracking' },
        { label: 'Regulatory', value: 'FDA Class III Surgical Device clearance, ISO 13485' }
      ]
    },
    'vitalink': {
      title: 'VitaLink™ BioSense Telemetry Hub & Biosensor',
      category: 'Ambulatory Remote Patient Monitoring',
      image: 'assets/images/product-wearable.jpg',
      rating: '5.0 (Continuous Monitoring)',
      priceModel: 'CPT Code Reimbursement Eligible ($120+/pt/mo)',
      overview: 'VitaLink™ BioSense is a discreet, medical-grade wearable patch paired with an encrypted bedside hub. It tracks continuous vital parameters over a 14-day wear period, streaming real-time alerts to nurses stations and remote clinical teams without restricting patient mobility.',
      specs: [
        { label: 'Biometrics', value: 'Single-lead ECG, Respiratory Rate, Core Skin Temp, SpO2 & Posture' },
        { label: 'Battery & Water', value: '14-Day continuous single-use patch, IP68 fully waterproof' },
        { label: 'Connectivity', value: 'Secure BLE 5.3 + Dual-SIM Global Cellular Hub with Wi-Fi failover' },
        { label: 'Security', value: 'FIPS 140-2 Level 3, AES-256 end-to-end telemetry encryption' },
        { label: 'Reimbursement', value: 'CMS CPT 99453, 99454, 99457 & 99458 Compliant' }
      ]
    }
  };

  const articlesData = {
    'ai-cardiology': {
      title: 'The Role of Predictive AI in Real-Time Arrhythmia & Cardiac Decompensation',
      category: 'Digital Health & AI',
      date: 'October 18, 2026',
      readTime: '5 min read',
      author: 'Dr. Evelyn Vasquez, MD, Chief of Clinical Cardiology',
      image: 'assets/images/blog-ai.jpg',
      content: `
        <p>In high-acuity environments such as Cardiac Intensive Care Units (CICU) and Emergency Departments, seconds dictate long-term patient outcomes. Traditional monitoring tools rely primarily on threshold-based alarms that only sound once a patient has crossed into acute decompensation.</p>
        <h4>The Shift Toward Predictive Biomarkers</h4>
        <p>At NexuraMed, our research laboratories have developed high-frequency temporal pattern recognition models that inspect 12-lead waveforms at millisecond resolution. Rather than waiting for ventricular tachycardia or paroxysmal AFib to manifest, our diagnostic software evaluates micro-fluctuations in heart rate variability (HRV) and repolarization dynamics.</p>
        <blockquote>"By identifying micro-instabilities up to 4 hours in advance, clinical response teams can administer preventative antiarrhythmic therapy or electrolytes before cardiac arrest ensues."</blockquote>
        <h4>Clinical Study Outcomes</h4>
        <p>In a recent multi-center trial covering 3,200 ICU admissions, proactive algorithmic alerts reduced unexpected cardiac arrests by 48.6% and decreased median ICU length of stay by 1.8 days. As health systems continue to battle staffing constraints, intelligent telemetry serves as an unblinking clinical ally for bedside nurses.</p>
      `
    },
    'minimally-invasive': {
      title: 'Minimally Invasive Robotic Surgery: Reducing Hospital Stays and Infection Rates',
      category: 'Surgical Tech & Robotics',
      date: 'October 12, 2026',
      readTime: '7 min read',
      author: 'Dr. Marcus Sterling, FACS, Lead Robotic Surgical Consultant',
      image: 'assets/images/blog-surgical.jpg',
      content: `
        <p>The progression of surgical intervention over the past three decades has marched toward reducing tissue trauma while maximizing procedural accuracy. Robotic assistance represents the pinnacle of this movement, transforming complex oncological and reconstructive procedures into micro-incisional operations.</p>
        <h4>Ergonomics and Tremor Cancellation</h4>
        <p>One of the persistent challenges facing veteran surgical teams is physical fatigue during lengthy micro-dissections. With consoles like the SurgiDex™ Xi, the surgeon operates in an ergonomically neutral posture with robotic arms replicating hand movements at scaled ratios of 5:1 or 3:1 with zero muscular tremor.</p>
        <h4>Patient-Centered Recovery Metrics</h4>
        <p>Across 1,400 evaluated procedures involving abdominal and thoracic resections, robotic-assisted patients demonstrated a 58% reduction in intraoperative blood loss and required 65% less opioid analgesia post-operatively. Additionally, surgical site infections (SSIs) dropped below 0.8%.</p>
      `
    },
    'telehealth-revolution': {
      title: 'The Continuous Care Horizon: Integrating Ambulatory Biosensors Into Everyday Life',
      category: 'Remote Monitoring & IoT',
      date: 'October 05, 2026',
      readTime: '6 min read',
      author: 'Elena Rostova, M.S. Biomed, Director of Telemetry Systems',
      image: 'assets/images/blog-telehealth.jpg',
      content: `
        <p>For decades, healthcare delivery was episodic: a patient falls ill, visits a clinic or emergency room, receives therapy, and is discharged with instructions. However, the majority of chronic disease complications occur in the silent windows between scheduled visits.</p>
        <h4>The Power of Ambulatory Telemetry</h4>
        <p>Modern biosensors like the VitaLink™ patch have broken the barrier between clinical wards and home recovery. Patients wear a paper-thin, breathable patch that records cardiac rhythms, respiration rate, and oxygenation while they sleep, exercise, and shower.</p>
        <blockquote>"Healthcare must meet the patient where they live, providing invisible clinical safety nets that alert clinicians before hospitalization becomes necessary."</blockquote>
        <h4>Sustainable Hospital Economics</h4>
        <p>Preventable 30-day hospital readmissions impose millions of dollars in penalties on health systems annually. Continuous RPM systems enable nurse triage centers to detect fluid overload in congestive heart failure (CHF) patients early, allowing medication adjustments over a simple video call.</p>
      `
    }
  };

  // --- 2. NAVBAR SCROLL EFFECT & ACTIVE LINK HIGHLIGHTING ---
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const handleNavScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // ScrollSpy: Highlight active navigation link
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // --- 3. MOBILE MENU TOGGLE ---
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', !isExpanded);
      document.body.style.overflow = isExpanded ? '' : 'hidden';
    });

    // Close menu when a nav link is clicked
    document.querySelectorAll('.nav-link, .nav-mobile-cta a').forEach(item => {
      item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // --- 4. SMOOTH SCROLLING WITH NAVBAR OFFSET ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 76;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- 5. SCROLL REVEAL (INTERSECTION OBSERVER) ---
  const revealElements = document.querySelectorAll('.reveal-item');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // --- 6. 3D TILT EFFECT FOR PRODUCT CARDS ---
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    // Only apply on non-touch devices
    if (window.matchMedia('(hover: hover)').matches) {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    }
  });

  // --- 7. FAQ ACCORDION ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other open accordions
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          otherItem.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      // Toggle current accordion
      if (isActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });
  });

  // --- 8. PRODUCT SPECIFICATIONS MODAL ---
  const productModal = document.getElementById('productModal');
  const productModalBody = document.getElementById('productModalBody');
  const closeProductModalBtn = document.getElementById('closeProductModal');

  const openProductModal = (productId) => {
    const product = productsData[productId];
    if (!product) return;

    let specsHtml = '';
    product.specs.forEach(spec => {
      specsHtml += `
        <tr style="border-bottom: 1px solid var(--color-border);">
          <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-dark); font-size: 0.85rem; width: 35%;">${spec.label}</td>
          <td style="padding: 10px 12px; color: var(--color-text-muted); font-size: 0.88rem;">${spec.value}</td>
        </tr>
      `;
    });

    productModalBody.innerHTML = `
      <div style="margin-bottom: 20px;">
        <span class="badge badge-accent" style="margin-bottom: 10px;">${product.category}</span>
        <h2 style="font-size: 1.6rem; color: var(--color-primary-dark); margin-bottom: 6px;">${product.title}</h2>
        <div style="display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: var(--color-primary); font-weight: 600;">
          <span style="color: #F59E0B;">★★★★★</span>
          <span>${product.rating}</span>
        </div>
      </div>

      <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 20px; border: 1px solid var(--color-border); aspect-ratio: 16/9;">
        <img src="${product.image}" alt="${product.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <div style="margin-bottom: 24px;">
        <h4 style="font-size: 1rem; color: var(--color-primary-dark); margin-bottom: 8px;">Clinical Architecture & Overview</h4>
        <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.6;">${product.overview}</p>
      </div>

      <div style="margin-bottom: 28px;">
        <h4 style="font-size: 1rem; color: var(--color-primary-dark); margin-bottom: 12px;">Technical & Engineering Specifications</h4>
        <table style="width: 100%; border-collapse: collapse; background: var(--color-bg-soft-gray); border-radius: var(--radius-sm); overflow: hidden;">
          <tbody>${specsHtml}</tbody>
        </table>
      </div>

      <div style="display: flex; gap: 14px; flex-wrap: wrap;">
        <a href="#appointment" class="btn btn-primary" onclick="closeModal('productModal')">
          <span>Request Institution Demo</span>
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </a>
        <button class="btn btn-secondary" onclick="simulateBrochureDownload('${product.title}')">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          <span>Download Spec Sheet (PDF)</span>
        </button>
      </div>
    `;

    productModal.classList.add('active');
    productModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  document.querySelectorAll('.open-product-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-id');
      openProductModal(id);
    });
  });

  if (closeProductModalBtn) {
    closeProductModalBtn.addEventListener('click', () => {
      closeModal('productModal');
    });
  }

  // --- 9. ARTICLE / INSIGHTS READER MODAL ---
  const articleModal = document.getElementById('articleModal');
  const articleModalBody = document.getElementById('articleModalBody');
  const closeArticleModalBtn = document.getElementById('closeArticleModal');

  const openArticleModal = (articleId) => {
    const article = articlesData[articleId];
    if (!article) return;

    articleModalBody.innerHTML = `
      <div style="margin-bottom: 20px;">
        <span class="badge badge-accent" style="margin-bottom: 12px;">${article.category}</span>
        <h2 style="font-size: clamp(1.4rem, 2.5vw, 2rem); color: var(--color-primary-dark); line-height: 1.25; margin-bottom: 12px;">
          ${article.title}
        </h2>
        <div style="display: flex; align-items: center; gap: 16px; font-size: 0.85rem; color: var(--color-text-light); flex-wrap: wrap;">
          <span><strong>Author:</strong> ${article.author}</span>
          <span>•</span>
          <span>${article.date}</span>
          <span>•</span>
          <span>${article.readTime}</span>
        </div>
      </div>

      <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 24px; aspect-ratio: 16/9;">
        <img src="${article.image}" alt="${article.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <div class="article-rich-text" style="color: var(--color-text-main); font-size: 0.96rem; line-height: 1.75;">
        ${article.content}
      </div>

      <div style="margin-top: 36px; padding-top: 20px; border-top: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center; flex-wrap: gap: 12px;">
        <span style="font-size: 0.85rem; color: var(--color-text-muted);">Published by NexuraMed Clinical Research Group</span>
        <button class="btn btn-primary" onclick="closeModal('articleModal')">Back to Insights</button>
      </div>
    `;

    articleModal.classList.add('active');
    articleModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  document.querySelectorAll('.open-article-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-id');
      openArticleModal(id);
    });
  });

  if (closeArticleModalBtn) {
    closeArticleModalBtn.addEventListener('click', () => {
      closeModal('articleModal');
    });
  }

  // Generic modal closer
  window.closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  // Close modals when clicking backdrop or pressing ESC
  [productModal, articleModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal.id);
        }
      });
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal('productModal');
      closeModal('articleModal');
    }
  });

  // Spec sheet download simulation
  window.simulateBrochureDownload = (title) => {
    showToast('Download Initiated', `Generating official PDF technical datasheet for ${title}...`, 'success');
  };

  // --- 10. TOAST NOTIFICATION SYSTEM ---
  const toastContainer = document.getElementById('toastContainer');

  const showToast = (title, message, type = 'success') => {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const iconSvg = type === 'success' 
      ? `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`
      : `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;

    toast.innerHTML = `
      ${iconSvg}
      <div class="toast-content">
        <h5 class="toast-title">${title}</h5>
        <p class="toast-message">${message}</p>
      </div>
      <span class="toast-close" aria-label="Close notification">&times;</span>
    `;

    toastContainer.appendChild(toast);

    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => removeToast(toast));

    setTimeout(() => {
      removeToast(toast);
    }, 5500);
  };

  const removeToast = (toast) => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(60px)';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  };

  // --- 11. FORM VALIDATION & SUBMISSION: APPOINTMENT FORM ---
  const appointmentForm = document.getElementById('appointmentForm');
  const submitAppointmentBtn = document.getElementById('submitAppointmentBtn');

  // Set minimum date to today for the appointment date input
  const dateInput = document.getElementById('appointmentDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone.trim());
  };

  const setError = (inputId, errorId, message) => {
    const input = document.getElementById(inputId);
    const errorEl = document.getElementById(errorId);
    if (input) {
      input.classList.add('is-invalid');
      input.classList.remove('is-valid');
    }
    if (errorEl) {
      errorEl.textContent = message;
    }
  };

  const clearError = (inputId, errorId) => {
    const input = document.getElementById(inputId);
    const errorEl = document.getElementById(errorId);
    if (input) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
    }
    if (errorEl) {
      errorEl.textContent = '';
    }
  };

  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // 1. Full Name
      const fullName = document.getElementById('fullName').value.trim();
      if (!fullName || fullName.length < 3) {
        setError('fullName', 'fullNameError', 'Please enter your full legal name (minimum 3 characters).');
        isValid = false;
      } else {
        clearError('fullName', 'fullNameError');
      }

      // 2. Email Address
      const email = document.getElementById('emailAddress').value.trim();
      if (!email || !validateEmail(email)) {
        setError('emailAddress', 'emailAddressError', 'Please provide a valid professional or personal email address.');
        isValid = false;
      } else {
        clearError('emailAddress', 'emailAddressError');
      }

      // 3. Phone Number
      const phone = document.getElementById('phoneNumber').value.trim();
      if (!phone || !validatePhone(phone)) {
        setError('phoneNumber', 'phoneNumberError', 'Please enter a valid telephone number with area code.');
        isValid = false;
      } else {
        clearError('phoneNumber', 'phoneNumberError');
      }

      // 4. Provider Name or NPI
      const providerNpi = document.getElementById('providerNpi').value.trim();
      if (!providerNpi || providerNpi.length < 3) {
        setError('providerNpi', 'providerNpiError', 'Please provide your clinic name or 10-digit NPI identifier.');
        isValid = false;
      } else {
        clearError('providerNpi', 'providerNpiError');
      }

      // 5. Specialty
      const specialty = document.getElementById('specialtyInterest').value;
      if (!specialty) {
        setError('specialtyInterest', 'specialtyInterestError', 'Please select a clinical specialty or department.');
        isValid = false;
      } else {
        clearError('specialtyInterest', 'specialtyInterestError');
      }

      // 6. Date
      const dateVal = document.getElementById('appointmentDate').value;
      if (!dateVal) {
        setError('appointmentDate', 'appointmentDateError', 'Please select a preferred consultation date.');
        isValid = false;
      } else {
        clearError('appointmentDate', 'appointmentDateError');
      }

      // 7. Consent
      const consent = document.getElementById('privacyConsent').checked;
      const consentError = document.getElementById('privacyConsentError');
      if (!consent) {
        consentError.textContent = 'You must acknowledge the HIPAA privacy consent to proceed.';
        isValid = false;
      } else {
        consentError.textContent = '';
      }

      if (!isValid) {
        showToast('Incomplete Form', 'Please review and correct the highlighted fields.', 'error');
        return;
      }

      // Simulation of submission
      submitAppointmentBtn.classList.add('loading');
      submitAppointmentBtn.disabled = true;

      setTimeout(() => {
        submitAppointmentBtn.classList.remove('loading');
        submitAppointmentBtn.disabled = false;

        showToast(
          'Appointment Confirmed',
          `Thank you, ${fullName}. Your request for ${specialty} on ${dateVal} has been scheduled. A medical coordinator will reach out shortly.`,
          'success'
        );

        appointmentForm.reset();

        // Clear green validation styles
        ['fullName', 'emailAddress', 'phoneNumber', 'providerNpi', 'specialtyInterest', 'appointmentDate'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.classList.remove('is-valid');
        });
      }, 1200);
    });
  }

  // --- 12. GENERAL CONTACT FORM ---
  const generalContactForm = document.getElementById('generalContactForm');
  const sendContactBtn = document.getElementById('sendContactBtn');

  if (generalContactForm) {
    generalContactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      let valid = true;

      if (!name) {
        setError('contactName', 'contactNameError', 'Please provide your name.');
        valid = false;
      } else {
        clearError('contactName', 'contactNameError');
      }

      if (!email || !validateEmail(email)) {
        setError('contactEmail', 'contactEmailError', 'Please provide a valid email.');
        valid = false;
      } else {
        clearError('contactEmail', 'contactEmailError');
      }

      if (!message || message.length < 10) {
        setError('contactMessage', 'contactMessageError', 'Please include a message (minimum 10 characters).');
        valid = false;
      } else {
        clearError('contactMessage', 'contactMessageError');
      }

      if (!valid) return;

      sendContactBtn.classList.add('loading');
      sendContactBtn.disabled = true;

      setTimeout(() => {
        sendContactBtn.classList.remove('loading');
        sendContactBtn.disabled = false;

        showToast('Message Dispatched', `Thank you, ${name}. Your message has been sent to our clinical team.`, 'success');
        generalContactForm.reset();

        ['contactName', 'contactEmail', 'contactMessage'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.classList.remove('is-valid');
        });
      }, 1000);
    });
  }

  // --- 13. NEWSLETTER SUBSCRIPTION ---
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      const errorEl = document.getElementById('newsletterError');
      const email = emailInput.value.trim();

      if (!email || !validateEmail(email)) {
        errorEl.textContent = 'Please enter a valid email address.';
        return;
      }

      errorEl.textContent = '';
      showToast('Subscribed', 'You have been enrolled in the NexuraMed Clinical Research digest.', 'success');
      emailInput.value = '';
    });
  }

  // --- 14. BACK TO TOP BUTTON ---
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- 15. DYNAMIC FOOTER YEAR ---
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});

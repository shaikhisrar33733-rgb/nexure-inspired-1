/**
 * NexuraMed Healthcare & Medical Systems
 * Professional Corporate Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- 1. PRODUCT & ARTICLE DATA REPOSITORY ---
  const productsData = {
    'visi-vue': {
      title: 'VisiVue™ T100 Clinical Diagnostic Workstation',
      category: 'Diagnostic Workstation',
      regulatory: 'FDA 510(k) Cleared • CE Marked • Class II',
      image: 'assets/images/product-diagnostic.jpg',
      overview: 'The VisiVue™ T100 is an all-in-one multi-parameter clinical workstation engineered for intensive care units, emergency departments, and ambulatory triage. The system continuously tracks 12-lead ECG, pulse oximetry (SpO2), non-invasive blood pressure, and multi-channel temperature with automated EHR synchronization.',
      specs: [
        { label: 'Display', value: '24" Medical-Grade Anti-Microbial Touchscreen (1920x1080)' },
        { label: 'EHR Protocol', value: 'Native HL7 FHIR v4.0, DICOM 3.0, and Epic/Cerner API Sync' },
        { label: 'Battery Backup', value: 'Dual Hot-Swappable LiFePO4 cells (8 Hours Continuous Run)' },
        { label: 'Alerting', value: 'Configurable Clinical Threshold & Decompensation Alerts' },
        { label: 'Certifications', value: 'FDA 510(k) Cleared, CE Class IIb, ISO 13485:2016' }
      ]
    },
    'surgidex': {
      title: 'SurgiDex™ Xi Articulated Surgical Console',
      category: 'Surgical Robotics',
      regulatory: 'Class II Surgical Robotics Guidance System',
      image: 'assets/images/product-surgical.jpg',
      overview: 'Engineered for cardiothoracic, abdominal, and general laparoscopic procedures, SurgiDex™ Xi provides mechanical precision, sub-millimeter dexterity, and tremor filtration while delivering responsive tactile feedback to the operating surgeon.',
      specs: [
        { label: 'Optical System', value: '3D 4K Stereoscopic Optics with 12x Optical Magnification' },
        { label: 'Dexterity', value: '7-DOF Endowrist articulation with 540-degree rotation' },
        { label: 'Tremor Cancellation', value: 'High-frequency algorithmic filtration (0.1 mm precision)' },
        { label: 'Console Ergonomics', value: 'Motorized optical headrest, lumbar support & posture tracking' },
        { label: 'Regulatory', value: 'FDA 510(k) Cleared, ISO 13485:2016 Audited' }
      ]
    },
    'vitalink': {
      title: 'VitaLink™ BioSense Telemetry Hub & Biosensor',
      category: 'Ambulatory Telemetry',
      regulatory: 'FDA 510(k) Cleared • CMS CPT Code Eligible',
      image: 'assets/images/product-wearable.jpg',
      overview: 'VitaLink™ BioSense is a discreet, medical-grade wearable patch paired with an encrypted bedside hub. It tracks continuous vital parameters over a 14-day wear period, transmitting telemetry to nursing stations and remote clinical teams without restricting patient mobility.',
      specs: [
        { label: 'Biometrics', value: 'Single-lead ECG, Respiratory Rate, Core Skin Temp, SpO2 & Posture' },
        { label: 'Battery & Enclosure', value: '14-Day continuous single-use patch, IP68 waterproof' },
        { label: 'Connectivity', value: 'Secure BLE 5.3 + Dual-SIM Global Cellular Hub with Wi-Fi failover' },
        { label: 'Security', value: 'FIPS 140-2 Level 3, AES-256 end-to-end telemetry encryption' },
        { label: 'Reimbursement', value: 'CMS CPT 99453, 99454, 99457 & 99458 Compliant' }
      ]
    }
  };

  const articlesData = {
    'ai-cardiology': {
      title: 'The Role of Predictive Waveform Analysis in Early Cardiac Decompensation',
      category: 'Digital Diagnostics',
      date: 'October 18, 2026',
      readTime: '5 min read',
      author: 'Clinical Engineering Advisory Council',
      image: 'assets/images/blog-ai.jpg',
      content: `
        <p>In acute care environments such as Intensive Care Units and Emergency Departments, early identification of physiological instability is critical to clinical intervention. Traditional monitoring systems rely primarily on fixed-threshold alarms that sound only after parameters have crossed acute limits.</p>
        <h4 style="margin: 20px 0 10px 0; font-size: 1.15rem; color: var(--color-primary-dark);">Waveform Stability and Early Alerts</h4>
        <p>NexuraMed diagnostic stations evaluate micro-fluctuations in heart rate variability and ST-segment trends over continuous observation periods. By identifying micro-instabilities prior to acute episodes, clinical teams receive early notification to evaluate electrolytes, adjust medications, and assess underlying pathology.</p>
        <h4 style="margin: 20px 0 10px 0; font-size: 1.15rem; color: var(--color-primary-dark);">Integration with Hospital EHR Infrastructure</h4>
        <p>All waveform analytics synchronize with institutional electronic health record systems through standardized HL7 FHIR protocols, ensuring documented traceability without requiring manual transcription by nursing personnel.</p>
      `
    },
    'minimally-invasive': {
      title: 'Evaluating Ergonomics and Dexterity in Robotic-Assisted Microsurgery',
      category: 'Surgical Technologies',
      date: 'October 12, 2026',
      readTime: '7 min read',
      author: 'Department of Surgical Innovation',
      image: 'assets/images/blog-surgical.jpg',
      content: `
        <p>Minimally invasive surgical procedures require sustained manual precision over extended operative durations. One of the ongoing challenges in complex laparoscopic and thoracic interventions is physical fatigue experienced by the surgical team.</p>
        <h4 style="margin: 20px 0 10px 0; font-size: 1.15rem; color: var(--color-primary-dark);">Tremor Filtration and Scaled Motion</h4>
        <p>Systems like the SurgiDex™ Xi master console replicate hand motions at scaled ratios while filtering physiological tremors. This stabilization allows surgeons to execute delicate dissections around critical vascular structures with consistent precision.</p>
        <h4 style="margin: 20px 0 10px 0; font-size: 1.15rem; color: var(--color-primary-dark);">Operating Suite Integration</h4>
        <p>Adoption of articulated consoles requires careful spatial calibration within operating suites. NexuraMed biomedical engineers assist surgical facilities with spatial planning, credentialing simulations, and intraoperative equipment support.</p>
      `
    },
    'telehealth-revolution': {
      title: 'Transitioning from In-Ward Care to Continuous Ambulatory Telemetry',
      category: 'Remote Monitoring',
      date: 'October 05, 2026',
      readTime: '6 min read',
      author: 'Ambulatory Telemetry Working Group',
      image: 'assets/images/blog-telehealth.jpg',
      content: `
        <p>Managing chronic disease recovery requires consistent physiological visibility during the post-discharge transition. Patients recovering from acute cardiac or pulmonary interventions often experience silent decompensation in the days immediately following discharge.</p>
        <h4 style="margin: 20px 0 10px 0; font-size: 1.15rem; color: var(--color-primary-dark);">Adhesive Sensor Technology</h4>
        <p>Wearable biosensor patches like the VitaLink™ system bridge the hospital-to-home gap. Patients wear a low-profile, breathable patch that records single-lead ECG, respiratory rate, and temperature, transmitting encrypted data to clinical triage teams.</p>
        <h4 style="margin: 20px 0 10px 0; font-size: 1.15rem; color: var(--color-primary-dark);">Operational Implementation</h4>
        <p>Health systems implementing remote patient monitoring utilize standardized CMS CPT reimbursement codes. Automated alerts notify nurse triage centers of threshold excursions, allowing timely clinical consultations before re-hospitalization becomes necessary.</p>
      `
    }
  };

  // --- 2. NAVBAR SCROLL EFFECT & SCROLL-SPY ---
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  const handleNavScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let currentSectionId = '';
    const scrollPosition = window.scrollY + 110;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    const updateActiveLinks = (links) => {
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    };

    updateActiveLinks(navLinks);
    updateActiveLinks(mobileNavLinks);
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // --- 3. MOBILE NAVIGATION DRAWER CONTROLLER ---
  const hamburger = document.getElementById('hamburger');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerOverlay = document.getElementById('mobileDrawerOverlay');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');

  const openMobileDrawer = () => {
    if (!mobileDrawer) return;
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('active');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    if (mobileDrawerOverlay) {
      mobileDrawerOverlay.classList.add('active');
      mobileDrawerOverlay.setAttribute('aria-hidden', 'false');
    }
    document.body.style.overflow = 'hidden';
  };

  const closeMobileDrawer = () => {
    if (!mobileDrawer) return;
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('active');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (mobileDrawerOverlay) {
      mobileDrawerOverlay.classList.remove('active');
      mobileDrawerOverlay.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';
  };

  if (hamburger) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileDrawer.classList.contains('active');
      if (isOpen) {
        closeMobileDrawer();
      } else {
        openMobileDrawer();
      }
    });
  }

  if (mobileDrawerClose) {
    mobileDrawerClose.addEventListener('click', closeMobileDrawer);
  }

  if (mobileDrawerOverlay) {
    mobileDrawerOverlay.addEventListener('click', closeMobileDrawer);
  }

  // Close drawer when clicking links inside
  document.querySelectorAll('.mobile-nav-link, .mobile-cta-btn, .mobile-brand, .mobile-contact-row').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileDrawer();
    });
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('active')) {
      closeMobileDrawer();
    }
  });

  // --- 4. SMOOTH SCROLLING ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- 5. SUBTLE SCROLL REVEAL (INTERSECTION OBSERVER) ---
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
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // --- 6. FAQ ACCORDION ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          otherItem.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

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

  // --- 7. PRODUCT SPECIFICATIONS MODAL ---
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
          <td style="padding: 10px 14px; font-weight: 600; color: var(--color-primary-dark); font-size: 0.85rem; width: 35%; background: var(--color-bg-subtle);">${spec.label}</td>
          <td style="padding: 10px 14px; color: var(--color-text-muted); font-size: 0.86rem;">${spec.value}</td>
        </tr>
      `;
    });

    productModalBody.innerHTML = `
      <div style="margin-bottom: 18px;">
        <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-primary); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">${product.category}</span>
        <h2 style="font-size: 1.45rem; color: var(--color-primary-dark); margin-bottom: 6px;">${product.title}</h2>
        <p style="font-size: 0.82rem; color: var(--color-text-light); margin: 0;">${product.regulatory}</p>
      </div>

      <div style="border-radius: var(--radius-sm); overflow: hidden; margin-bottom: 20px; border: 1px solid var(--color-border); aspect-ratio: 16/9; background: var(--color-bg-subtle);">
        <img src="${product.image}" alt="${product.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <div style="margin-bottom: 22px;">
        <h4 style="font-size: 0.95rem; color: var(--color-primary-dark); margin-bottom: 6px;">Clinical Description</h4>
        <p style="font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6;">${product.overview}</p>
      </div>

      <div style="margin-bottom: 24px;">
        <h4 style="font-size: 0.95rem; color: var(--color-primary-dark); margin-bottom: 10px;">Technical & Operational Specifications</h4>
        <table style="width: 100%; border-collapse: collapse; border: 1px solid var(--color-border); border-radius: var(--radius-sm); overflow: hidden;">
          <tbody>${specsHtml}</tbody>
        </table>
      </div>

      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <a href="#appointment" class="btn btn-primary" onclick="closeModal('productModal')">
          <span>Request Equipment Trial</span>
        </a>
        <button class="btn btn-secondary" onclick="simulateBrochureDownload('${product.title}')">
          <span>Download Technical Data Sheet (PDF)</span>
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

  // --- 8. ARTICLE READER MODAL ---
  const articleModal = document.getElementById('articleModal');
  const articleModalBody = document.getElementById('articleModalBody');
  const closeArticleModalBtn = document.getElementById('closeArticleModal');

  const openArticleModal = (articleId) => {
    const article = articlesData[articleId];
    if (!article) return;

    articleModalBody.innerHTML = `
      <div style="margin-bottom: 18px;">
        <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-primary); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">${article.category}</span>
        <h2 style="font-size: clamp(1.3rem, 2.2vw, 1.75rem); color: var(--color-primary-dark); line-height: 1.3; margin-bottom: 10px;">
          ${article.title}
        </h2>
        <div style="display: flex; align-items: center; gap: 12px; font-size: 0.82rem; color: var(--color-text-light); flex-wrap: wrap;">
          <span>${article.author}</span>
          <span>•</span>
          <span>${article.date}</span>
          <span>•</span>
          <span>${article.readTime}</span>
        </div>
      </div>

      <div style="border-radius: var(--radius-sm); overflow: hidden; margin-bottom: 22px; aspect-ratio: 16/9; border: 1px solid var(--color-border);">
        <img src="${article.image}" alt="${article.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <div style="color: var(--color-text-main); font-size: 0.92rem; line-height: 1.7;">
        ${article.content}
      </div>

      <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <span style="font-size: 0.82rem; color: var(--color-text-muted);">NexuraMed Clinical Publications Archive</span>
        <button class="btn btn-secondary" onclick="closeModal('articleModal')">Close Article</button>
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

  window.simulateBrochureDownload = (title) => {
    showToast('Download Initiated', `Technical specification sheet for ${title} is downloading.`, 'success');
  };

  // --- 9. TOAST NOTIFICATIONS ---
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
    }, 5000);
  };

  const removeToast = (toast) => {
    toast.style.opacity = '0';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 200);
  };

  // --- 10. FORM VALIDATION & SUBMISSION ---
  const appointmentForm = document.getElementById('appointmentForm');
  const submitAppointmentBtn = document.getElementById('submitAppointmentBtn');

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
        setError('fullName', 'fullNameError', 'Please enter your full legal name.');
        isValid = false;
      } else {
        clearError('fullName', 'fullNameError');
      }

      // 2. Email
      const email = document.getElementById('emailAddress').value.trim();
      if (!email || !validateEmail(email)) {
        setError('emailAddress', 'emailAddressError', 'Please provide a valid professional email.');
        isValid = false;
      } else {
        clearError('emailAddress', 'emailAddressError');
      }

      // 3. Phone
      const phone = document.getElementById('phoneNumber').value.trim();
      if (!phone || !validatePhone(phone)) {
        setError('phoneNumber', 'phoneNumberError', 'Please enter a valid telephone number.');
        isValid = false;
      } else {
        clearError('phoneNumber', 'phoneNumberError');
      }

      // 4. Provider / Facility
      const providerNpi = document.getElementById('providerNpi').value.trim();
      if (!providerNpi || providerNpi.length < 3) {
        setError('providerNpi', 'providerNpiError', 'Please enter your institution name or NPI.');
        isValid = false;
      } else {
        clearError('providerNpi', 'providerNpiError');
      }

      // 5. Specialty / Solution
      const specialty = document.getElementById('specialtyInterest').value;
      if (!specialty) {
        setError('specialtyInterest', 'specialtyInterestError', 'Please select an equipment or service area.');
        isValid = false;
      } else {
        clearError('specialtyInterest', 'specialtyInterestError');
      }

      // 6. Date
      const dateVal = document.getElementById('appointmentDate').value;
      if (!dateVal) {
        setError('appointmentDate', 'appointmentDateError', 'Please select a preferred date.');
        isValid = false;
      } else {
        clearError('appointmentDate', 'appointmentDateError');
      }

      // 7. Privacy consent
      const consent = document.getElementById('privacyConsent').checked;
      const consentError = document.getElementById('privacyConsentError');
      if (!consent) {
        consentError.textContent = 'Please acknowledge the privacy consent to proceed.';
        isValid = false;
      } else {
        consentError.textContent = '';
      }

      if (!isValid) {
        showToast('Incomplete Form', 'Please review and complete the required fields.', 'error');
        return;
      }

      submitAppointmentBtn.classList.add('loading');
      submitAppointmentBtn.disabled = true;

      setTimeout(() => {
        submitAppointmentBtn.classList.remove('loading');
        submitAppointmentBtn.disabled = false;

        showToast(
          'Request Received',
          `Thank you, ${fullName}. Your inquiry for ${specialty} has been submitted. A clinical liaison will contact you within one business day.`,
          'success'
        );

        appointmentForm.reset();

        ['fullName', 'emailAddress', 'phoneNumber', 'providerNpi', 'specialtyInterest', 'appointmentDate'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.classList.remove('is-valid');
        });
      }, 1000);
    });
  }

  // --- 11. GENERAL CONTACT FORM ---
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
        setError('contactName', 'contactNameError', 'Please enter your name.');
        valid = false;
      } else {
        clearError('contactName', 'contactNameError');
      }

      if (!email || !validateEmail(email)) {
        setError('contactEmail', 'contactEmailError', 'Please enter a valid email.');
        valid = false;
      } else {
        clearError('contactEmail', 'contactEmailError');
      }

      if (!message || message.length < 8) {
        setError('contactMessage', 'contactMessageError', 'Please enter your inquiry details.');
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

        showToast('Message Submitted', `Thank you, ${name}. Your message has been routed to our team.`, 'success');
        generalContactForm.reset();

        ['contactName', 'contactEmail', 'contactMessage'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.classList.remove('is-valid');
        });
      }, 900);
    });
  }

  // --- 12. NEWSLETTER FORM ---
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
      showToast('Subscription Confirmed', 'You have been enrolled in the clinical bulletin.', 'success');
      emailInput.value = '';
    });
  }

  // --- 13. BACK TO TOP BUTTON ---
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

  // --- 14. FOOTER CURRENT YEAR ---
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});

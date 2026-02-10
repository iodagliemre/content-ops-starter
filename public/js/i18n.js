// Doveify Language Toggle - Client-side i18n
(function() {
  'use strict';

  const translations = {
    en: {
      // Hero section
      'hero.badge': 'EARLY ACCESS BETA • LIMITED SPOTS',
      'hero.title': 'All-in-One Clinic OS',
      'hero.subtitle': 'Run your clinic. Not spreadsheets.',
      'hero.text': 'Appointments, patients, billing — finally in one system. Start your free 14-day trial with done-for-you setup.',
      'hero.trust': '✓ Trusted by early-stage clinics  •  ✓ GDPR-ready  •  ✓ No long-term contracts',
      'hero.cta1': 'Start Free Trial',
      'hero.cta2': 'Book a 15-min Demo',

      // Why Choose Us
      'why.title': 'Why Choose Us',
      'why.subtitle': 'Built for clinics that want clarity, speed, and control — without complexity.',
      'why.card1.title': 'Secure by Design',
      'why.card1.text': 'Your patient data is protected. GDPR-ready, no compromises.',
      'why.card2.title': 'Zero Setup Headaches',
      'why.card2.text': 'We configure everything. You just log in and start.',
      'why.card3.title': 'Real-time Clarity',
      'why.card3.text': 'See appointments, patients & revenue — all in one view.',

      // Features
      'features.title': 'Everything you need to run your practice',
      'features.card1.title': 'Smart Appointments',
      'features.card1.text': 'Manage your calendar, send automatic reminders, reduce no-shows.',
      'features.card2.title': 'Patient Records',
      'features.card2.text': 'Digital patient files, treatment history, notes - all in one place.',
      'features.card3.title': 'Billing & Invoicing',
      'features.card3.text': 'Create invoices, track payments, manage your revenue.',

      // WhatsApp section
      'whatsapp.title': 'WhatsApp Automation Built-In',
      'whatsapp.subtitle': 'Instant replies. Smart reminders. Zero missed leads. Your WhatsApp works while you sleep — powered by AI.',
      'whatsapp.card1.title': 'Smart Reminders',
      'whatsapp.card1.text': 'Automated appointment reminders and confirmations via WhatsApp. Reduce no-shows by up to 40%.',
      'whatsapp.card2.title': 'AI-Powered Chatbot',
      'whatsapp.card2.text': '24/7 intelligent responses to patient inquiries. Book appointments, answer questions, and qualify leads automatically.',
      'whatsapp.card3.title': 'Follow-Up Sequences',
      'whatsapp.card3.text': 'Automated follow-up messages that convert leads into customers. Never miss an opportunity again.',
      'whatsapp.badge': 'Works with WhatsApp Business API • No extra apps needed • Setup in 24 hours',

      // Contact section
      'contact.title': 'Ready to simplify your clinic?',
      'contact.text': 'Have questions? We\'d love to hear from you.',

      // Navigation
      'nav.clinicos': 'Clinic OS (Beta)',
      'nav.brokersbrain': 'Broker\'s Brain',
      'nav.demo': 'Book a Demo',
      'nav.trial': 'Start Free Trial',

      // Footer
      'footer.tagline': 'Smart software for modern businesses | 📍 Istanbul • London • Dubai',
      'footer.products': 'Products',
      'footer.legal': 'Legal',
      'footer.privacy': 'Privacy Policy'
    },
    tr: {
      // Hero section
      'hero.badge': 'ERKEN ERİŞİM BETA • SINIRLI KONTENJAN',
      'hero.title': 'Hepsi Bir Arada Klinik Yönetim Sistemi',
      'hero.subtitle': 'Kliniğinizi yönetin. Tabloları değil.',
      'hero.text': 'Randevular, hastalar, faturalar — sonunda tek sistemde. 14 günlük ücretsiz denemenizi başlatın, kurulumu biz yapalım.',
      'hero.trust': '✓ Erken aşama klinikler güveniyor  •  ✓ GDPR uyumlu  •  ✓ Uzun vadeli sözleşme yok',
      'hero.cta1': 'Ücretsiz Deneyin',
      'hero.cta2': '15 Dakikalık Demo',

      // Why Choose Us
      'why.title': 'Neden Biz?',
      'why.subtitle': 'Netlik, hız ve kontrol isteyen klinikler için — karmaşıklık olmadan.',
      'why.card1.title': 'Güvenli Tasarım',
      'why.card1.text': 'Hasta verileriniz korunur. GDPR uyumlu, taviz yok.',
      'why.card2.title': 'Kurulum Derdi Yok',
      'why.card2.text': 'Her şeyi biz yapılandırıyoruz. Siz sadece giriş yapın ve başlayın.',
      'why.card3.title': 'Anlık Görünürlük',
      'why.card3.text': 'Randevular, hastalar ve gelir — tek ekranda.',

      // Features
      'features.title': 'Kliniğinizi yönetmek için ihtiyacınız olan her şey',
      'features.card1.title': 'Akıllı Randevu Yönetimi',
      'features.card1.text': 'Takviminizi yönetin, otomatik hatırlatmalar gönderin, randevu kaçırmalarını azaltın.',
      'features.card2.title': 'Hasta Kayıtları',
      'features.card2.text': 'Dijital hasta dosyaları, tedavi geçmişi, notlar — tek yerde.',
      'features.card3.title': 'Faturalama',
      'features.card3.text': 'Fatura oluşturun, ödemeleri takip edin, gelirinizi yönetin.',

      // WhatsApp section
      'whatsapp.title': 'Entegre WhatsApp Otomasyonu',
      'whatsapp.subtitle': 'Anında yanıtlar. Akıllı hatırlatmalar. Kaçan müşteri yok. WhatsApp\'ınız siz uyurken çalışır — yapay zeka destekli.',
      'whatsapp.card1.title': 'Akıllı Hatırlatmalar',
      'whatsapp.card1.text': 'WhatsApp üzerinden otomatik randevu hatırlatma ve onay. Randevu kaçırmalarını %40\'a kadar azaltın.',
      'whatsapp.card2.title': 'Yapay Zeka Destekli Chatbot',
      'whatsapp.card2.text': 'Hasta sorularına 7/24 akıllı yanıtlar. Otomatik randevu alma, soru yanıtlama ve müşteri değerlendirme.',
      'whatsapp.card3.title': 'Otomatik Takip Mesajları',
      'whatsapp.card3.text': 'Müşteri adaylarını müşteriye dönüştüren otomatik takip mesajları. Bir fırsatı daha asla kaçırmayın.',
      'whatsapp.badge': 'WhatsApp Business API ile çalışır • Ekstra uygulama gerekmez • 24 saatte kurulum',

      // Contact section
      'contact.title': 'Kliniğinizi sadeleştirmeye hazır mısınız?',
      'contact.text': 'Sorularınız mı var? Sizden haber almak isteriz.',

      // Navigation
      'nav.clinicos': 'Klinik OS (Beta)',
      'nav.brokersbrain': 'Broker\'s Brain',
      'nav.demo': 'Demo Talep Et',
      'nav.trial': 'Ücretsiz Deneyin',

      // Footer
      'footer.tagline': 'Modern işletmeler için akıllı yazılımlar | 📍 İstanbul • Londra • Dubai',
      'footer.products': 'Ürünler',
      'footer.legal': 'Yasal',
      'footer.privacy': 'Gizlilik Politikası'
    }
  };

  // Get current language from localStorage or default to 'en'
  function getCurrentLang() {
    return localStorage.getItem('doveify-lang') || 'en';
  }

  // Set language preference
  function setLang(lang) {
    localStorage.setItem('doveify-lang', lang);
  }

  // Translate all elements with data-i18n attribute
  function translatePage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update toggle button text
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      toggleBtn.textContent = lang === 'en' ? 'TR' : 'EN';
      toggleBtn.setAttribute('aria-label', lang === 'en' ? 'Türkçe\'ye geç' : 'Switch to English');
    }

    // Update html lang attribute
    document.documentElement.lang = lang;
  }

  // Toggle language
  function toggleLanguage() {
    const currentLang = getCurrentLang();
    const newLang = currentLang === 'en' ? 'tr' : 'en';
    setLang(newLang);
    translatePage(newLang);
  }

  // Create and inject the toggle button into header
  function createToggleButton() {
    // Wait for header to be available
    const checkHeader = setInterval(() => {
      const header = document.querySelector('.sb-component-header');
      if (!header) return;

      // Check if button already exists
      if (document.getElementById('lang-toggle')) {
        clearInterval(checkHeader);
        return;
      }

      // Find the secondary links container (where "Start Free Trial" button is)
      const secondaryLinksDesktop = header.querySelector('ul.lg\\:flex.ml-auto, ul.hidden.lg\\:flex.lg\\:items-center.ml-auto');
      
      if (secondaryLinksDesktop) {
        const li = document.createElement('li');
        li.className = 'py-2';
        
        const btn = document.createElement('button');
        btn.id = 'lang-toggle';
        btn.className = 'lang-toggle-btn';
        btn.textContent = getCurrentLang() === 'en' ? 'TR' : 'EN';
        btn.setAttribute('aria-label', getCurrentLang() === 'en' ? 'Türkçe\'ye geç' : 'Switch to English');
        btn.onclick = toggleLanguage;
        
        li.appendChild(btn);
        secondaryLinksDesktop.insertBefore(li, secondaryLinksDesktop.firstChild);
      }

      // Also add to mobile menu if it exists
      const mobileMenuLinks = header.querySelectorAll('.fixed ul');
      mobileMenuLinks.forEach(ul => {
        if (!ul.querySelector('#lang-toggle-mobile')) {
          const li = document.createElement('li');
          li.className = 'border-t py-4';
          
          const btn = document.createElement('button');
          btn.id = 'lang-toggle-mobile';
          btn.className = 'lang-toggle-btn lang-toggle-mobile';
          btn.textContent = getCurrentLang() === 'en' ? 'TR' : 'EN';
          btn.setAttribute('aria-label', getCurrentLang() === 'en' ? 'Türkçe\'ye geç' : 'Switch to English');
          btn.onclick = toggleLanguage;
          
          li.appendChild(btn);
          ul.appendChild(li);
        }
      });

      clearInterval(checkHeader);
    }, 100);
  }

  // Add data-i18n attributes to elements based on their content
  function addI18nAttributes() {
    const mappings = [
      // Hero
      { selector: '.sb-component-badge', text: 'EARLY ACCESS BETA', key: 'hero.badge' },
      { selector: 'h1, .h1', text: 'All-in-One Clinic OS', key: 'hero.title' },
      
      // Navigation links
      { selector: 'a, button', text: 'Clinic OS (Beta)', key: 'nav.clinicos' },
      { selector: 'a, button', text: 'Book a Demo', key: 'nav.demo' },
      { selector: 'a, button', text: 'Start Free Trial', key: 'nav.trial' },
      
      // Section titles and content will be matched by walking the DOM
    ];

    // Walk through all text nodes and tag translatable elements
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_ELEMENT,
      null,
      false
    );

    const textMappings = {
      // Exact text matches
      'All-in-One Clinic OS': 'hero.title',
      'Run your clinic. Not spreadsheets.': 'hero.subtitle',
      'Start Free Trial': 'hero.cta1',
      'Book a 15-min Demo': 'hero.cta2',
      'Why Choose Us': 'why.title',
      'Built for clinics that want clarity, speed, and control — without complexity.': 'why.subtitle',
      'Secure by Design': 'why.card1.title',
      'Your patient data is protected. GDPR-ready, no compromises.': 'why.card1.text',
      'Zero Setup Headaches': 'why.card2.title',
      'We configure everything. You just log in and start.': 'why.card2.text',
      'Real-time Clarity': 'why.card3.title',
      'See appointments, patients & revenue — all in one view.': 'why.card3.text',
      'Everything you need to run your practice': 'features.title',
      'Smart Appointments': 'features.card1.title',
      'Manage your calendar, send automatic reminders, reduce no-shows.': 'features.card1.text',
      'Patient Records': 'features.card2.title',
      'Digital patient files, treatment history, notes - all in one place.': 'features.card2.text',
      'Billing & Invoicing': 'features.card3.title',
      'Create invoices, track payments, manage your revenue.': 'features.card3.text',
      'WhatsApp Automation Built-In': 'whatsapp.title',
      'Instant replies. Smart reminders. Zero missed leads. Your WhatsApp works while you sleep — powered by AI.': 'whatsapp.subtitle',
      'Smart Reminders': 'whatsapp.card1.title',
      'Automated appointment reminders and confirmations via WhatsApp. Reduce no-shows by up to 40%.': 'whatsapp.card1.text',
      'AI-Powered Chatbot': 'whatsapp.card2.title',
      '24/7 intelligent responses to patient inquiries. Book appointments, answer questions, and qualify leads automatically.': 'whatsapp.card2.text',
      'Follow-Up Sequences': 'whatsapp.card3.title',
      'Automated follow-up messages that convert leads into customers. Never miss an opportunity again.': 'whatsapp.card3.text',
      'Works with WhatsApp Business API • No extra apps needed • Setup in 24 hours': 'whatsapp.badge',
      'Ready to simplify your clinic?': 'contact.title',
      'Clinic OS (Beta)': 'nav.clinicos',
      "Broker's Brain": 'nav.brokersbrain',
      'Book a Demo': 'nav.demo',
      'Products': 'footer.products',
      'Legal': 'footer.legal',
      'Privacy Policy': 'footer.privacy',
    };

    let node;
    while (node = walker.nextNode()) {
      const text = node.textContent?.trim();
      if (text && textMappings[text] && !node.getAttribute('data-i18n')) {
        // Check if this is a leaf node (no child elements with text)
        const hasChildText = Array.from(node.children).some(child => child.textContent?.trim());
        if (!hasChildText || node.children.length === 0) {
          node.setAttribute('data-i18n', textMappings[text]);
        }
      }
    }

    // Handle paragraphs with partial matches
    document.querySelectorAll('p').forEach(p => {
      const text = p.textContent?.trim();
      if (text && text.includes('Appointments, patients, billing')) {
        p.setAttribute('data-i18n', 'hero.text');
      }
      if (text && text.includes('Have questions?')) {
        p.setAttribute('data-i18n', 'contact.text');
      }
      if (text && text.includes('Smart software for modern')) {
        p.setAttribute('data-i18n', 'footer.tagline');
      }
    });

    // Handle trust badges line
    document.querySelectorAll('p').forEach(p => {
      const text = p.textContent?.trim();
      if (text && text.includes('Trusted by early-stage')) {
        p.setAttribute('data-i18n', 'hero.trust');
      }
    });

    // Handle badge elements
    document.querySelectorAll('.sb-component-badge span, [class*="badge"] span').forEach(span => {
      const text = span.textContent?.trim();
      if (text === 'EARLY ACCESS BETA • LIMITED SPOTS') {
        span.setAttribute('data-i18n', 'hero.badge');
      }
      if (text && text.includes('WhatsApp Business API')) {
        span.setAttribute('data-i18n', 'whatsapp.badge');
      }
    });
  }

  // Initialize
  function init() {
    // Add CSS for toggle button
    const style = document.createElement('style');
    style.textContent = `
      .lang-toggle-btn {
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        color: white;
        border: none;
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        margin-right: 8px;
        letter-spacing: 0.5px;
      }
      .lang-toggle-btn:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
      }
      .lang-toggle-mobile {
        width: 100%;
        padding: 12px;
        border-radius: 8px;
        margin: 0;
      }
    `;
    document.head.appendChild(style);

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
          addI18nAttributes();
          createToggleButton();
          translatePage(getCurrentLang());
        }, 500);
      });
    } else {
      setTimeout(() => {
        addI18nAttributes();
        createToggleButton();
        translatePage(getCurrentLang());
      }, 500);
    }

    // Re-apply on route changes (Next.js SPA navigation)
    let lastUrl = location.href;
    new MutationObserver(() => {
      const url = location.href;
      if (url !== lastUrl) {
        lastUrl = url;
        setTimeout(() => {
          addI18nAttributes();
          createToggleButton();
          translatePage(getCurrentLang());
        }, 500);
      }
    }).observe(document, { subtree: true, childList: true });
  }

  // Expose toggle function globally
  window.doveifyToggleLang = toggleLanguage;
  window.doveifySetLang = (lang) => {
    setLang(lang);
    translatePage(lang);
  };

  init();
})();

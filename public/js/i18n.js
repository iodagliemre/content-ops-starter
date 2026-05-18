// Doveify Language Toggle - Client-side i18n
(function() {
  'use strict';

  // Direct text-to-translation mapping (EN -> TR)
  const translations = {
    // HERO
    "OWN YOUR SYSTEM • SAAS ALTERNATIVE": "SİSTEMİNİZİN SAHİBİ OLUN • SAAS ALTERNATİFİ",
    "Digital Architecture For Your Business": "İşletmeniz İçin Dijital Mimari",
    "AI-powered, fully customized automation systems that you own. Stop renting software — build your own digital infrastructure.": "Yapay zekâ tabanlı, size ait ve tamamen özelleştirilmiş otomasyon sistemleri. Kiracı olmayı bırakın — kendi dijital altyapınızın sahibi olun.",
    "✓ Your data stays with you • ✓ GDPR-ready • ✓ No long-term contracts": "✓ Verileriniz sizde kalır • ✓ GDPR uyumlu • ✓ Uzun vadeli sözleşme yok",
    "Book a Demo": "Demo Talep Et",
    "Explore Solutions": "Çözümlerimizi İncele",

    // TURK ISG AI PROMO
    "AI Assistant for Occupational Health & Safety Professionals": "ISG Uzmanları İçin Yapay Zeka Asistanı",
    "Trained on Law No. 6331, Ministry checklists, and risk assessment guidelines. Designed for 80,000+ OHS professionals.": "6331 sayılı Kanun, Bakanlık kontrol listeleri ve risk değerlendirmesi kılavuzlarıyla eğitilmiş. 80.000+ ISG uzmanı için tasarlandı.",
    "Legislation Query": "Mevzuat Sorgulama",
    "Instant answers backed by legal sources": "Yasal dayanaklı anında yanıt",
    "Photo Analysis": "Fotoğraf Analizi",
    "On-site DÖF reports from field photos": "Sahadan DÖF raporu",
    "Practice Exam": "Deneme Sınavı",
    "2,700+ ÖSYM-style questions": "2.700+ ÖSYM sorusu",
    "Try for Free →": "Ücretsiz Deneyin →",
    "Learn More →": "Detaylı Bilgi →",

    // INDUSTRY SOLUTIONS
    "Industry Solutions": "Sektörel Çözümler",
    "Custom digital infrastructure designed for your specific industry workflows.": "Her sektöre özel, iş akışlarınıza göre tasarlanmış dijital altyapı.",
    "Healthcare & Clinics": "Sağlık & Klinik",
    "Clinic OS — Live": "Clinic OS — Aktif",
    "Appointments, patient tracking, treatment management, inventory, billing, and 24/7 patient communication via WhatsApp automation. Fully integrated clinic management system.": "Randevu, hasta takibi, tedavi yönetimi, stok, fatura ve WhatsApp ile 7/24 hasta iletişimi. Tam entegre klinik yönetim sistemi.",
    "Explore Clinic OS →": "Clinic OS'u İncele →",
    "Real Estate": "Emlak & Gayrimenkul",
    "Broker's Brain — Live": "Broker's Brain — Aktif",
    "Lead management, automatic portfolio matching, AI-powered WhatsApp responses, and instant client follow-up. Turn leads into closings without hiring.": "Lead yönetimi, otomatik portföy eşleştirme, yapay zekâ destekli WhatsApp yanıtları ve anlık müşteri takibi. İşe alım yapmadan satışları kapatın.",
    "Explore Broker's Brain →": "Broker's Brain'i İncele →",
    "OSGB Management": "OSGB Yönetimi",
    "OSGB Web — Live": "OSGB Web — Aktif",
    "Digital workflow platform for occupational health and safety companies. Employee tracking, document management, appointment scheduling, and reporting. Built specifically for OSGB companies in Turkey.": "OSGB'ler için dijital iş akışı platformu. Çalışan takibi, belge yönetimi, randevu sistemi ve raporlama. Türkiye'deki OSGB şirketleri için özel tasarlanmış.",
    "Explore OSGB Web →": "OSGB Web'i Keşfet →",
    "Education & Coaching": "Eğitim & Koçluk",
    "Student registration, lesson planning, progress tracking, and automated notification systems. Built for training centers and coaching businesses.": "Öğrenci kayıt, ders planlama, ilerleme takibi ve otomatik bildirim sistemleri. Eğitim merkezleri ve koçluk işletmeleri için.",
    "Logistics & Supply Chain": "Lojistik & Tedarik Zinciri",
    "Route optimization, fleet tracking, delay prediction, and automatic customer notifications via WhatsApp. Eliminate operational blind spots.": "Rota optimizasyonu, araç takibi, gecikme tahmini ve WhatsApp ile otomatik müşteri bilgilendirme. Operasyonel kör noktaları ortadan kaldırın.",
    "Manufacturing": "Üretim",
    "Production line tracking, quality control automation, inventory and supply chain management. Full factory floor visibility.": "Üretim hattı takibi, kalite kontrol otomasyonu, stok ve tedarik zinciri yönetimi. Tam fabrika görünürlüğü.",
    "Tourism & Hospitality": "Turizm & Otelcilik",
    "Reservation management, guest communication, operations automation. Streamline your hotel or tourism business.": "Rezervasyon yönetimi, misafir iletişimi, operasyon otomasyonu. Otel veya turizm işletmenizi sadeleştirin.",

    // DIGITAL TRANSFORMATION PHASES
    "The 4 Phases of Digital Transformation": "Dijital Dönüşümün 4 Fazı",
    "Data, processes, hardware, and decision mechanisms working together.": "Veri, süreç, donanım ve karar mekanizmalarının birlikte çalışması.",
    "Phase 1": "1. FAZ",
    "Algorithm Evolution": "Algoritma Gelişimi",
    "AI algorithms evolve, big data is processed, and predictive and analytical capabilities grow.": "Yapay zeka algoritmaları gelişir, büyük veri işlenir, tahminleme ve analiz kabiliyeti artar.",
    "Phase 2": "2. FAZ",
    "Adapting AI Tools to Systems": "AI Araçlarının Sistemlere Uyarlanması",
    "AI agent systems emerge, company-specific solutions are developed, and process-based automations go live.": "AI Agent sistemleri oluşur, şirkete özel çözümler geliştirilir, süreç bazlı otomasyonlar hayata geçirilir.",
    "Phase 3": "3. FAZ",
    "Hardware & AI Integration": "Donanım & AI Entegrasyonu",
    "IoT and smart sensors come online, real-time data flows are established, and the digital and physical worlds integrate.": "IoT ve akıllı sensörler devreye girer, gerçek zamanlı veri akışı sağlanır, dijital ve fiziksel dünya entegre olur.",
    "Phase 4": "4. FAZ",
    "Autonomous & Connected Systems": "Otonom & Bağlı Sistemler",
    "Systems communicate with each other, operations are managed autonomously, and strategy-aligned meaningful outcomes are produced.": "Sistemler kendi aralarında iletişim kurar, operasyonlar otonom şekilde yönetilir, stratejiye uygun anlamlı sonuçlar üretilir.",
    "Businesses that cannot measure cannot manage; businesses that cannot manage cannot compete.": "Ölçemeyen işletmeler yönetemez; yönetemeyen işletmeler rekabet edemez.",

    // HOW IT WORKS
    "How It Works": "Nasıl Çalışır?",
    "Your business's digital nervous system — a 4-layer integrated architecture that perceives, thinks, and takes action.": "İşletmenizin dijital sinir sistemi — algılayan, düşünen ve harekete geçen 4 katmanlı entegre mimari.",
    "01 — Data Collection": "01 — Veri Toplama",
    "All data from APIs, WhatsApp, IoT sensors, and emails collected in a centralized data hub. Smart parser engine processes unstructured data automatically.": "API, WhatsApp, IoT sensörler ve e-postalardan gelen tüm veriler merkezi veri havuzunda toplanır. Akıllı ayrıştırma motoru yapılandırılmamış veriyi otomatik işler.",
    "02 — AI Decision Center": "02 — AI Karar Merkezi",
    "AI analyzes incoming data, classifies urgency (critical vs routine), and assigns priority scores. Processing time under 30 seconds.": "Yapay zekâ gelen veriyi analiz eder, aciliyeti sınıflandırır ve öncelik puanı atar. İşleme süresi 30 saniyenin altında.",
    "03 — Autonomous Action": "03 — Otonom Aksiyon",
    "Smart task assignment to the right person or tool, Google Calendar integration for scheduling, WhatsApp notifications to clients and team members.": "Doğru kişi veya araca akıllı görev atama, Google Calendar entegrasyonu ve WhatsApp ile müşteri ve ekibe otomatik bildirim.",
    "04 — Command Dashboard": "04 — Yönetim Paneli",
    "Real-time monitoring, performance analytics, and manual override capability. Modern, responsive, and fully white-labeled to your brand.": "Gerçek zamanlı izleme, performans analitiği ve manuel müdahale imkânı. Modern, responsive ve tamamen sizin markanıza uygun.",

    // SAAS VS DOVEIFY
    "SaaS vs Doveify: Stop Being a Tenant": "SaaS vs Doveify: Kiracı Olmayı Bırakın",
    "Why pay rent for a generic software apartment when you can own a custom-built digital building on your own server?": "Kendi sunucunuzda size özel bir dijital bina inşa edebilecekken neden genel bir yazılım dairesine kira ödeyesiniz?",
    "❌ Tenant (SaaS)": "❌ Kiracı (SaaS)",
    "✅ Owner (Doveify)": "✅ Mülk Sahibi (Doveify)",
    "✕ Time-limited rental — you lose access when you stop paying": "✕ Süreli kiralama — ödemeyi durdurunca erişim kaybolur",
    "✕ Limited control — can't customize beyond what they allow": "✕ Kısıtlı kontrol — izin verdiklerinin ötesinde özelleştiremezsiniz",
    "✕ Recurring license fees — costs add up year after year": "✕ Tekrarlayan lisans ücretleri — maliyetler yıldan yıla birikir",
    "✕ Shared infrastructure — your data sits next to competitors": "✕ Paylaşılan altyapı — verileriniz rakiplerin yanında",
    "✓ Digital ownership — the system is 100% yours forever": "✓ Dijital mülkiyet — sistem sonsuza kadar %100 sizin",
    "✓ Full data sovereignty — your database is private, not shared": "✓ Tam veri egemenliği — veritabanınız özel, paylaşılmaz",
    "✓ Zero license cost — one-time investment, lifetime usage": "✓ Sıfır lisans maliyeti — tek seferlik yatırım, ömür boyu kullanım",
    "✓ Isolated server — your own DigitalOcean Droplet and Docker containers": "✓ İzole sunucu — kendi DigitalOcean Droplet ve Docker konteynerleriniz",

    // WHY DOVEIFY
    "Why Doveify?": "Neden Doveify?",
    "100% Ownership": "%100 Mülkiyet",
    "Don't rent software, own it. Your system belongs entirely to you. No vendor lock-in, no surprises.": "Yazılımı kiralamayın, sahibi olun. Sisteminiz tamamen size ait. Bağımlılık yok, sürpriz yok.",
    "Lifetime Usage": "Ömür Boyu Kullanım",
    "No monthly license fees. One-time investment with optional annual maintenance. The system keeps running forever.": "Aylık lisans ücreti yok. Opsiyonel yıllık bakım ile tek seferlik yatırım. Sistem sonsuza kadar çalışır.",
    "Full Customization": "Tam Özelleştirme",
    "The system adapts to your workflows, not the other way around. Every feature tailored to how you actually work.": "Sistem sizin iş akışlarınıza uyar, tersi değil. Her özellik gerçek çalışma şeklinize göre tasarlanır.",
    "Data Sovereignty": "Veri Egemenliği",
    "Your data stays on your own server. Not in shared SaaS pools. Each client gets isolated DigitalOcean Droplets and Docker containers.": "Verileriniz kendi sunucunuzda kalır. Paylaşılan SaaS havuzlarında değil. Her müşteri izole sunucu ortamına sahip olur.",

    // TECH STACK
    "Open-Source Technology Stack": "Açık Kaynak Teknoloji Motoru",
    "No black box. Fully transparent, modern, and scalable architecture.": "'Black box' yok. Tamamen şeffaf, modern ve ölçeklenebilir mimari.",

    // CONTACT
    "Meet Your Digital Architect": "Dijital Mimarınızla Tanışın",
    "Contact us to create a custom architecture plan for your business.": "İşletmenize özel mimari planı oluşturmak için bizimle iletişime geçin.",
    "Start Free Trial": "Ücretsiz Dene",

    // NAV & FOOTER
    "Clinic OS": "Clinic OS",
    "Broker's Brain": "Broker's Brain",
    "TURK ISG AI": "TURK ISG AI",
    "OSGB Web": "OSGB Web",
    "Contact": "İletişim",
    "Products": "Ürünler",
    "Legal": "Yasal",
    "Privacy Policy": "Gizlilik Politikası"
  };

  // Store original texts for reverting
  let originalTexts = new Map();

  // Get current language from localStorage or default to 'en'
  function getCurrentLang() {
    return localStorage.getItem('doveify-lang') || 'en';
  }

  // Set language preference
  function setLang(lang) {
    localStorage.setItem('doveify-lang', lang);
  }

  // Translate page to Turkish
  function translateToTurkish() {
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, li');
    
    elements.forEach(el => {
      // Skip elements with children that also have text (avoid double translation)
      if (el.children.length > 0) {
        const childTexts = Array.from(el.children).some(child => 
          child.textContent && child.textContent.trim().length > 0
        );
        if (childTexts) return;
      }
      
      const text = el.textContent?.trim();
      if (text && translations[text]) {
        // Store original text if not already stored
        if (!originalTexts.has(el)) {
          originalTexts.set(el, text);
        }
        el.textContent = translations[text];
      }
    });

    // Update html lang attribute
    document.documentElement.lang = 'tr';
  }

  // Revert to English (reload page to get original content)
  function translateToEnglish() {
    // Restore original texts if available
    if (originalTexts.size > 0) {
      originalTexts.forEach((originalText, el) => {
        if (el && el.isConnected) {
          el.textContent = originalText;
        }
      });
      document.documentElement.lang = 'en';
    } else {
      // If no stored texts, reload the page
      location.reload();
    }
  }

  // Main translate function
  function translatePage(lang) {
    if (lang === 'tr') {
      translateToTurkish();
    } else {
      translateToEnglish();
    }

    // Update toggle button text
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      toggleBtn.textContent = lang === 'en' ? 'TR' : 'EN';
      toggleBtn.setAttribute('aria-label', lang === 'en' ? 'Türkçe\'ye geç' : 'Switch to English');
    }

    const toggleBtnMobile = document.getElementById('lang-toggle-mobile');
    if (toggleBtnMobile) {
      toggleBtnMobile.textContent = lang === 'en' ? 'TR' : 'EN';
      toggleBtnMobile.setAttribute('aria-label', lang === 'en' ? 'Türkçe\'ye geç' : 'Switch to English');
    }
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
    const checkHeader = setInterval(() => {
      const header = document.querySelector('.sb-component-header');
      if (!header) return;

      if (document.getElementById('lang-toggle')) {
        clearInterval(checkHeader);
        return;
      }

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

  // Check if current page should have translation support
  function shouldTranslate() {
    const path = window.location.pathname;
    return path === '/' || path === '/index.html' || path === '' || path === '/clinic/' || path === '/clinic';
  }

  // Initialize
  function init() {
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

    function applyTranslations() {
      createToggleButton();
      if (shouldTranslate() && getCurrentLang() === 'tr') {
        translatePage('tr');
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(applyTranslations, 500);
      });
    } else {
      setTimeout(applyTranslations, 500);
    }

    let lastUrl = location.href;
    new MutationObserver(() => {
      const url = location.href;
      if (url !== lastUrl) {
        lastUrl = url;
        originalTexts.clear();
        setTimeout(applyTranslations, 500);
      }
    }).observe(document, { subtree: true, childList: true });
  }

  window.doveifyToggleLang = toggleLanguage;
  window.doveifySetLang = (lang) => {
    setLang(lang);
    translatePage(lang);
  };

  init();
})();

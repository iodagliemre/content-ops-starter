// Doveify Language Toggle - Client-side i18n
(function() {
  'use strict';

  // Direct text-to-translation mapping (EN -> TR)
  const translations = {
    // HERO
    "OWNERSHIP • EXPERTISE • SOLUTION PARTNERSHIP": "SAHİPLİK • UZMANLIK • ÇÖZÜM ORTAKLIĞI",
    "Digital Architecture That Belongs to Your Business": "İşletmenize Ait Dijital Mimari",
    "AI-powered automation systems designed specifically for you. We build together — your knowledge, data, and decision mechanisms reside in your infrastructure, under your control.": "Yapay zekâ destekli, size özel olarak tasarlanan otomasyon sistemleri. Birlikte kuruyoruz; bilgi birikiminiz, verileriniz ve karar mekanizmalarınız sizin altyapınızda — sizin kontrolünüzde.",
    "✓ Your data under your control • ✓ KVKK & GDPR compliant • ✓ Industry-specific solutions": "✓ Verileriniz sizin kontrolünüzde • ✓ KVKK & GDPR uyumlu • ✓ Sektöre özel çözümler",
    "Book a Demo": "Demo Talep Et",
    "Explore Solutions": "Çözümlerimizi Keşfedin",

    // MANIFESTO
    "Digital tools empower businesses — but real strength lies in preserving your own knowledge, operational intelligence, and strategic direction. Doveify stands alongside ready-made software solutions, not against them. Our difference is building a digital infrastructure that belongs to your business, keeping your critical processes, data, and decision mechanisms under your ownership. We are not a software vendor — we are your solution partner, building your digital architecture together and standing by you for long-term growth. Because we believe sustainable digital transformation begins not by handing over to a platform, but by taking ownership of your own system.": "Dijital araçlar işletmeleri güçlendirir — ama asıl güç, işletmenin kendi bilgi birikimini, operasyonel zekasını ve stratejik yönünü koruyabilmesindedir. Doveify, hazır yazılım çözümlerinin karşısında değil yanında durur. Farkımız, işletmenize ait bir dijital altyapı kurarak kritik süreçlerinizi, verilerinizi ve karar mekanizmalarınızı sizin sahipliğinizde tutmamızdır. Biz bir yazılım satıcısı değil, dijital mimarinizi birlikte inşa eden ve uzun vadeli büyümenizde yanınızda kalan çözüm ortağınızız. Çünkü inanıyoruz ki sürdürülebilir dijital dönüşüm, bir platforma teslim olmakla değil, kendi sisteminize sahip çıkmakla başlar.",

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

    // SAAS VS DOVEIFY - RIGHT MODEL, RIGHT TIME
    "Right Model, Right Time": "Doğru Model, Doğru Zamanda",
    "SaaS is a tool, ownership is a strategy. The question isn't which is better — it's which fits your business needs today and tomorrow.": "SaaS bir araçtır, sahiplik bir stratejidir. Soru hangisinin daha iyi olduğu değil — işletmenizin bugünkü ve yarınki ihtiyacına hangisinin uyduğu.",
    "Ready-Made Software (SaaS) Approach": "Hazır Yazılım (SaaS) Yaklaşımı",
    "Doveify Ownership Approach": "Doveify Sahiplik Yaklaşımı",
    "This model may be the right choice when:": "Bu model şu durumlarda doğru tercih olabilir:",
    "This model provides strategic advantage when:": "Bu model şu durumlarda stratejik avantaj sağlar:",
    "→ You want to quickly digitize standard business processes": "→ Standart iş süreçlerini hızla dijitalleştirmek istiyorsunuz",
    "→ You're testing the market with low initial costs": "→ Düşük başlangıç maliyetiyle pazarı test ediyorsunuz",
    "→ Small team, limited IT resources — you want to leave maintenance to the provider": "→ Küçük ekip, sınırlı IT kaynağı — bakım ve güncellemeyi sağlayıcıya bırakmak istiyorsunuz",
    "→ You don't yet need deep industry-specific customization": "→ Sektöre özel derin özelleştirmeye henüz ihtiyaç duymuyorsunuz",
    "→ You're looking for a short-term or seasonal solution": "→ Kısa vadeli veya dönemsel bir çözüm arıyorsunuz",
    "✓ You want full control and customization in critical processes": "✓ Kritik iş süreçlerinizde tam kontrol ve özelleştirme istiyorsunuz",
    "✓ You're in a regulation-heavy industry — data sovereignty is mandatory": "✓ Regülasyon ağırlıklı bir sektördesiniz — veri egemenliği zorunluluk",
    "✓ You want to preserve your institutional memory and operational intelligence in your own system": "✓ Kurumsal hafızanızı ve operasyonel zekanızı kendi sisteminizde korumak istiyorsunuz",
    "✓ You're thinking long-term strategic investment — update and roadmap decisions in your hands": "✓ Uzun vadeli stratejik yatırım düşünüyorsunuz — güncelleme ve yol haritası kararları sizin elinizde olsun",
    "✓ Your workflows are industry-specific, standard platform limits aren't enough": "✓ İş akışlarınız sektöre özel, standart bir platformun sunduğu sınırlar yetmiyor",
    "Doveify stands on the ownership side — because we believe businesses should not hand over strategic control of their most critical processes to another provider.": "Doveify, sahiplik tarafında yer alır — çünkü inanıyoruz ki işletmelerin en kritik süreçlerinde stratejik kontrolü başka bir sağlayıcıya devretmemesi gerekir.",

    // WHY DOVEIFY
    "WHY DOVEIFY": "NEDEN DOVEİFY",
    "Why Doveify?": "Neden Doveify?",
    "100% Ownership": "%100 Sahiplik",
    "Your system belongs entirely to you. Your critical business processes and data always remain under your control.": "Sisteminiz tamamen size ait. Kritik iş süreçleriniz ve verileriniz her zaman sizin kontrolünüzde kalır.",
    "Long-Term Value": "Uzun Vadeli Değer",
    "One-time investment with optional annual maintenance and support. Your system evolves with you as it grows.": "Tek seferlik yatırım, isteğe bağlı yıllık bakım ve destek. Sisteminiz büyüdükçe sizinle birlikte evrilir.",
    "Industry-Specific Solutions": "Sektöre Özel Çözümler",
    "Not generic tools, but systems focused on the real problems of your industry. Field-tested solutions in healthcare, occupational safety, real estate, and OSGB management.": "Genel araçlar değil, sektörünüzün gerçek sorunlarına odaklanan sistemler. Sağlık, iş güvenliği, gayrimenkul ve OSGB yönetiminde sahada test edilmiş çözümler.",
    "Data Sovereignty": "Veri Egemenliği",
    "Your data on your own server, under your control only. Isolated infrastructure for each business — no shared environment.": "Verileriniz kendi sunucunuzda, yalnızca sizin kontrolünüzde. Her işletmeye izole altyapı — paylaşılan ortam yok.",
    "Long-Term Solution Partnership": "Uzun Vadeli Çözüm Ortaklığı",
    "We don't sell software and leave. We build your digital infrastructure and support it sustainably.": "Bir yazılım satıp ayrılmıyoruz. Dijital altyapınızı kuruyoruz ve sürdürülebilir şekilde destekliyoruz.",

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
    "SaaS Products": "SaaS Ürünler",
    "Legal": "Yasal",
    "Privacy Policy": "Gizlilik Politikası",
    "Start Free Trial": "Demo Talep Et",
    "DOVEIFY AI SOLUTIONS LTD. | Your business's digital solution partner | 📍 Istanbul • London": "DOVEIFY AI SOLUTIONS LTD. | İşletmenizin dijital çözüm ortağı | 📍 Istanbul • London"
  };

  // Store original texts for reverting
  let originalTexts = new Map();

  // Get current language from localStorage or default to 'tr' (Turkish is now default)
  function getCurrentLang() {
    return localStorage.getItem('doveify-lang') || 'tr';
  }

  // Set language preference
  function setLang(lang) {
    localStorage.setItem('doveify-lang', lang);
  }

  // Translate page to Turkish (restore original Turkish content)
  function translateToTurkish() {
    // Restore original Turkish texts if available
    if (originalTexts.size > 0) {
      originalTexts.forEach((originalText, el) => {
        if (el && el.isConnected) {
          el.textContent = originalText;
        }
      });
      originalTexts.clear();
    }
    document.documentElement.lang = 'tr';
  }

  // Translate to English (uses translations object TR → EN)
  function translateToEnglish() {
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, li, blockquote, strong, em');

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
        // Store original Turkish text if not already stored
        if (!originalTexts.has(el)) {
          originalTexts.set(el, text);
        }
        el.textContent = translations[text];
      }
    });

    document.documentElement.lang = 'en';
  }

  // Main language switch function
  function switchLanguage(lang) {
    if (lang === 'tr') {
      translateToTurkish();
    } else {
      translateToEnglish();
    }

    // Update toggle button text (show opposite language as option)
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      toggleBtn.textContent = lang === 'tr' ? 'EN' : 'TR';
      toggleBtn.setAttribute('aria-label', lang === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç');
    }

    const toggleBtnMobile = document.getElementById('lang-toggle-mobile');
    if (toggleBtnMobile) {
      toggleBtnMobile.textContent = lang === 'tr' ? 'EN' : 'TR';
      toggleBtnMobile.setAttribute('aria-label', lang === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç');
    }
  }

  // Toggle language
  function toggleLanguage() {
    const currentLang = getCurrentLang();
    const newLang = currentLang === 'tr' ? 'en' : 'tr';
    setLang(newLang);
    switchLanguage(newLang);
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
        btn.textContent = getCurrentLang() === 'tr' ? 'EN' : 'TR';
        btn.setAttribute('aria-label', getCurrentLang() === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç');
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
          btn.textContent = getCurrentLang() === 'tr' ? 'EN' : 'TR';
          btn.setAttribute('aria-label', getCurrentLang() === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç');
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
        background: rgba(15, 23, 42, 0.06);
        color: #374151;
        border: 1px solid rgba(15, 23, 42, 0.12);
        width: 40px;
        height: 40px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 9999px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        margin-right: 8px;
        letter-spacing: 0.02em;
      }
      .lang-toggle-btn:hover {
        background: rgba(37, 99, 235, 0.08);
        border-color: rgba(37, 99, 235, 0.25);
        color: #2563eb;
      }
      .lang-toggle-mobile {
        width: 100%;
        height: auto;
        padding: 12px;
        border-radius: 9999px;
        margin: 0;
      }
    `;
    document.head.appendChild(style);

    function applyTranslations() {
      createToggleButton();
      // Content is Turkish by default, only translate if user preference is English
      if (shouldTranslate() && getCurrentLang() === 'en') {
        switchLanguage('en');
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
    switchLanguage(lang);
  };

  init();
})();

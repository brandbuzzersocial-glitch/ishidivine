/* ==========================================================================
   Divine Oracle Tarot — Interactive App Scripts
   Author: Antigravity AI
   ========================================================================== */

// ==========================================
// Global Window Functions (Instantly Available for Inline onclick Triggers)
// ==========================================

// 0. Enter Sanctuary (Transitions from 3D Intro Portal overlay to Main Site)
window.enterSanctuary = function() {
  const site = document.getElementById('site') || document.getElementById('home') || document.body;
  window.scrollTo({ top: site.offsetTop, behavior: 'smooth' });
};

// Major Arcana Cards Data for Interactive Drawer
const DAILY_TAROT_CARDS = [
  {
    num: 'XVII',
    title: 'THE STAR',
    keywords: 'HOPE • RENEWAL • DIVINE INSPIRATION',
    desc: 'The Star shines upon your path today, signaling a period of deep healing, restored hope, and spiritual renewal. Trust that the universe is aligning opportunities to fulfill your highest aspirations.',
    img: 'images/tarot_star.png'
  },
  {
    num: 'XVIII',
    title: 'THE MOON',
    keywords: 'INTUITION • ILLUSION • SUBCONSCIOUS TRUTHS',
    desc: 'The Moon invites you to step beyond surface illusions and trust your deep intuitive inner voice. Subconscious blockages are coming to light to be released and transmuted.',
    img: 'images/tarot_moon.png'
  },
  {
    num: 'XIX',
    title: 'THE SUN',
    keywords: 'ABUNDANCE • VITALITY • RADIANT SUCCESS',
    desc: 'The Sun radiates warmth, clarity, and joyful alignment into your reality. A powerful surge of positive energy is supporting your financial, personal, and spiritual endeavors.',
    img: 'images/mystical_crystals.png'
  },
  {
    num: 'III',
    title: 'THE EMPRESS',
    keywords: 'FERTILITY • CREATIVE FLOW • NURTURING ABUNDANCE',
    desc: 'The Empress embodiment reminds you that your manifestations are ready to bloom. Nurture your creative ideas and allow love and natural prosperity to surround you.',
    img: 'images/ishita_portrait.png'
  },
  {
    num: 'X',
    title: 'WHEEL OF FORTUNE',
    keywords: 'KARMIC TURNING POINT • DESTINY • EXPANSION',
    desc: 'The Wheel of Fortune shifts in your favor! Stagnant cycles are breaking as divine synchronicity steps in to open unexpected doorways of progress.',
    img: 'images/tarot_star.png'
  },
  {
    num: 'VI',
    title: 'THE LOVERS',
    keywords: 'HARMONIOUS ALIGNMENT • SOUL CHOICE • UNITY',
    desc: 'The Lovers card highlights deep emotional resonance and choice aligned with your highest values. Relationship bonds and inner balance are illuminated today.',
    img: 'images/tarot_moon.png'
  },
  {
    num: 'I',
    title: 'THE MAGICIAN',
    keywords: 'MANIFESTATION • ALCHEMY • PERSONAL POWER',
    desc: 'The Magician reminds you that you hold all the elements needed to manifest your intentions into tangible physical form. Channel your focus with intention.',
    img: 'images/mystical_crystals.png'
  }
];

// Interactive Daily Card Draw
window.drawDailyCard = function(cardIdx) {
  const deckContainer = document.getElementById('oracle-deck-container');
  const revealPanel = document.getElementById('oracle-reveal-panel');
  const cardImg = document.getElementById('drawn-card-img');
  const cardNum = document.getElementById('drawn-card-num');
  const cardTitle = document.getElementById('drawn-card-title');
  const cardKeywords = document.getElementById('drawn-card-keywords');
  const cardDesc = document.getElementById('drawn-card-reading');

  const cardData = DAILY_TAROT_CARDS[cardIdx % DAILY_TAROT_CARDS.length];

  if (cardImg) cardImg.src = cardData.img;
  if (cardNum) cardNum.textContent = cardData.num;
  if (cardTitle) cardTitle.textContent = cardData.title;
  if (cardKeywords) cardKeywords.textContent = cardData.keywords;
  if (cardDesc) cardDesc.textContent = cardData.desc;

  if (deckContainer) deckContainer.style.display = 'none';
  if (revealPanel) {
    revealPanel.classList.remove('hidden');
    revealPanel.style.display = 'flex';
  }
};

window.shuffleDailyDeck = function() {
  const fanCards = document.querySelectorAll('.fan-card');
  fanCards.forEach((card) => {
    card.style.transition = 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    card.style.transform = `rotate(${(Math.random() - 0.5) * 60}deg) translate(${(Math.random() - 0.5) * 40}px, ${(Math.random() - 0.5) * 40}px)`;
    setTimeout(() => {
      card.style.transform = '';
    }, 450);
  });
};

window.resetDailyDeck = function() {
  const deckContainer = document.getElementById('oracle-deck-container');
  const revealPanel = document.getElementById('oracle-reveal-panel');
  if (deckContainer) deckContainer.style.display = 'flex';
  if (revealPanel) {
    revealPanel.classList.add('hidden');
    revealPanel.style.display = 'none';
  }
};

// 7 Chakra Diagnostic Data & Engine
const CHAKRA_DIAG_DATA = {
  sah: {
    name: 'Sahasrara • Crown Chakra',
    color: '#9d4edd',
    symptoms: ['Feeling disconnected from purpose', 'Lack of spiritual direction', 'Mental fatigue & cynicism'],
    remedy: 'High-frequency crystal alignment, crown aura clearing, and cosmic guidance channeling.'
  },
  ajn: {
    name: 'Ajna • Third Eye Chakra',
    color: '#4361ee',
    symptoms: ['Confusion in decision making', 'Overthinking & anxiety', 'Blocked intuition'],
    remedy: 'Deep tarot intuitive reading, third-eye activation remedies, and subconscious block clearing.'
  },
  vis: {
    name: 'Vishuddha • Throat Chakra',
    color: '#00b4d8',
    symptoms: ['Fear of expressing true feelings', 'Suppressed voice in relationships', 'Frequent throat tension'],
    remedy: 'Voice-note vibrational reading, truth alignment affirmations, and emotional release work.'
  },
  ana: {
    name: 'Anahata • Heart Chakra',
    color: '#00e676',
    symptoms: ['Lingering emotional heartbreak', 'Difficulty trusting partner', 'Guarded energy field'],
    remedy: 'Cord-cutting healing ritual, love frequency realignment, and inner child trauma clearing.'
  },
  man: {
    name: 'Manipura • Solar Plexus Chakra',
    color: '#ffd700',
    symptoms: ['Low self-confidence', 'Procrastination & lack of drive', 'Boundary vulnerabilities'],
    remedy: 'Personal power activation coaching, solar energy cleansing, and manifestation ritual work.'
  },
  sva: {
    name: 'Swadhisthana • Sacral Chakra',
    color: '#ff6d00',
    symptoms: ['Creative blockages', 'Emotional volatility', 'Resistance to passion & joy'],
    remedy: 'Sacral aura balancing, emotional flow realignment, and creative manifestation rituals.'
  },
  mul: {
    name: 'Muladhara • Root Chakra',
    color: '#ff1744',
    symptoms: ['Financial anxiety & fear', 'Feeling ungrounded & restless', 'Instability in life foundations'],
    remedy: 'Vastu space correction, earth grounding remedies, and foundational security clearing.'
  }
};

window.switchChakraDiag = function(chakraKey) {
  const tabs = document.querySelectorAll('.chakra-tab');
  const container = document.getElementById('chakra-diag-content');
  
  tabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.getAttribute('data-chakra') === chakraKey) {
      tab.classList.add('active');
    }
  });

  const data = CHAKRA_DIAG_DATA[chakraKey] || CHAKRA_DIAG_DATA.sah;

  if (container) {
    container.style.opacity = '0';
    container.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
      container.innerHTML = `
        <div class="c-diag-box">
          <h4 style="color:${data.color}"><i class="fas fa-exclamation-triangle"></i> Signs of Imbalance</h4>
          <ul>
            ${data.symptoms.map(s => `<li><i class="fas fa-angle-right" style="color:${data.color}"></i> ${s}</li>`).join('')}
          </ul>
        </div>
        <div class="c-diag-box">
          <h4><i class="fas fa-magic" style="color:var(--gold-primary)"></i> Ishita's Healing Alignment</h4>
          <p style="font-family:var(--font-heading); font-size:1.15rem; color:#e2e8f0; line-height:1.6;">${data.remedy}</p>
          <button class="btn btn-gold-filled" style="align-self:flex-start; margin-top:0.8rem;" onclick="openBookingModal('${data.name} Alignment', 'Chakra Healing')">
            ALIGN THIS CHAKRA <i class="fab fa-whatsapp"></i>
          </button>
        </div>
      `;
      container.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
    }, 150);
  }
};

// 1. Open Booking Modal
window.openBookingModal = function(serviceName, formatName) {
  const bookingModal = document.getElementById('booking-modal');
  const serviceInput = document.getElementById('modal-service-selected');
  const formatInput = document.getElementById('modal-format-selected');
  
  if (bookingModal) {
    if (serviceInput) serviceInput.value = serviceName || 'General Consultation';
    if (formatInput) formatInput.value = formatName || 'Reading Session';
    bookingModal.classList.add('active');
    document.body.classList.add('no-scroll');
  }
};

// 2. Close Booking Modal
window.closeBookingModal = function() {
  const bookingModal = document.getElementById('booking-modal');
  const bookingForm = document.getElementById('booking-funnel-form');
  if (bookingModal) {
    bookingModal.classList.remove('active');
    document.body.classList.remove('no-scroll');
    if (bookingForm) bookingForm.reset();
  }
};

// 3. Toggle Biography Modal
window.toggleBioModal = function(show) {
  const bioModal = document.getElementById('bio-modal');
  if (bioModal) {
    if (show) {
      bioModal.classList.add('active');
      document.body.classList.add('no-scroll');
    } else {
      bioModal.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  }
};

// 4. Filter Services Tabs
window.filterServices = function(category) {
  const tabButtons = document.querySelectorAll('.services-tabs .tab-btn');
  const serviceBlocks = document.querySelectorAll('.services-category-block');
  
  tabButtons.forEach(btn => {
    btn.classList.remove('active');
    const btnText = btn.innerText.toLowerCase();
    if (
      (category === 'all' && btnText.includes('all')) ||
      (category === 'whispered' && btnText.includes('whispered')) ||
      (category === 'talk' && btnText.includes('talk')) ||
      (category === 'vision' && btnText.includes('vision')) ||
      (category === 'live' && btnText.includes('live'))
    ) {
      btn.classList.add('active');
    }
  });
  
  serviceBlocks.forEach(block => {
    block.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    const blockCat = block.getAttribute('data-category');
    if (category === 'all' || blockCat === category) {
      block.classList.remove('hidden');
      setTimeout(() => {
        block.style.opacity = '1';
        block.style.transform = 'translateY(0)';
      }, 50);
    } else {
      block.style.opacity = '0';
      block.style.transform = 'translateY(15px)';
      setTimeout(() => {
        block.classList.add('hidden');
      }, 400);
    }
  });
};

// 5. Form Submission & WhatsApp Redirect
window.handleFormSubmission = function(event) {
  if (event) event.preventDefault();
  
  const serviceInput = document.getElementById('modal-service-selected');
  const formatInput = document.getElementById('modal-format-selected');
  const nameEl = document.getElementById('client-name');
  const dobEl = document.getElementById('client-dob');
  const tobEl = document.getElementById('client-tob');
  const pobEl = document.getElementById('client-pob');
  const partnerEl = document.getElementById('partner-details');
  const questionsEl = document.getElementById('client-questions');
  
  const service = serviceInput ? serviceInput.value : 'General Consultation';
  const format = formatInput ? formatInput.value : 'Reading Session';
  const name = (nameEl && nameEl.value) ? nameEl.value : 'Valued Client';
  const dob = (dobEl && dobEl.value) ? dobEl.value : 'Not provided';
  const tob = (tobEl && tobEl.value) ? tobEl.value : 'Not provided';
  const birthplace = (pobEl && pobEl.value) ? pobEl.value : 'Not provided';
  const partner = (partnerEl && partnerEl.value) ? partnerEl.value : 'None';
  const questions = (questionsEl && questionsEl.value) ? questionsEl.value : 'General intuitive guidance';
  
  let formattedDob = dob;
  try {
    const dateParts = dob.split('-');
    if (dateParts.length === 3) {
      const dateObj = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
      formattedDob = dateObj.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    }
  } catch(err) {
    formattedDob = dob;
  }
  
  const whatsappNumber = '919999988888'; // Replace with Ishita's actual WhatsApp Business number
  const message = `🔮 *NEW SACRED BOOKING REQUEST* 🔮

👤 *Client Name:* ${name}
📅 *Date of Birth:* ${formattedDob}
⏰ *Birth Time:* ${tob}
📍 *Birthplace:* ${birthplace}

📖 *Selected Service:* ${service}
🎭 *Reading Format:* ${format}

👥 *Relational Connection Details:* ${partner}

❓ *Subconscious Blockages / Questions:*
"${questions}"

✨ _Please confirm my booking slot and share payment coordinates._ ✨`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
  window.closeBookingModal();
};

document.addEventListener('DOMContentLoaded', () => {

  // Auto-skip intro portal overlay if already entered in current session
  try {
    if (sessionStorage.getItem('divine_sanctuary_entered') === 'true') {
      const introPortal = document.getElementById('spiritual-intro-portal');
      if (introPortal) {
        introPortal.style.display = 'none';
      }
    }
  } catch(e) {}

  // Initialize Default 7-Chakra Explorer State
  if (window.switchChakraDiag) {
    window.switchChakraDiag('sah');
  }

  // Celestial Stardust Cursor Canvas Particle System
  const sdCanvas = document.getElementById('stardust-canvas');
  if (sdCanvas && window.innerWidth > 768) {
    const sdCtx = sdCanvas.getContext('2d');
    let sdWidth = sdCanvas.width = window.innerWidth;
    let sdHeight = sdCanvas.height = window.innerHeight;
    
    window.addEventListener('resize', () => {
      sdWidth = sdCanvas.width = window.innerWidth;
      sdHeight = sdCanvas.height = window.innerHeight;
    });
    
    const sparks = [];
    window.addEventListener('mousemove', (e) => {
      for (let i = 0; i < 2; i++) {
        sparks.push({
          x: e.clientX + (Math.random() - 0.5) * 12,
          y: e.clientY + (Math.random() - 0.5) * 12,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.4,
          radius: Math.random() * 2 + 0.8,
          alpha: 1,
          color: Math.random() > 0.5 ? '#ffd97d' : '#00f0ff'
        });
      }
    });

    function renderStardust() {
      sdCtx.clearRect(0, 0, sdWidth, sdHeight);
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= 0.025;
        if (s.alpha <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        sdCtx.beginPath();
        sdCtx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        sdCtx.fillStyle = s.color;
        sdCtx.globalAlpha = s.alpha;
        sdCtx.shadowBlur = 8;
        sdCtx.shadowColor = s.color;
        sdCtx.fill();
      }
      requestAnimationFrame(renderStardust);
    }
    renderStardust();
  }
  
  // ==========================================
  // 0. 3D Sacred Spiritual Portal Galaxy System
  // ==========================================
  const portalCanvas = document.getElementById('portal-galaxy-canvas');
  if (portalCanvas) {
    const pCtx = portalCanvas.getContext('2d');
    let pWidth, pHeight;
    
    function resizePortalCanvas() {
      pWidth = portalCanvas.width = window.innerWidth;
      pHeight = portalCanvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizePortalCanvas);
    resizePortalCanvas();
    
    const portalParticles = [];
    const particleCount = 220;
    
    for (let i = 0; i < particleCount; i++) {
      portalParticles.push({
        x: (Math.random() - 0.5) * pWidth * 1.8,
        y: (Math.random() - 0.5) * pHeight * 1.8,
        z: Math.random() * 1000,
        radius: Math.random() * 2.2 + 0.6,
        color: Math.random() > 0.45 ? '#00f0ff' : (Math.random() > 0.4 ? '#ffd97d' : (Math.random() > 0.5 ? '#a855f7' : '#ffffff'))
      });
    }
    
    function animatePortalGalaxy() {
      const introPortal = document.getElementById('spiritual-intro-portal');
      if (introPortal && introPortal.style.display === 'none') return;
      
      pCtx.clearRect(0, 0, pWidth, pHeight);
      const cx = pWidth / 2;
      const cy = pHeight / 2;
      
      for (let i = 0; i < particleCount; i++) {
        const p = portalParticles[i];
        p.z -= 2.2;
        if (p.z <= 0) p.z = 1000;
        
        const k = 420 / p.z;
        const px = p.x * k + cx;
        const py = p.y * k + cy;
        
        if (px >= 0 && px <= pWidth && py >= 0 && py <= pHeight) {
          const size = Math.max(0.2, (1 - p.z / 1000) * p.radius * 2.8);
          const alpha = Math.min(1, (1 - p.z / 1000) * 0.95);
          pCtx.beginPath();
          pCtx.arc(px, py, size, 0, Math.PI * 2);
          pCtx.fillStyle = p.color;
          pCtx.globalAlpha = alpha;
          pCtx.shadowBlur = size * 5;
          pCtx.shadowColor = p.color;
          pCtx.fill();
        }
      }
      requestAnimationFrame(animatePortalGalaxy);
    }
    animatePortalGalaxy();
  }

  // Auto transition after crawl completes (35s) if user hasn't interacted
  setTimeout(() => {
    if (window.enterSanctuary) {
      const introPortal = document.getElementById('spiritual-intro-portal');
      if (introPortal && !introPortal.classList.contains('entered')) {
        window.enterSanctuary();
      }
    }
  }, 35000);

  // ==========================================
  // 1. Cosmic Starfield Canvas System
  // ==========================================
  const canvas = document.getElementById('stars-canvas');
  const ctx = canvas.getContext('2d');
  
  let stars = [];
  let shootingStars = [];
  const starCount = 100;
  
  // Handle window resizing
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  
  // Star Constructor
  class Star {
    constructor() {
      this.reset();
      this.y = Math.random() * canvas.height; // Spread initially across full screen
    }
    
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + 10;
      this.radius = Math.random() * 1.5;
      this.alpha = Math.random() * 0.8 + 0.2;
      this.speed = Math.random() * 0.4 + 0.1;
      this.pulseSpeed = Math.random() * 0.02 + 0.005;
      this.pulseDirection = Math.random() > 0.5 ? 1 : -1;
    }
    
    update() {
      // Float upward gently
      this.y -= this.speed;
      
      // Twinkle alpha pulse
      this.alpha += this.pulseSpeed * this.pulseDirection;
      if (this.alpha >= 1) {
        this.alpha = 1;
        this.pulseDirection = -1;
      } else if (this.alpha <= 0.1) {
        this.alpha = 0.1;
        this.pulseDirection = 1;
      }
      
      // Reset if moves past top of screen
      if (this.y < -10) {
        this.reset();
      }
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 55, ${this.alpha})`; // Delicate gold stars
      ctx.fill();
    }
  }
  
  // Shooting Star Constructor
  class ShootingStar {
    constructor() {
      this.reset();
    }
    
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * (canvas.height * 0.5);
      this.len = Math.random() * 80 + 40;
      this.speed = Math.random() * 10 + 5;
      this.angle = Math.PI / 4; // Slanted downwards
      this.alpha = 1;
      this.fadeSpeed = Math.random() * 0.03 + 0.01;
    }
    
    update() {
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;
      this.alpha -= this.fadeSpeed;
    }
    
    draw() {
      ctx.beginPath();
      const grad = ctx.createLinearGradient(
        this.x, this.y, 
        this.x - Math.cos(this.angle) * this.len, 
        this.y - Math.sin(this.angle) * this.len
      );
      grad.addColorStop(0, `rgba(255, 217, 125, ${this.alpha})`);
      grad.addColorStop(1, 'rgba(255, 217, 125, 0)');
      
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(
        this.x - Math.cos(this.angle) * this.len, 
        this.y - Math.sin(this.angle) * this.len
      );
      ctx.stroke();
    }
  }
  
  // Initialize starfield
  for (let i = 0; i < starCount; i++) {
    stars.push(new Star());
  }
  
  // Star loop animation
  function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw and update stars
    stars.forEach(star => {
      star.update();
      star.draw();
    });
    
    // Periodically spawn shooting stars
    if (Math.random() < 0.003 && shootingStars.length < 2) {
      shootingStars.push(new ShootingStar());
    }
    
    // Update and draw shooting stars
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const ss = shootingStars[i];
      ss.update();
      if (ss.alpha <= 0) {
        shootingStars.splice(i, 1);
      } else {
        ss.draw();
      }
    }
    
    requestAnimationFrame(animateStars);
  }
  animateStars();


  // ==========================================
  // 2. Immersive 3D Spatial Deck Sanctuary Engine
  // ==========================================
  const sanctuary = document.getElementById('hero-3d-sanctuary');
  const spatialStage = document.querySelector('.spatial-3d-stage');
  const spatialCards = document.querySelectorAll('.spatial-card');
  const mandalaChamber = document.querySelector('.3d-mandala-chamber');

  if (sanctuary && spatialStage && spatialCards.length > 0) {
    let mouseX = 0;
    let mouseY = 0;
    let targetStageRotX = 0;
    let targetStageRotY = 0;
    let currentStageRotX = 0;
    let currentStageRotY = 0;
    
    // Setup 3D Spatial parameters for each card
    const cardData = Array.from(spatialCards).map((card, idx) => {
      const baseX = parseFloat(card.getAttribute('data-x')) || 0;
      const baseY = parseFloat(card.getAttribute('data-y')) || 0;
      const baseZ = parseFloat(card.getAttribute('data-z')) || 0;
      const baseRx = parseFloat(card.getAttribute('data-rx')) || 0;
      const baseRy = parseFloat(card.getAttribute('data-ry')) || 0;
      const baseRz = parseFloat(card.getAttribute('data-rz')) || 0;
      
      return {
        element: card,
        x: baseX,
        y: baseY,
        z: baseZ,
        rx: baseRx,
        ry: baseRy,
        rz: baseRz,
        
        currentX: baseX,
        currentY: baseY,
        currentZ: baseZ,
        currentRx: baseRx,
        currentRy: baseRy,
        
        targetX: baseX,
        targetY: baseY,
        targetZ: baseZ,
        targetRx: baseRx,
        targetRy: baseRy,
        
        isHovered: false,
        floatPhase: idx * (Math.PI / 1.5)
      };
    });

    // 3D Mouse Camera tracking
    sanctuary.addEventListener('mousemove', (e) => {
      const rect = sanctuary.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX = (e.clientX - cx) / (rect.width / 2); // Normalized -1 to 1
      mouseY = (e.clientY - cy) / (rect.height / 2);

      targetStageRotY = mouseX * 18; // 3D Camera tilt degrees
      targetStageRotX = -mouseY * 18;
      
      cardData.forEach(item => {
        if (!item.isHovered) {
          // Spatial depth parallax (cards at higher Z move more)
          const depthMultiplier = 1 + (item.z / 200);
          item.targetX = item.x + (mouseX * 25 * depthMultiplier);
          item.targetY = item.y + (mouseY * 25 * depthMultiplier);
          item.targetRy = item.ry + (mouseX * 12);
          item.targetRx = item.rx - (mouseY * 12);
        }
      });
    });

    // 3D Card Hover Focus Interaction
    cardData.forEach(item => {
      item.element.addEventListener('mouseenter', () => {
        item.isHovered = true;
        item.targetZ = 160; // Zoom forward to camera
        item.targetX = 0;
        item.targetY = 0;
        item.targetRx = 0;
        item.targetRy = 0;

        // Blur background cards
        cardData.forEach(other => {
          if (other !== item) {
            other.element.style.opacity = '0.35';
            other.element.style.filter = 'blur(4px)';
          }
        });
      });

      item.element.addEventListener('mouseleave', () => {
        item.isHovered = false;
        item.targetZ = item.z;
        item.targetX = item.x;
        item.targetY = item.y;
        item.targetRx = item.rx;
        item.targetRy = item.ry;

        // Restore background cards
        cardData.forEach(other => {
          other.element.style.opacity = '1';
          other.element.style.filter = 'none';
        });
      });

      // 3D Card Spin Flip on Click
      item.element.addEventListener('click', () => {
        item.targetRy += 360; // 360-degree spin flip
      });
    });

    sanctuary.addEventListener('mouseleave', () => {
      targetStageRotX = 0;
      targetStageRotY = 0;
      cardData.forEach(item => {
        if (!item.isHovered) {
          item.targetX = item.x;
          item.targetY = item.y;
          item.targetRx = item.rx;
          item.targetRy = item.ry;
        }
      });
    });

    // 60fps 3D Spatial Render Engine
    let floatTime = 0;
    function render3DSanctuary() {
      floatTime += 0.02;

      // Lerp 3D Stage Camera Rotation
      currentStageRotX += (targetStageRotX - currentStageRotX) * 0.06;
      currentStageRotY += (targetStageRotY - currentStageRotY) * 0.06;

      spatialStage.style.transform = `rotateX(${currentStageRotX}deg) rotateY(${currentStageRotY}deg)`;

      if (mandalaChamber) {
        mandalaChamber.style.transform = `translateZ(-120px) rotateX(${currentStageRotX * 0.5}deg) rotateY(${currentStageRotY * 0.5}deg)`;
      }

      // Render each Card in 3D depth space
      cardData.forEach(item => {
        // Organic 3D Sine levitation bobbing
        const floatY = Math.sin(floatTime + item.floatPhase) * 10;
        const floatZ = Math.cos(floatTime * 0.8 + item.floatPhase) * 6;

        item.currentX += (item.targetX - item.currentX) * 0.07;
        item.currentY += (item.targetY - item.currentY) * 0.07;
        item.currentZ += (item.targetZ - item.currentZ) * 0.07;
        item.currentRx += (item.targetRx - item.currentRx) * 0.07;
        item.currentRy += (item.targetRy - item.currentRy) * 0.07;

        const renderY = item.currentY + (item.isHovered ? 0 : floatY);
        const renderZ = item.currentZ + (item.isHovered ? 0 : floatZ);

        item.element.style.transform = `translate3d(${item.currentX}px, ${renderY}px, ${renderZ}px) rotateX(${item.currentRx}deg) rotateY(${item.currentRy}deg) rotateZ(${item.rz}deg)`;
      });

      requestAnimationFrame(render3DSanctuary);
    }

    render3DSanctuary();
  }


  // ==========================================
  // 3. Navigation Header Shrink & Mobile Toggle
  // ==========================================
  const header = document.getElementById('header');
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.getElementById('primary-navigation');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Shrink header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle trigger
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      navMenu.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });
  }
  
  // Close menu when clicking nav links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });


  // ==========================================
  // 4. ScrollSpy: Update active nav states
  // ==========================================
  const sections = document.querySelectorAll('section[id]');
  
  function scrollSpy() {
    const currentScrollY = window.pageYOffset + 120; // Offsets top sticky nav
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute('id');
      
      if (currentScrollY > sectionTop && currentScrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', scrollSpy);


  // ==========================================
  // 5. Service Category Tab Filtering
  // ==========================================
  window.filterServices = function(category) {
    const tabButtons = document.querySelectorAll('.services-tabs .tab-btn');
    const serviceBlocks = document.querySelectorAll('.services-category-block');
    
    // Toggle active tab buttons
    tabButtons.forEach(btn => {
      btn.classList.remove('active');
      if (
        (category === 'all' && btn.innerText.includes('All')) ||
        (category === 'whispered' && btn.innerText.includes('Whispered')) ||
        (category === 'talk' && btn.innerText.includes('Talk')) ||
        (category === 'vision' && btn.innerText.includes('Vision')) ||
        (category === 'live' && btn.innerText.includes('Live'))
      ) {
        btn.classList.add('active');
      }
    });
    
    // Filter Category display blocks
    serviceBlocks.forEach(block => {
      block.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      
      if (category === 'all' || block.getAttribute('data-category') === category) {
        block.classList.remove('hidden');
        setTimeout(() => {
          block.style.opacity = '1';
          block.style.transform = 'translateY(0)';
        }, 50);
      } else {
        block.style.opacity = '0';
        block.style.transform = 'translateY(15px)';
        setTimeout(() => {
          block.classList.add('hidden');
        }, 400);
      }
    });
  };

  // ==========================================
  // 5b. Healing Modalities vs Chakra Explorer Tab
  // ==========================================
  window.switchHealingTab = function(tab) {
    const modBtn = document.getElementById('btn-healing-modalities');
    const chkBtn = document.getElementById('tab-btn-chakra');
    const chkContainer = document.getElementById('chakra-diagnostic-container');
    const gridContainer = document.getElementById('healing-grid-container');

    if (!modBtn || !chkBtn || !chkContainer || !gridContainer) return;

    if (tab === 'modalities') {
      modBtn.classList.add('active');
      chkBtn.classList.remove('active');
      chkContainer.style.display = 'none';
      gridContainer.style.display = 'grid';
    } else {
      chkBtn.classList.add('active');
      modBtn.classList.remove('active');
      chkContainer.style.display = 'block';
      gridContainer.style.display = 'none';
    }
  };


  // ==========================================
  // 6. Testimonials Sliding Carousel
  // ==========================================
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.carousel-indicators .dot');
  const prevBtn = document.querySelector('.carousel-control.prev');
  const nextBtn = document.querySelector('.carousel-control.next');
  let currentSlide = 0;
  let carouselInterval;
  
  function updateCarousel(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Clamp indices
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }
  
  // Button Event Listeners
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      updateCarousel(currentSlide - 1);
      resetAutoSlide();
    });
    
    nextBtn.addEventListener('click', () => {
      updateCarousel(currentSlide + 1);
      resetAutoSlide();
    });
  }
  
  // Jump to specific slide using dots indicator
  window.jumpToSlide = function(index) {
    updateCarousel(index);
    resetAutoSlide();
  };
  
  // Auto rotation loop
  function startAutoSlide() {
    carouselInterval = setInterval(() => {
      updateCarousel(currentSlide + 1);
    }, 6500);
  }
  
  function resetAutoSlide() {
    clearInterval(carouselInterval);
    startAutoSlide();
  }
  
  if (slides.length > 0) {
    startAutoSlide();
  }


  // ==========================================
  // 7. FAQ Accordion Height Toggle
  // ==========================================
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all open FAQs
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-content').style.maxHeight = '0';
      });
      
      // If was not active, open it
      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });


  // ==========================================
  // 8. Meet Your Guide Biography Modal
  // ==========================================
  const bioModal = document.getElementById('bio-modal');
  
  window.toggleBioModal = function(show) {
    if (show) {
      bioModal.classList.add('active');
      document.body.classList.add('no-scroll');
    } else {
      bioModal.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  };
  
  // Click outside to close modals
  window.addEventListener('click', (e) => {
    if (e.target === bioModal) {
      toggleBioModal(false);
    }
    if (e.target === bookingModal) {
      closeBookingModal();
    }
  });


  // ==========================================
  // 9. Booking Funnel & WhatsApp Redirect
  // ==========================================
  const bookingModal = document.getElementById('booking-modal');
  const bookingForm = document.getElementById('booking-funnel-form');
  const serviceInput = document.getElementById('modal-service-selected');
  const formatInput = document.getElementById('modal-format-selected');
  
  // Open Booking trigger
  window.openBookingModal = function(serviceName, formatName) {
    if (serviceInput && formatInput && bookingModal) {
      serviceInput.value = serviceName;
      formatInput.value = formatName;
      
      bookingModal.classList.add('active');
      document.body.classList.add('no-scroll');
    }
  };
  
  // Close Booking trigger
  window.closeBookingModal = function() {
    if (bookingModal) {
      bookingModal.classList.remove('active');
      document.body.classList.remove('no-scroll');
      if (bookingForm) bookingForm.reset();
    }
  };
  
  // Process Booking and compile message redirecting to WhatsApp
  window.handleFormSubmission = function(event) {
    event.preventDefault();
    
    // Form Inputs
    const service = serviceInput.value;
    const format = formatInput.value;
    const name = document.getElementById('client-name').value;
    const dob = document.getElementById('client-dob').value;
    const tob = document.getElementById('client-tob').value || 'Not provided';
    const birthplace = document.getElementById('client-pob').value || 'Not provided';
    const partner = document.getElementById('partner-details').value || 'None';
    const questions = document.getElementById('client-questions').value;
    
    // Format Date of Birth cleanly
    let formattedDob = dob;
    try {
      const dateParts = dob.split('-');
      if (dateParts.length === 3) {
        const dateObj = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
        formattedDob = dateObj.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
      }
    } catch(err) {
      formattedDob = dob;
    }
    
    // Build Structured message for Ishita's WhatsApp
    const whatsappNumber = '919999988888'; // Replace with Ishita Kothari's actual WhatsApp business number
    
    const message = `🔮 *NEW SACRED BOOKING REQUEST* 🔮

👤 *Client Name:* ${name}
📅 *Date of Birth:* ${formattedDob}
⏰ *Birth Time:* ${tob}
📍 *Birthplace:* ${birthplace}

📖 *Selected Service:* ${service}
🎭 *Reading Format:* ${format}

👥 *Relational Connection details:* ${partner}

❓ *Subconscious blockages / Questions:*
"${questions}"

✨ _Please confirm my booking slot and share payment coordinates._ ✨`;

    // Encode string and redirect
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open in new tab and close booking modal
    window.open(whatsappUrl, '_blank');
    closeBookingModal();
  };

});

/* ==========================================================================
   3D INTRO ANIMATION ENGINE (Three.js WebGL Astrolabe, Starfield & Helix)
   Extracted & implemented from E:\bnp\index.html
   ========================================================================== */
(function init3DIntroEngine() {
  const ROMAN=['0','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI'];
  const ARCANA=[
   ['The Fool','Beginnings · Faith · Freedom','A new chapter is asking you to step forward before you feel fully ready. Trust the path to appear beneath your feet.'],
   ['The Magician','Will · Skill · Manifestation','Everything you need is already on your table. Name your intention clearly today and act on it.'],
   ['The High Priestess','Intuition · Mystery · Inner voice','The answer is quieter than the noise around you. Sit in stillness and listen to what you already know.'],
   ['The Empress','Abundance · Nurture · Creation','Something you planted is ready to bloom. Care for your body and your creativity, and let abundance in.'],
   ['The Emperor','Structure · Authority · Stability','Build the boundary or the plan you have been postponing. Steady structure will free you.'],
   ['The Hierophant','Tradition · Teaching · Guidance','Seek wisdom from a trusted mentor or a practice that has stood the test of time.'],
   ['The Lovers','Union · Choice · Alignment','A choice of the heart is in front of you. Choose what matches your values, not your fears.'],
   ['The Chariot','Momentum · Resolve · Victory','Hold the reins firmly. Focus pulls opposing forces in one direction and carries you forward.'],
   ['Strength','Courage · Patience · Compassion','Gentleness is your power today. Meet what is wild in you or around you with calm courage.'],
   ['The Hermit','Solitude · Reflection · Wisdom','Step back from the crowd. A lantern of insight lights up when you give yourself quiet time.'],
   ['Wheel of Fortune','Cycles · Destiny · Turning point','The wheel is turning in your favour. Stay open to a sudden change of luck or direction.'],
   ['Justice','Truth · Balance · Cause and effect','Act with honesty and fairness. What you set in motion now returns to you in kind.'],
   ['The Hanged Man','Surrender · Pause · New perspective','Let go of forcing the outcome. Seeing the situation from another angle reveals the way through.'],
   ['Death','Endings · Release · Transformation','Something is complete. Releasing it gracefully makes room for a genuine rebirth.'],
   ['Temperance','Balance · Healing · Moderation','Blend patience with purpose. Healing comes through small, steady adjustments.'],
   ['The Devil','Attachment · Shadow · Liberation','Notice what holds you by habit rather than by choice. The chains are looser than they look.'],
   ['The Tower','Upheaval · Revelation · Awakening','A sudden truth clears away what was built on shaky ground. Let it fall, and rebuild stronger.'],
   ['The Star','Hope · Renewal · Inspiration','Deep healing and restored hope surround you. The universe is aligning to fulfil your highest wishes.'],
   ['The Moon','Dreams · Intuition · The unseen','Not everything is as it seems. Trust your dreams and gut feelings as you move through uncertainty.'],
   ['The Sun','Joy · Success · Vitality','Warmth and clarity light up your day. Celebrate, be seen, and let your joy lead.'],
   ['Judgement','Awakening · Calling · Absolution','A deeper calling is rising. Forgive the past self and answer the voice that says it is time.'],
   ['The World','Completion · Wholeness · Arrival','A cycle closes in fulfilment. Honour how far you have come before the next journey begins.']
  ];
  const ZOD=['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'];
  const ZNAME=['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];

  const CW=400,CH=680;
  function goldGrad(ctx,y0,y1){const g=ctx.createLinearGradient(0,y0,0,y1);g.addColorStop(0,'#f6e3a4');g.addColorStop(.5,'#d9b45a');g.addColorStop(1,'#a8822f');return g}
  function rr(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath()}
  function rng(seed){let s=seed*9301+49297;return()=>{s=(s*9301+49297)%233280;return s/233280}}
  function base(ctx,seed){
    ctx.clearRect(0,0,CW,CH);rr(ctx,0,0,CW,CH,26);ctx.save();ctx.clip();
    const g=ctx.createLinearGradient(0,0,0,CH);g.addColorStop(0,'#0e1b5c');g.addColorStop(1,'#040924');ctx.fillStyle=g;ctx.fillRect(0,0,CW,CH);
    const rg=ctx.createRadialGradient(CW/2,CH*.46,10,CW/2,CH*.46,CW*.7);rg.addColorStop(0,'rgba(60,100,255,.28)');rg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=rg;ctx.fillRect(0,0,CW,CH);
    const r=rng(seed);ctx.fillStyle='#fff';for(let i=0;i<70;i++){ctx.globalAlpha=.15+r()*.6;ctx.beginPath();ctx.arc(r()*CW,r()*CH,r()*1.3+.2,0,7);ctx.fill()}ctx.globalAlpha=1;
    ctx.strokeStyle=goldGrad(ctx,0,CH);ctx.lineWidth=4;rr(ctx,14,14,CW-28,CH-28,16);ctx.stroke();
    ctx.lineWidth=1.2;rr(ctx,24,24,CW-48,CH-48,10);ctx.stroke();
    [[24,24],[CW-24,24],[24,CH-24],[CW-24,CH-24]].forEach(([x,y])=>{ctx.fillStyle='#d9b45a';ctx.beginPath();ctx.arc(x,y,4,0,7);ctx.fill()});
  }
  function star(ctx,cx,cy,n,r1,r2,rot=-Math.PI/2){ctx.beginPath();for(let i=0;i<n*2;i++){const r=i%2?r2:r1,a=rot+i*Math.PI/n;ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r)}ctx.closePath()}
  function poly(ctx,cx,cy,n,r,rot=-Math.PI/2){ctx.beginPath();for(let i=0;i<n;i++){const a=rot+i*2*Math.PI/n;ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r)}ctx.closePath()}
  function circ(ctx,x,y,r){ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2)}
  function rays(ctx,cx,cy,n,r1,r2,alt){for(let i=0;i<n;i++){const a=i*2*Math.PI/n,e=alt&&i%2?r2*.8:r2;ctx.beginPath();ctx.moveTo(cx+Math.cos(a)*r1,cy+Math.sin(a)*r1);ctx.lineTo(cx+Math.cos(a)*e,cy+Math.sin(a)*e);ctx.stroke()}}
  function lemni(ctx,cx,cy,s){ctx.beginPath();for(let t=0;t<=Math.PI*2+.05;t+=.05){const d=1+Math.sin(t)**2;ctx.lineTo(cx+s*Math.cos(t)/d,cy+s*Math.sin(t)*Math.cos(t)/d)}ctx.stroke()}
  function crescent(ctx,cx,cy,r,off){ctx.save();circ(ctx,cx,cy,r);ctx.clip();ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.moveTo(cx+off+r*.86,cy-off*.25);ctx.arc(cx+off,cy-off*.25,r*.86,0,Math.PI*2);ctx.fill('evenodd');ctx.restore()}
  function motif(ctx,i){
    const cx=CW/2,cy=CH*.47,S=ctx.strokeStyle;ctx.lineWidth=2.6;ctx.lineCap='round';ctx.lineJoin='round';
    ctx.shadowColor='rgba(243,220,149,.7)';ctx.shadowBlur=14;
    ctx.save();ctx.globalAlpha=.35;circ(ctx,cx,cy,128);ctx.stroke();ctx.restore();
    switch(i){
     case 0:circ(ctx,cx,cy+40,46);ctx.stroke();star(ctx,cx+50,cy-70,5,24,10);ctx.fill();ctx.beginPath();ctx.moveTo(cx-90,cy+100);ctx.quadraticCurveTo(cx,cy+60,cx+90,cy-30);ctx.stroke();break;
     case 1:lemni(ctx,cx,cy-70,70);[[-60,40],[60,40],[-60,100],[60,100]].forEach(([x,y])=>{circ(ctx,cx+x,cy+y,12);ctx.stroke()});ctx.beginPath();ctx.moveTo(cx,cy-20);ctx.lineTo(cx,cy+110);ctx.stroke();break;
     case 2:ctx.fillStyle=S;crescent(ctx,cx,cy-30,44,20);[-92,92].forEach(x=>{ctx.strokeRect(cx+x-12,cy-110,24,220)});ctx.beginPath();ctx.moveTo(cx-40,cy+60);ctx.lineTo(cx+40,cy+60);ctx.stroke();break;
     case 3:circ(ctx,cx,cy-20,48);ctx.stroke();ctx.beginPath();ctx.moveTo(cx,cy+28);ctx.lineTo(cx,cy+100);ctx.moveTo(cx-30,cy+66);ctx.lineTo(cx+30,cy+66);ctx.stroke();for(let k=0;k<12;k++){const a=Math.PI*1.1+k*Math.PI*.8/11;star(ctx,cx+Math.cos(a)*100,cy-20+Math.sin(a)*100,5,7,3);ctx.fill()}break;
     case 4:ctx.strokeRect(cx-80,cy-80,160,160);poly(ctx,cx,cy+10,3,70);ctx.stroke();circ(ctx,cx,cy+18,10);ctx.fill();break;
     case 5:ctx.beginPath();ctx.moveTo(cx,cy-110);ctx.lineTo(cx,cy+110);[-70,-30,10].forEach((y,k)=>{const w=30+k*18;ctx.moveTo(cx-w,cy+y);ctx.lineTo(cx+w,cy+y)});ctx.stroke();circ(ctx,cx,cy-110,10);ctx.stroke();break;
     case 6:circ(ctx,cx-32,cy+20,54);ctx.stroke();circ(ctx,cx+32,cy+20,54);ctx.stroke();rays(ctx,cx,cy-80,12,16,40);circ(ctx,cx,cy-80,12);ctx.fill();break;
     case 7:poly(ctx,cx,cy+30,6,70);ctx.stroke();star(ctx,cx,cy-70,8,34,14);ctx.fill();circ(ctx,cx-70,cy+105,18);ctx.stroke();circ(ctx,cx+70,cy+105,18);ctx.stroke();break;
     case 8:lemni(ctx,cx,cy-80,56);circ(ctx,cx,cy+30,60);ctx.stroke();rays(ctx,cx,cy+30,18,64,86,true);break;
     case 9:star(ctx,cx,cy-10,6,48,26,0);ctx.stroke();poly(ctx,cx,cy-10,6,26,0);ctx.stroke();rays(ctx,cx,cy-10,24,62,96,true);ctx.beginPath();ctx.moveTo(cx+120,cy-100);ctx.lineTo(cx+80,cy+120);ctx.stroke();break;
     case 10:circ(ctx,cx,cy,90);ctx.stroke();circ(ctx,cx,cy,64);ctx.stroke();circ(ctx,cx,cy,14);ctx.fill();rays(ctx,cx,cy,8,14,90);break;
     case 11:ctx.beginPath();ctx.moveTo(cx,cy-110);ctx.lineTo(cx,cy+100);ctx.moveTo(cx-100,cy-60);ctx.lineTo(cx+100,cy-60);ctx.moveTo(cx-40,cy+100);ctx.lineTo(cx+40,cy+100);ctx.stroke();[-100,100].forEach(x=>{ctx.beginPath();ctx.moveTo(cx+x,cy-60);ctx.lineTo(cx+x-30,cy+10);ctx.moveTo(cx+x,cy-60);ctx.lineTo(cx+x+30,cy+10);ctx.stroke();ctx.beginPath();ctx.arc(cx+x,cy+10,30,0,Math.PI);ctx.stroke()});break;
     case 12:poly(ctx,cx,cy-30,3,64,Math.PI/2);ctx.stroke();ctx.beginPath();ctx.moveTo(cx,cy+2);ctx.lineTo(cx,cy+110);ctx.moveTo(cx-40,cy+70);ctx.lineTo(cx+40,cy+70);ctx.stroke();circ(ctx,cx,cy-100,18);ctx.stroke();break;
     case 13:ctx.save();ctx.beginPath();ctx.rect(0,0,CW,cy+30);ctx.clip();circ(ctx,cx,cy+30,58);ctx.stroke();rays(ctx,cx,cy+30,20,70,110,true);ctx.restore();[30,56,82].forEach((y,k)=>{ctx.beginPath();ctx.moveTo(cx-110+k*20,cy+y);ctx.lineTo(cx+110-k*20,cy+y);ctx.stroke()});break;
     case 14:circ(ctx,cx,cy,86);ctx.stroke();poly(ctx,cx,cy+12,3,70);ctx.stroke();ctx.strokeRect(cx-26,cy+20,52,52);break;
     case 15:star(ctx,cx,cy,5,90,36,Math.PI/2);ctx.stroke();circ(ctx,cx,cy,100);ctx.stroke();break;
     case 16:ctx.strokeRect(cx-44,cy-70,88,190);ctx.beginPath();ctx.moveTo(cx-54,cy-70);ctx.lineTo(cx-54,cy-94);ctx.lineTo(cx+54,cy-94);ctx.lineTo(cx+54,cy-70);ctx.stroke();ctx.beginPath();ctx.moveTo(cx+110,cy-130);ctx.lineTo(cx+40,cy-60);ctx.lineTo(cx+70,cy-50);ctx.lineTo(cx-10,cy+20);ctx.stroke();break;
     case 17:star(ctx,cx,cy-24,8,82,26);ctx.fill();for(let k=0;k<7;k++){const a=Math.PI*.15+k*Math.PI*.7/6;star(ctx,cx+Math.cos(a)*112,cy-24+Math.sin(a)*112,8,12,4);ctx.fill()}break;
     case 18:circ(ctx,cx,cy-20,76);ctx.stroke();ctx.fillStyle=S;crescent(ctx,cx,cy-20,70,-30);for(let k=0;k<9;k++){circ(ctx,cx-80+k*20,cy+96+(k%2)*10,3.5);ctx.fill()}break;
     case 19:circ(ctx,cx,cy,56);ctx.fill();rays(ctx,cx,cy,16,70,118,true);break;
     case 20:for(let k=0;k<5;k++){ctx.beginPath();ctx.arc(cx,cy+120,40+k*26,Math.PI*1.1,Math.PI*1.9);ctx.stroke()}rays(ctx,cx,cy-120,14,6,26);break;
     case 21:ctx.beginPath();ctx.ellipse(cx,cy,70,110,0,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.ellipse(cx,cy,58,98,0,0,Math.PI*2);ctx.stroke();[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([a,b])=>{circ(ctx,cx+a*118,cy+b*118,12);ctx.stroke()});star(ctx,cx,cy,4,24,8,0);ctx.fill();break;
    }
    ctx.shadowBlur=0;
  }
  function drawFront(i){
    const c=document.createElement('canvas');c.width=CW;c.height=CH;const ctx=c.getContext('2d');
    base(ctx,i+3);const G=goldGrad(ctx,120,560);ctx.strokeStyle=G;ctx.fillStyle=G;
    motif(ctx,i);
    ctx.fillStyle=goldGrad(ctx,50,90);ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.font='600 34px Cinzel, Georgia, serif';ctx.fillText(ROMAN[i],CW/2,78);
    ctx.font='500 '+(ARCANA[i][0].length>14?25:29)+'px Cinzel, Georgia, serif';ctx.fillStyle=goldGrad(ctx,585,620);ctx.fillText(ARCANA[i][0].toUpperCase(),CW/2,604);
    ctx.strokeStyle='rgba(217,180,90,.5)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(90,566);ctx.lineTo(310,566);ctx.moveTo(150,112);ctx.lineTo(250,112);ctx.stroke();
    ctx.restore();return c;
  }
  function drawBack(){
    const c=document.createElement('canvas');c.width=CW;c.height=CH;const ctx=c.getContext('2d');
    base(ctx,99);const cx=CW/2,cy=CH/2,G=goldGrad(ctx,cy-160,cy+160);ctx.strokeStyle=G;ctx.fillStyle=G;ctx.lineWidth=1.6;
    ctx.shadowColor='rgba(243,220,149,.6)';ctx.shadowBlur=10;
    [150,132,64].forEach(r=>{circ(ctx,cx,cy,r);ctx.stroke()});
    rays(ctx,cx,cy,72,136,146);star(ctx,cx,cy,12,126,70);ctx.stroke();star(ctx,cx,cy,8,60,28,0);ctx.stroke();
    ctx.fillStyle=G;crescent(ctx,cx,cy,24,-10);
    ctx.font='600 16px Cinzel, Georgia, serif';ctx.textAlign='center';ctx.shadowBlur=0;ctx.fillStyle=G;
    ctx.fillText('DIVINE  ORACLE',cx,86);ctx.fillText('TAROT',cx,CH-78);
    for(let k=0;k<12;k++){const a=-Math.PI/2+k*Math.PI/6;ctx.font='22px serif';ctx.fillText(ZOD[k]+'︎',cx+Math.cos(a)*178,cy+Math.sin(a)*178*1.45+7)}
    ctx.restore();return c;
  }

  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const sstep=(a,b,v)=>{const t=clamp((v-a)/(b-a),0,1);return t*t*(3-2*t)};
  const lerp=(a,b,t)=>a+(b-a)*t;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

  let backCanvas,frontCanvases=[];

  function startGL(){
    const intro=document.getElementById('intro'),stage=document.getElementById('stage'),canvas=document.getElementById('gl');
    if(!intro || !stage || !canvas || !window.THREE){return}
    const $=id=>document.getElementById(id);
    const ph={a:$('ph-a'),b:$('ph-b'),c:$('ph-c'),d:$('ph-d'),e:$('ph-e'),labels:$('spread-labels')};
    if($('skip')) $('skip').onclick=()=>window.scrollTo({top:($('site')||$('home')||document.body).offsetTop,behavior:'smooth'});

    const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'high-performance'});
    renderer.setClearColor(0x03061a,1);
    const scene=new THREE.Scene();scene.fog=new THREE.FogExp2(0x03061a,0.012);
    const camera=new THREE.PerspectiveCamera(55,1,.1,600);
    const mobile=Math.min(innerWidth,innerHeight)<600;

    /* soft dot texture */
    const dot=(()=>{const c=document.createElement('canvas');c.width=c.height=64;const x=c.getContext('2d');const g=x.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,'rgba(255,255,255,1)');g.addColorStop(.25,'rgba(255,255,255,.6)');g.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=g;x.fillRect(0,0,64,64);return new THREE.CanvasTexture(c)})();

    /* twinkling points shader */
    function points(count,fn,color,sizeMul){
      const pos=new Float32Array(count*3),size=new Float32Array(count),phase=new Float32Array(count);
      for(let i=0;i<count;i++){const p=fn(i);pos.set(p,i*3);size[i]=(.4+Math.random()*1.6)*sizeMul;phase[i]=Math.random()*6.28}
      const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos,3));g.setAttribute('size',new THREE.BufferAttribute(size,1));g.setAttribute('phase',new THREE.BufferAttribute(phase,1));
      const m=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,
        uniforms:{time:{value:0},color:{value:new THREE.Color(color)},map:{value:dot},pr:{value:1}},
        vertexShader:`attribute float size;attribute float phase;uniform float time;uniform float pr;varying float vA;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);gl_PointSize=min(size*pr*(260./-mv.z),40.*pr);vA=.55+.45*sin(time*1.6+phase);gl_Position=projectionMatrix*mv;}`,
        fragmentShader:`uniform vec3 color;uniform sampler2D map;varying float vA;void main(){vec4 t=texture2D(map,gl_PointCoord);gl_FragColor=vec4(color,t.a*vA);}`});
      const pts=new THREE.Points(g,m);scene.add(pts);return m;
    }
    const cyl=(rMin,rMax,z0,z1)=>()=>{const a=Math.random()*6.283,r=rMin+Math.random()*(rMax-rMin);return[Math.cos(a)*r,Math.sin(a)*r,z0+Math.random()*(z1-z0)]};
    const mats=[
      points(mobile?1800:3600,cyl(18,90,-260,80),0xdfe6ff,1.4),
      points(mobile?500:1000,cyl(22,70,-260,80),0x9db4ff,2.2),
      points(mobile?700:1400,cyl(1.6,11,-140,40),0xf3dc95,.55)
    ];

    /* nebula clouds */
    const neb=(()=>{const c=document.createElement('canvas');c.width=c.height=256;const x=c.getContext('2d');const g=x.createRadialGradient(128,128,0,128,128,128);g.addColorStop(0,'rgba(255,255,255,.55)');g.addColorStop(.4,'rgba(255,255,255,.18)');g.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=g;x.fillRect(0,0,256,256);return new THREE.CanvasTexture(c)})();
    [[0x2a4fd6,-30,-12,-40,70],[0x6b2fb3,34,14,-70,80],[0x1d3aa8,-26,20,-110,90],[0x7a4bd0,20,-18,-150,70],[0x2a4fd6,0,0,-20,120],[0xb88a2e,0,0,-132,40]].forEach(([col,x,y,z,s])=>{
      const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:neb,color:col,transparent:true,opacity:.45,depthWrite:false,blending:THREE.AdditiveBlending}));sp.position.set(x,y,z);sp.scale.set(s,s,1);scene.add(sp)});

    /* astrolabe */
    const astro=new THREE.Group();astro.position.y=-1.4;scene.add(astro);
    const ringMat=o=>new THREE.MeshBasicMaterial({color:0xe7c56d,transparent:true,opacity:o});
    const rings=[[9.4,.05,.95],[8.6,.02,.6],[7.2,.06,.9],[6.1,.035,.8],[5.0,.05,.85]].map(([r,t,o])=>{const m=new THREE.Mesh(new THREE.TorusGeometry(r,t,8,220),ringMat(o));astro.add(m);return m});
    // ticks
    const tick=[];for(let d=0;d<360;d+=2){const a=d*Math.PI/180,l=d%30===0?.9:(d%10===0?.45:.2);tick.push(Math.cos(a)*9.4,Math.sin(a)*9.4,0,Math.cos(a)*(9.4-l),Math.sin(a)*(9.4-l),0)}
    const tg=new THREE.BufferGeometry();tg.setAttribute('position',new THREE.Float32BufferAttribute(tick,3));
    const ticks=new THREE.LineSegments(tg,new THREE.LineBasicMaterial({color:0xd9b45a,transparent:true,opacity:.7}));astro.add(ticks);
    // glyphs
    const glyphRing=new THREE.Group();astro.add(glyphRing);
    ZOD.forEach((z,k)=>{const c=document.createElement('canvas');c.width=c.height=128;const x=c.getContext('2d');x.fillStyle='#f3dc95';x.shadowColor='rgba(243,220,149,.9)';x.shadowBlur=16;x.font='84px "Segoe UI Symbol","Noto Sans Symbols","Apple Symbols",serif';x.textAlign='center';x.textBaseline='middle';x.fillText(z+'︎',64,68);
      const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));const a=Math.PI/2-(k+.5)*Math.PI/6;sp.position.set(Math.cos(a)*10.5,Math.sin(a)*10.5,0);sp.scale.set(1.25,1.25,1);glyphRing.add(sp)});
    // gimbals
    const gim1=new THREE.Mesh(new THREE.TorusGeometry(6.1,.03,8,160),ringMat(.7));const gim2=new THREE.Mesh(new THREE.TorusGeometry(5.0,.03,8,160),ringMat(.6));astro.add(gim1,gim2);
    rings[3].visible=false;rings[4].visible=false;
    // radial spokes
    const sp=[];for(let k=0;k<12;k++){const a=k*Math.PI/6;sp.push(Math.cos(a)*7.2,Math.sin(a)*7.2,0,Math.cos(a)*8.6,Math.sin(a)*8.6,0)}
    const sg=new THREE.BufferGeometry();sg.setAttribute('position',new THREE.Float32BufferAttribute(sp,3));astro.add(new THREE.LineSegments(sg,new THREE.LineBasicMaterial({color:0xd9b45a,transparent:true,opacity:.5})));
    // central sun
    const sun=new THREE.Sprite(new THREE.SpriteMaterial({map:neb,color:0xf3dc95,transparent:true,opacity:.9,depthWrite:false,blending:THREE.AdditiveBlending}));sun.scale.set(5,5,1);astro.add(sun);

    /* cards */
    const backTex=new THREE.CanvasTexture(backCanvas);
    const aniso=renderer.capabilities.getMaxAnisotropy();backTex.anisotropy=aniso;
    const geo=new THREE.PlaneGeometry(1.6,2.72);
    function makeCard(i){
      const g=new THREE.Group();const ft=new THREE.CanvasTexture(frontCanvases[i]);ft.anisotropy=aniso;
      const f=new THREE.Mesh(geo,new THREE.MeshBasicMaterial({map:ft,transparent:true,alphaTest:.4}));
      const b=new THREE.Mesh(geo,new THREE.MeshBasicMaterial({map:backTex,transparent:true,alphaTest:.4}));b.rotation.y=Math.PI;
      g.add(f,b);scene.add(g);return g;
    }
    const helix=[];for(let i=0;i<22;i++){const g=makeCard(i);const a=i*1.05+.6,r=3.9;g.userData={x:Math.cos(a)*r,y:Math.sin(a)*r*.72,z:-14-i*3.55,a};helix.push(g)}
    const SPREAD=[18,17,19];const spread=SPREAD.map(i=>makeCard(i));
    const SZ=-112;

    /* portal */
    const portal=new THREE.Group();portal.position.z=-128;scene.add(portal);
    const pr1=new THREE.Mesh(new THREE.TorusGeometry(3.2,.05,8,200),ringMat(.9));const pr2=new THREE.Mesh(new THREE.TorusGeometry(3.7,.02,8,200),ringMat(.6));portal.add(pr1,pr2);
    const pglow=new THREE.Sprite(new THREE.SpriteMaterial({map:neb,color:0xf6e3a4,transparent:true,opacity:.95,depthWrite:false,blending:THREE.AdditiveBlending}));pglow.scale.set(9,9,1);portal.add(pglow);
    const pticks=[];for(let d=0;d<360;d+=6){const a=d*Math.PI/180;pticks.push(Math.cos(a)*3.9,Math.sin(a)*3.9,0,Math.cos(a)*4.3,Math.sin(a)*4.3,0)}
    const ptg=new THREE.BufferGeometry();ptg.setAttribute('position',new THREE.Float32BufferAttribute(pticks,3));const ptl=new THREE.LineSegments(ptg,new THREE.LineBasicMaterial({color:0xd9b45a,transparent:true,opacity:.7}));portal.add(ptl);

    /* sizing */
    let spacing=2.3,sScale=1.2;
    function resize(){
      const w=stage.clientWidth,h=stage.clientHeight,pr=Math.min(devicePixelRatio||1,mobile?1.6:2);
      renderer.setPixelRatio(pr);renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();
      mats.forEach(m=>m.uniforms.pr.value=pr);
      const visH=2*9*Math.tan(27.5*Math.PI/180),visW=visH*camera.aspect;
      spacing=Math.min(2.7,visW/3.1);sScale=Math.min(1.2,spacing/2.05);
    }
    addEventListener('resize',resize);resize();

    /* camera path */
    const KEYS=[[0,40],[.3,-4],[.64,-92],[.82,-103],[1,-127]];
    function camZ(p){for(let i=0;i<KEYS.length-1;i++){const[a,za]=KEYS[i],[b,zb]=KEYS[i+1];if(p<=b){const t=(p-a)/(b-a);return lerp(za,zb,lerp(t,.5-.5*Math.cos(Math.PI*t),.65))}}return KEYS[KEYS.length-1][1]}

    const mouse={x:0,y:0,tx:0,ty:0};
    addEventListener('pointermove',e=>{mouse.tx=(e.clientX/innerWidth-.5);mouse.ty=(e.clientY/innerHeight-.5)},{passive:true});

    let cur=0,target=0,visible=true,t0=performance.now();
    function readScroll(){const r=intro.getBoundingClientRect();const total=intro.offsetHeight-innerHeight;target=clamp(-r.top/total,0,1);visible=r.bottom>0}
    addEventListener('scroll',readScroll,{passive:true});readScroll();cur=target;

    const fade=(el,v,shift)=>{if(!el)return;el.style.opacity=v;if(shift!=null)el.style.transform=shift};
    const band=(p,a,b,w=.03)=>sstep(a,a+w,p)*(1-sstep(b-w,b,p));
    const deg=$('degree');
    function hud(p){
      fade(ph.a,1-sstep(.02,.09,p),`translateY(calc(-50% - ${p*300}px))`);
      fade(ph.b,band(p,.12,.27),`translateY(${(1-band(p,.12,.27))*20}px)`);
      fade(ph.c,band(p,.38,.6),`translateY(${(1-band(p,.38,.6))*20}px)`);
      fade(ph.d,band(p,.68,.87));if(ph.labels) ph.labels.style.opacity=band(p,.74,.87);
      fade(ph.e,band(p,.88,.96,.02),`translateY(-50%) scale(${1+sstep(.88,.96,p)*.15})`);
      if($('bloom')) $('bloom').style.opacity=sstep(.89,.95,p)*(1-sstep(.97,1,p)*.9);
      if($('veil')) $('veil').style.opacity=sstep(.955,.995,p);
      const d=Math.floor(p*359.9),s=Math.floor(d/30);if(deg) deg.innerHTML=`${ZNAME[s]}<b>${ZOD[s]}︎ ${d}°</b>`;
    }

    function frame(now){
      requestAnimationFrame(frame);
      if(!visible)return;
      const t=reduce?0:(now-t0)/1000;
      cur+=(target-cur)*(reduce?1:.075);if(Math.abs(target-cur)<1e-5)cur=target;
      const p=cur;
      mouse.x+=(mouse.tx-mouse.x)*.05;mouse.y+=(mouse.ty-mouse.y)*.05;
      const z=camZ(p),tun=sstep(.28,.4,p)*(1-sstep(.62,.7,p));
      camera.position.set(Math.sin(p*14)*.7*tun+mouse.x*1.4,Math.cos(p*11)*.5*tun-mouse.y*1.0,z);
      camera.lookAt(mouse.x*.6+Math.sin(p*14+.8)*.5*tun,-mouse.y*.4,z-12);
      camera.rotation.z+=Math.sin(p*Math.PI*2)*.12*tun;
      mats.forEach(m=>m.uniforms.time.value=t);

      // astrolabe
      rings[0].rotation.z=p*2;glyphRing.rotation.z=-p*Math.PI*1.2+t*.02;ticks.rotation.z=p*1.3;
      rings[2].rotation.x=Math.sin(t*.2)*.15+p*1.4;rings[2].rotation.y=p*2.2+t*.05;
      const gf=1-sstep(.18,.26,p);gim1.material.opacity=.7*gf;gim2.material.opacity=.6*gf;rings[2].material.opacity=.9*(1-sstep(.22,.3,p)*.7);gim1.visible=gim2.visible=gf>0;gim1.rotation.x=t*.25+p*5;gim1.rotation.y=.6;gim2.rotation.y=t*.3+p*6;gim2.rotation.x=1.1;
      astro.scale.setScalar(1+sstep(.15,.3,p)*.25);
      sun.material.opacity=.9*(1-sstep(.22,.3,p));

      // helix
      helix.forEach((g,i)=>{const u=g.userData,d=z-u.z;
        const f=1-sstep(6,19,d);
        const bob=Math.sin(t*.8+i)*.12;
        g.position.set(u.x,u.y+bob,u.z);
        g.rotation.set(Math.sin(t*.5+i)*.06,Math.PI*(1-f)-u.x*.14,Math.sin(u.a)*.18);
        const s=1+(1-sstep(3,14,Math.abs(d)))*.15;g.scale.setScalar(s);
      });
      // spread
      spread.forEach((g,k)=>{
        const f=sstep(.7+k*.035,.76+k*.035,p),lift=sstep(.64,.74,p);
        g.position.set((k-1)*spacing,(1-lift)*-1.4+Math.sin(t*.9+k)*.05+(k===1?.12:0),SZ+(k===1?.4:0));
        g.rotation.set(0,Math.PI*(1-f),(k-1)*-.04*(1-f));
        g.scale.setScalar(sScale*(1+f*.05));
      });
      // portal
      pr1.rotation.z=t*.3+p*3;pr2.rotation.z=-t*.2-p*2;ptl.rotation.z=p*1.5;
      pglow.material.opacity=.5+sstep(.84,.97,p)*.5;pglow.scale.setScalar(9+sstep(.86,1,p)*20);

      renderer.render(scene,camera);hud(p);
    }
    requestAnimationFrame(frame);
  }

  const fontsReady=document.fonts?Promise.race([Promise.all([document.fonts.load('600 34px Cinzel'),document.fonts.load('500 29px Cinzel')]),new Promise(r=>setTimeout(r,2500))]):Promise.resolve();
  fontsReady.then(()=>{
    backCanvas=drawBack();
    for(let i=0;i<22;i++) frontCanvases.push(drawFront(i));
    try{startGL()}catch(err){console.error('3D Intro initialization error:', err);const intro=document.getElementById('intro'); if(intro) intro.style.height='100vh';}
  });
})();

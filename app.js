/* ==========================================================================
   Divine Oracle Tarot — Interactive App Scripts
   Author: Antigravity AI
   ========================================================================== */

// ==========================================
// Global Window Functions (Instantly Available for Inline onclick Triggers)
// ==========================================

// 0. Enter Sanctuary (Transitions from 3D Intro Portal overlay to Main Site)
window.enterSanctuary = function() {
  const introPortal = document.getElementById('spiritual-intro-portal');
  if (introPortal && !introPortal.classList.contains('entered')) {
    introPortal.classList.add('entered');
    try { sessionStorage.setItem('divine_sanctuary_entered', 'true'); } catch(e) {}
    
    // Remove element after transition finishes to release rendering resources
    setTimeout(() => {
      introPortal.style.display = 'none';
    }, 1350);
  }
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

// Custom Audio Synthesizer / Voice Sample Player
let isVoicePlaying = false;
let audioSynthOsc = null;
let audioSynthGain = null;
let voiceTimerInterval = null;
let voiceSeconds = 0;

window.toggleVoiceSample = function() {
  const playIcon = document.getElementById('voice-play-icon');
  const soundwave = document.getElementById('soundwave-container');
  const timerEl = document.getElementById('voice-audio-timer');

  if (!isVoicePlaying) {
    isVoicePlaying = true;
    if (playIcon) playIcon.className = 'fas fa-pause';
    if (soundwave) soundwave.classList.add('playing');

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        audioSynthOsc = ctx.createOscillator();
        audioSynthGain = ctx.createGain();
        
        audioSynthOsc.type = 'sine';
        audioSynthOsc.frequency.setValueAtTime(216, ctx.currentTime);
        audioSynthGain.gain.setValueAtTime(0.04, ctx.currentTime);
        
        audioSynthOsc.connect(audioSynthGain);
        audioSynthGain.connect(ctx.destination);
        audioSynthOsc.start();
      }
    } catch(e) {}

    voiceTimerInterval = setInterval(() => {
      voiceSeconds++;
      if (voiceSeconds >= 35) {
        window.toggleVoiceSample();
        voiceSeconds = 0;
      }
      const mins = Math.floor(voiceSeconds / 60);
      const secs = (voiceSeconds % 60).toString().padStart(2, '0');
      if (timerEl) timerEl.textContent = `${mins}:${secs} / 0:35`;
    }, 1000);

  } else {
    isVoicePlaying = false;
    if (playIcon) playIcon.className = 'fas fa-play';
    if (soundwave) soundwave.classList.remove('playing');
    if (voiceTimerInterval) clearInterval(voiceTimerInterval);
    if (audioSynthOsc) {
      try { audioSynthOsc.stop(); } catch(e) {}
    }
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

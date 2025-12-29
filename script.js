let selectedPlanFinal = "";

// Pantallas
setTimeout(() => {
  document.getElementById('loading-screen').classList.add('hidden');
  document.getElementById('profile-screen').classList.remove('hidden');
}, 2500);

function showHome() {
  document.getElementById('tudum-sound').play();
  document.getElementById('bg-music').play();
  document.getElementById('profile-screen').classList.add('hidden');
  document.getElementById('home-screen').classList.remove('hidden');
  startSlider();
}

function startSlider() {
  let slides = document.querySelectorAll('.slide');
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4000);
}

// Lógica de Sub-menús (TU ESTRUCTURA ORIGINAL)
function openPlan(tipo) {
  const modal = document.getElementById('detail-modal');
  const title = document.getElementById('plan-title');
  const desc = document.getElementById('plan-desc');
  const info = document.getElementById('plan-info');
  const interactive = document.getElementById('interactive-section');
  
  modal.classList.remove('hidden');
  interactive.innerHTML = ""; 

  if(tipo === 'completo') {
    title.innerText = "Cachagua: Día de Película";
    info.innerText = "99% Match | 2024 | Full Day";
    desc.innerText = "Salida 10:30 AM. Paseo por Las Cujas. ¿Cómo prefieres almorzar?";
    interactive.innerHTML = `
      <button class="options-btn" onclick="showRestaurants()">🍴 Ver Restaurantes en Cachagua</button>
      <button class="options-btn" onclick="confirmar('Picnic en Las Cujas')">🧺 Picnic en la arena</button>
    `;
  } else if(tipo === 'manana') {
    title.innerText = "Matiné: Desayuno & Brisa";
    info.innerText = "Especial | 4 Horas | Mañana";
    desc.innerText = "Mañana de paseo por Concón. ¿A qué lugar te gustaría desayunar?";
    interactive.innerHTML = `
      <button class="options-btn" onclick="showBreakfasts()">☕ Ver opciones de Desayuno</button>
      <button class="options-btn" onclick="confirmar('Solo Paseo')">🌊 Solo caminar y conversar</button>
    `;
  } else if(tipo === 'tarde') {
    title.innerText = "Especial: Sunset & Chill";
    info.innerText = "Romance | 6 Horas | Golden Hour";
    desc.innerText = "Piscina y empanaditas para ver el sunset en Concón.";
    interactive.innerHTML = `<button class="options-btn" onclick="confirmar('Tarde de Sunset')">🌅 Confirmar Plan de Tarde</button>`;
  }
}

// Sub-menús con tus Links Exactos
function showRestaurants() {
  const interactive = document.getElementById('interactive-section');
  interactive.innerHTML = `
    <p style='color:#E50914; font-weight:bold; margin:15px 0;'>Opciones:</p>
    <button class="options-btn" onclick="window.open('https://maps.app.goo.gl/FjJcb8Ac2GdD8k4PA')">📍 Siete Olas</button>
    <button class="options-btn" onclick="window.open('https://maps.app.goo.gl/4Pm6J9sSVaRbevGu7')">📍 Tío Tomate</button>
    <button class="options-btn" onclick="window.open('https://maps.app.goo.gl/VCddaR6HHqV13bZJ8')">📍 Alazán</button>
    <button class="options-btn" onclick="window.open('https://maps.app.goo.gl/XEYZJiC7Ua4P2ojF8')">📍 Rocca Rolls</button>
    <button class="options-btn back-btn" onclick="openPlan('completo')">⬅️ Volver</button>
  `;
}

function showBreakfasts() {
  const interactive = document.getElementById('interactive-section');
  interactive.innerHTML = `
    <p style='color:#E50914; font-weight:bold; margin:15px 0;'>Lugares:</p>
    <button class="options-btn" onclick="window.open('https://maps.app.goo.gl/tYkGB4yceaA9mCQ58')">📍 Le Mint</button>
    <button class="options-btn" onclick="window.open('https://maps.app.goo.gl/ZvfqCANWus7zWBdz6')">📍 Bali Coffee House</button>
    <button class="options-btn" onclick="window.open('https://maps.app.goo.gl/JVZ3Fh7qGKTWCqUQ6')">📍 Bakery Lynch</button>
    <button class="options-btn back-btn" onclick="openPlan('manana')">⬅️ Volver</button>
  `;
}

function closeModal() { document.getElementById('detail-modal').classList.add('hidden'); }

function confirmar(plan) {
  const btn = document.getElementById('confirm-btn');
  const sel = plan || "Plan de Pololeo";
  btn.innerText = "RESERVANDO...";
  
  setTimeout(() => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, shapes: ['heart'], colors: ['#E50914', '#ffffff'] });
    
    // WhatsApp Automático
    const msg = encodeURIComponent(`¡Hola! Magda ha confirmado el plan: ${sel}. ❤️`);
    window.open(`https://wa.me/56933755577?text=${msg}`);
    
    // Easter Egg Final
    document.getElementById('detail-modal').classList.add('hidden');
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('final-scene').classList.remove('hidden');
  }, 1500);
}

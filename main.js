// Configuración
const debugMode = true; // Cambiar a false para que funcione según la fecha real
const simulatedDate = new Date("2025-12-01"); // Fecha simulada para pruebas

// Elementos del DOM
const grid = document.getElementById('calendar-grid');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const closeModalBtn = document.querySelector('.close-btn');
const closeLogBtn = document.getElementById('close-modal-btn');
const audioContainer = document.getElementById('audio-container');
const bgMusic = document.getElementById('bg-music');

// Obtener fecha actual
const now = debugMode ? simulatedDate : new Date();
const currentMonth = now.getMonth(); // 11 es Diciembre
const currentDay = now.getDate();

// Función para crear la nieve y corazones mejorada
function createSnowflakes() {
    const container = document.getElementById('snow-container');
    const flakes = 80; // Aumentado para más ambiente
    const symbols = ['❄️', '❤️', '✨', '⭐', '💕', '🎄', '🎁']; // Más variedad

    for (let i = 0; i < flakes; i++) {
        const snow = document.createElement('div');
        snow.classList.add('snowflake');

        // Elegir símbolo aleatorio
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        snow.textContent = randomSymbol;

        const left = Math.random() * 100;
        const size = 0.5 + Math.random() * 1.8; // Variedad de tamaños
        const duration = 5 + Math.random() * 15; // Velocidades más variadas
        const delay = Math.random() * 8;

        snow.style.left = `${left}vw`;
        snow.style.fontSize = `${size}rem`;
        snow.style.animationDuration = `${duration}s`;
        snow.style.animationDelay = `${delay}s`;

        // Efectos especiales según el símbolo
        if (randomSymbol === '❤️' || randomSymbol === '💕') {
            snow.style.filter = "drop-shadow(0 0 8px rgba(255, 107, 107, 0.8))";
            snow.style.color = "#ff6b6b";
        } else if (randomSymbol === '⭐' || randomSymbol === '✨') {
            snow.style.filter = "drop-shadow(0 0 8px rgba(255, 215, 0, 0.8))";
            snow.style.color = "#ffd700";
        } else if (randomSymbol === '🎄' || randomSymbol === '🎁') {
            snow.style.filter = "drop-shadow(0 0 5px rgba(255, 255, 255, 0.6))";
        }

        container.appendChild(snow);
    }
}

// Función para renderizar el calendario
function renderCalendar() {
    grid.innerHTML = '';
    let unlockedCount = 0;

    postales.forEach(postal => {
        const day = postal.id;
        const card = document.createElement('div');
        card.classList.add('day-card');

        // Lógica de bloqueo
        let isLocked = true;
        let isToday = false;

        if (currentMonth === 11) { // Diciembre
            if (day < currentDay) {
                isLocked = false;
            } else if (day === currentDay) {
                isLocked = false;
                isToday = true;
            } else {
                isLocked = true; // Días futuros bloqueados
            }
        } else if (currentMonth > 11) {
            // Año siguiente, todo desbloqueado
            isLocked = false;
        } else {
            // Antes de diciembre, todo bloqueado
            isLocked = true;
        }

        // Si estamos en debug, desbloquear todo
        if (debugMode) {
            isLocked = false;
            if (day === 1) isToday = true; // Solo para resaltar uno
        }

        // Clases CSS
        if (isLocked) {
            card.classList.add('locked');
        } else {
            card.classList.add('unlocked');
            if (isToday) card.classList.add('today');
            unlockedCount++;
        }

        // Contenido HTML de la carta
        card.innerHTML = `
      <div class="day-number">DAY ${day}</div>
      <div class="day-icon">${postal.icon || '🎁'}</div>
    `;

        // Evento Click
        card.addEventListener('click', () => {
            if (!isLocked) {
                openModal(postal);
            } else {
                shakeCard(card);
            }
        });

        // Animation Delay for Staggered Entrance
        card.style.animation = `cardEntrance 0.5s ease-out forwards`;
        card.style.animationDelay = `${day * 0.1}s`; // Stagger by 0.1s per day
        card.style.opacity = '0'; // Start invisible

        grid.appendChild(card);
    });

    // Update XP Bar
    updateXPBar(unlockedCount);
}

// Update XP Bar Function
function updateXPBar(unlockedCount) {
    const totalDays = 24;
    const percentage = (unlockedCount / totalDays) * 100;
    const xpFill = document.getElementById('xp-bar-fill');
    const xpText = document.getElementById('xp-text');

    if (xpFill && xpText) {
        xpFill.style.width = `${percentage}%`;
        xpText.innerText = `${unlockedCount} / ${totalDays} XP`;
    }
}

// Variable to track current day
let currentDay24 = false;

// Abrir Modal
function openModal(postal) {
    modalTitle.textContent = postal.title;
    modalMessage.innerHTML = postal.message; // Usar innerHTML para permitir <br>

    // Track if this is day 24
    currentDay24 = (postal.id === 24);

    // Música
    if (postal.song) {
        audioContainer.style.display = 'block';
        bgMusic.src = postal.song;
        bgMusic.play().catch(e => console.log("Autoplay prevented:", e));
    } else {
        audioContainer.style.display = 'none';
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }

    modal.classList.add('show');

    // ¡Celebración con confetti!
    createConfetti();
    playClickSound();

    // Check for Grand Finale when closing the last day (Day 24)
    if (postal.id === 24) {
        closeModalBtn.onclick = () => {
            closeModal();
            setTimeout(showFinale, 500); // Trigger finale after a short delay
        };
        // Also handle clicking outside or the other close button
        window.onclick = (e) => {
            if (e.target === modal) {
                closeModal();
                setTimeout(showFinale, 500);
            }
        };
    } else {
        // Reset default close behavior
        closeModalBtn.onclick = closeModal;
        window.onclick = (e) => {
            if (e.target === modal) {
                closeModal();
            }
        };
    }
}

// Cerrar Modal
function closeModal() {
    modal.classList.remove('show');
    // Only stop music if it's not day 24 (day 24 will transition to finale)
    if (!currentDay24) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
    } else {
        // For day 24, stop the modal music to prepare for finale music
        bgMusic.pause();
        bgMusic.currentTime = 0;
        currentDay24 = false; // Reset flag
    }
}

// Efecto de "sacudida" para items bloqueados
function shakeCard(card) {
    card.style.transform = 'translateX(5px)';
    setTimeout(() => {
        card.style.transform = 'translateX(-5px)';
    }, 100);
    setTimeout(() => {
        card.style.transform = 'translateX(0)';
    }, 200);
}

// Event Listeners
closeModalBtn.addEventListener('click', closeModal);
closeLogBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Grand Finale Logic
const finaleScreen = document.getElementById('finale-screen');
const replayBtn = document.getElementById('replay-btn');
const finaleMusic = document.getElementById('finale-music');
const canvas = document.getElementById('fireworks-canvas');
const ctx = canvas.getContext('2d');
let fireworks = [];
let particles = [];
let animationId;

function showFinale() {
    finaleScreen.classList.remove('hidden');
    // Force reflow
    void finaleScreen.offsetWidth;
    finaleScreen.classList.add('show');

    // Start Fireworks
    resizeCanvas();
    loopFireworks();

    // Play "Like It's Christmas" - Jonas Brothers
    finaleMusic.src = "assets/Like_Its_Christmas.mp3";
    finaleMusic.loop = true; // Loop the music
    finaleMusic.volume = 0.7; // Set volume to 70%
    // Use a small delay to ensure the finale screen is visible before playing
    setTimeout(() => {
        finaleMusic.play().catch(e => console.log("Autoplay prevented:", e));
    }, 300);
}

function hideFinale() {
    finaleScreen.classList.remove('show');
    // Stop the music
    finaleMusic.pause();
    finaleMusic.currentTime = 0;
    finaleMusic.loop = false;
    setTimeout(() => {
        finaleScreen.classList.add('hidden');
        cancelAnimationFrame(animationId);
    }, 1000);
}

replayBtn.addEventListener('click', hideFinale);

// Fireworks Logic
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);

class Firework {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;
        this.sx = Math.random() * 3 - 1.5;
        this.sy = Math.random() * -3 - 3;
        this.size = Math.random() * 2 + 1;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    update() {
        this.x += this.sx;
        this.y += this.sy;
        this.sy += 0.05; // Gravity
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.sx = Math.random() * 3 - 1.5;
        this.sy = Math.random() * 3 - 1.5;
        this.size = Math.random() * 2 + 1;
        this.color = color;
        this.life = 100;
    }
    update() {
        this.x += this.sx;
        this.y += this.sy;
        this.life--;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.life / 100;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

function loopFireworks() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'; // Trail effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (Math.random() < 0.05) {
        fireworks.push(new Firework());
    }

    for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].draw();
        if (fireworks[i].sy >= 0) { // Explode at peak
            for (let j = 0; j < 30; j++) {
                particles.push(new Particle(fireworks[i].x, fireworks[i].y, fireworks[i].color));
            }
            fireworks.splice(i, 1);
        }
    }

    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].life <= 0) {
            particles.splice(i, 1);
        }
    }

    animationId = requestAnimationFrame(loopFireworks);
}

// Countdown Timer Logic
function updateCountdown() {
    const christmasDate = new Date("December 25, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = christmasDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "MERRY CHRISTMAS!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}

// Konami Code Easter Egg
const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a"
];
let konamiIndex = 0;

window.addEventListener("keydown", (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    alert("🎮 KONAMI CODE ACTIVATED! 🎮\nInfinite Lives (and Love) Granted!");
    // Unlock all cards visually for fun
    const cards = document.querySelectorAll('.day-card');
    cards.forEach(card => {
        card.classList.remove('locked');
        card.classList.add('unlocked');
        card.style.border = "2px solid #ffd700";
    });
    createSnowflakes(); // More snow!
}

// Función de confetti para celebrar
function createConfetti() {
    const colors = ['#ff6b6b', '#ffd700', '#ff8e8e', '#ffb347', '#ff69b4', '#87ceeb'];
    const confettiCount = 50;
    const container = document.body;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.opacity = '1';
        confetti.style.zIndex = '9998';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.pointerEvents = 'none';

        const rotation = Math.random() * 360;
        const duration = 2 + Math.random() * 2;
        const drift = (Math.random() - 0.5) * 200;

        confetti.style.animation = `confettiFall ${duration}s ease-out forwards`;
        confetti.style.transform = `rotate(${rotation}deg)`;

        container.appendChild(confetti);

        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}

// Función para reproducir sonido de click (opcional)
function playClickSound() {
    // Puedes agregar un sonido de click aquí si lo deseas
    // const audio = new Audio('click.mp3');
    // audio.volume = 0.3;
    // audio.play();
}

// Inicialización
window.addEventListener('load', () => {
    createSnowflakes();
    renderCalendar();
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
});

// DOM Elements
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const currentShowEl = document.getElementById('current-show');
const currentHostEl = document.getElementById('current-host');
const timeRangeEl = document.getElementById('current-time-range');
const hostPhotoEl = document.getElementById('host-photo');
const visualizerBars = document.querySelectorAll('.bar');

// Program Schedule Data
const schedule = [
    {
        start: "00:00:00",
        end: "00:01:00",
        program: "TARDE INTERATIVA",
        host: "JADILSON REIS",
        photo: "assets/Jadilson_Reis.png"
    },
    {
        start: "00:02:00",
        end: "00:03:00",
        program: "AMANHECER SERTANEJO",
        host: "VALDEMIR BATISTA",
        photo: "assets/Valdemir_Batista.png"
    },
    {
        start: "00:04:00",
        end: "00:05:00",
        program: "MOMENTO DE AMOR",
        host: "WILLIAN GONZAGA",
        photo: "assets/Willian_Gonzaga.png",
        width: "180px"
    },
    {
        start: "00:05:00",
        end: "00:10:00",
        program: "MOMENTO DE AMOR",
        host: "WILLIAN GONZAGA",
        photo: "assets/Willian_Gonzaga.png",
        width: "180px"
    },
    {
        start: "00:10:59",
        end: "00:11:59",
        program: "TARDE INTERATIVA",
        host: "JADILSON REIS",
        photo: "assets/Jadilson_Reis.png"
    },
    {
        start: "00:12:00",
        end: "00:12:59",
        program: "ISSO É SERTÃO",
        host: "CHICO MOCÓ",
        photo: "assets/Chico_Moco.png"
    },
    {
        start: "00:12:59",
        end: "00:13:59",
        program: "AMANHECER SERTANEJO",
        host: "VALDEMIR BATISTA",
        photo: "assets/Valdemir_Batista.png"
    },
    {
        start: "00:14:00",
        end: "00:14:59",
        program: "ISSO É SERTÃO",
        host: "CHICO MOCÓ",
        photo: "assets/Chico_Moco.png"
    },
    {
        start: "00:14:59",
        end: "00:15:59",
        program: "MOMENTO DE AMOR",
        host: "WILLIAN GONZAGA",
        photo: "assets/Willian_Gonzaga.png",
        width: "180px"
    },
    {
        start: "00:16:59",
        end: "00:17:59",
        program: "ISSO É SERTÃO",
        host: "CHICO MOCÓ",
        photo: "assets/Chico_Moco.png"
    },
    {
        start: "00:20:00",
        end: "00:20:59",
        program: "TARDE INTERATIVA",
        host: "JADILSON REIS",
        photo: "assets/Jadilson_Reis.png"
    },
    {
        start: "00:21:00",
        end: "00:21:59",
        program: "AMANHECER SERTANEJO",
        host: "VALDEMIR BATISTA",
        photo: "assets/Valdemir_Batista.png"
    },
    {
        start: "00:22:00",
        end: "00:22:59",
        program: "MOMENTO DE AMOR",
        host: "WILLIAN GONZAGA",
        photo: "assets/Willian_Gonzaga.png",
        width: "180px"
    },
    {
        start: "00:23:00",
        end: "00:23:59",
        program: "ISSO É SERTÃO",
        host: "CHICO MOCÓ",
        photo: "assets/Chico_Moco.png"
    },
    {
        start: "00:36:00",
        end: "00:37:00",
        program: "TARDE INTERATIVA",
        host: "JADILSON REIS",
        photo: "assets/Jadilson_Reis.png"
    },
    {
        start: "00:37:00",
        end: "00:38:00",
        program: "AMANHECER SERTANEJO",
        host: "VALDEMIR BATISTA",
        photo: "assets/Valdemir_Batista.png"
    },
    {
        start: "00:38:00",
        end: "00:40:00",
        program: "MOMENTO DE AMOR",
        host: "WILLIAN GONZAGA",
        photo: "assets/Willian_Gonzaga.png",
        width: "180px"
    },
    {
        start: "00:40:00",
        end: "00:42:00",
        program: "ISSO É SERTÃO",
        host: "CHICO MOCÓ",
        photo: "assets/Chico_Moco.png"
    },
    {
        start: "01:00:00",
        end: "01:01:00",
        program: "TARDE INTERATIVA",
        host: "JADILSON REIS",
        photo: "assets/Jadilson_Reis.png"
    },
    {
        start: "01:01:00",
        end: "01:02:00",
        program: "AMANHECER SERTANEJO",
        host: "VALDEMIR BATISTA",
        photo: "assets/Valdemir_Batista.png"
    },
    {
        start: "01:02:00",
        end: "01:03:00",
        program: "MOMENTO DE AMOR",
        host: "WILLIAN GONZAGA",
        photo: "assets/Willian_Gonzaga.png",
        width: "180px"
    },
    {
        start: "01:03:00",
        end: "01:04:00",
        program: "ISSO É SERTÃO",
        host: "CHICO MOCÓ",
        photo: "assets/Chico_Moco.png"
    },
    {
        start: "08:00:00",
        end: "11:00:00",
        program: "MANHÃ SERTANEJA",
        host: "LOCUTOR AMIGO",
        photo: "assets/placeholder-host.png"
    },
    {
        start: "13:00:00",
        end: "15:00:00",
        program: "TARDE MUSICAL",
        host: "LOCUTORA MARIA",
        photo: "assets/placeholder-host-female.png"
    },
    {
        start: "15:00:00",
        end: "18:00:00",
        program: "SHOW DA TARDE",
        host: "LOCUTOR JOÃO",
        photo: "assets/placeholder-host.png"
    },
    {
        start: "18:00:00",
        end: "20:00:00",
        program: "VOZ DO POVO",
        host: "EQUIPE LUZ",
        photo: "assets/placeholder-host-group.png"
    },
    {
        start: "22:00:00",
        end: "22:50:00",
        program: "PARADA POPULAR",
        host: "JADILSON REIS",
        photo: "assets/Jadilson_Reis.png"
    },
    {
        start: "22:50:00",
        end: "23:00:00",
        program: "AMANHECER SERTANEJO",
        host: "VALDEMIR BATISTA",
        photo: "assets/Valdemir_Batista.png"
    },
    {
        start: "23:50:00",
        end: "23:55:00",
        program: "TARDE INTERATIVA",
        host: "JADILSON REIS",
        photo: "assets/Jadilson_Reis.png"
    }
];

// Audio Context (Placeholder)
let isPlaying = false;
let audio = new Audio(); 

function togglePlayback() {
    isPlaying = !isPlaying;
    
    if (isPlaying) {
        playIcon.setAttribute('data-lucide', 'pause');
        startVisualizer();
    } else {
        playIcon.setAttribute('data-lucide', 'play');
        stopVisualizer();
    }
    lucide.createIcons();
}

function updateVolume(val) {
    audio.volume = val;
}

// Visualizer Logic
let visualizerInterval;
function startVisualizer() {
    visualizerInterval = setInterval(() => {
        visualizerBars.forEach(bar => {
            const height = Math.floor(Math.random() * 25) + 5;
            bar.style.height = `${height}px`;
        });
    }, 150);
}

function stopVisualizer() {
    clearInterval(visualizerInterval);
    visualizerBars.forEach(bar => bar.style.height = '10px');
}

// Dynamic UI Update Logic
function updateCurrentProgram() {
    const now = new Date();
    const currentTimeString = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    
    // Find matching program
    let activeProgram = schedule.find(item => {
        return currentTimeString >= item.start && currentTimeString < item.end;
    });

    // Default if no program matches (e.g., night time)
    if (!activeProgram) {
        activeProgram = {
            start: "20:00",
            end: "08:00",
            program: "PROGRAMAÇÃO MUSICAL",
            host: "SISTEMA LUZ",
            photo: "assets/placeholder-host.png"
        };
    }

    // Update DOM
    if (currentShowEl.innerText !== activeProgram.program) {
        // Trigger Animation
        const infoContainer = currentShowEl.closest('.player-main-content');
        infoContainer.classList.remove('fade-in-up');
        void infoContainer.offsetWidth; // Trigger reflow for animation restart
        infoContainer.classList.add('fade-in-up');

        currentShowEl.innerText = activeProgram.program;
        currentHostEl.innerText = activeProgram.host;
        timeRangeEl.innerText = `${activeProgram.start} ÀS ${activeProgram.end}`;
        hostPhotoEl.src = activeProgram.photo;
        
        // Apply individual width if defined, else default
        hostPhotoEl.parentElement.style.width = activeProgram.width || '250px';
    }
}

// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    
    if (navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'white';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 10px 10px rgba(0,0,0,0.1)';
        navLinks.style.zIndex = '1000';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCurrentProgram();
    setInterval(updateCurrentProgram, 1000); // Verificação a cada 1 segundo para precisão exata
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

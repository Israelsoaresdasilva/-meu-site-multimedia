document.addEventListener('DOMContentLoaded', () => {
    // Destaque dinâmico no menu
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Gerador de Frequência (Web Audio API)
    const btnBeep = document.getElementById('btn-beep');
    if (btnBeep) {
        btnBeep.addEventListener('click', () => {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            oscillator.start();
            gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 1);
            oscillator.stop(audioCtx.currentTime + 1);
        });
    }

    // Alternar Tema Claro/Escuro
    const btnTheme = document.getElementById('btn-theme');
    if (btnTheme) {
        btnTheme.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            if (document.body.classList.contains('light-theme')) {
                document.body.style.backgroundColor = '#f8f9fa';
                document.body.style.color = '#212529';
            } else {
                document.body.style.backgroundColor = '#121214';
                document.body.style.color = '#e1e1e6';
            }
        });
    }

    // Interatividade com Imagem (Zoom ao clicar - Ação JS)
    const interactiveImg = document.getElementById('interactive-img');
    if (interactiveImg) {
        let zoomed = false;
        interactiveImg.addEventListener('click', () => {
            zoomed = !zoomed;
            if (zoomed) {
                interactiveImg.style.transform = 'scale(1.15)';
                interactiveImg.style.transition = 'transform 0.3s ease';
            } else {
                interactiveImg.style.transform = 'scale(1)';
            }
        });
    }

    // Interatividade com Áudio (Botão customizado para tocar via JS)
    const btnPlayAudio = document.getElementById('btn-play-audio');
    const customAudio = document.getElementById('custom-audio');
    if (btnPlayAudio && customAudio) {
        btnPlayAudio.addEventListener('click', () => {
            if (customAudio.paused) {
                customAudio.play();
                btnPlayAudio.textContent = 'Pausar Áudio Interativo';
            } else {
                customAudio.pause();
                btnPlayAudio.textContent = 'Tocar Áudio Interativo';
            }
        });
    }
});


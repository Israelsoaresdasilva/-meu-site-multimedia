document.addEventListener('DOMContentLoaded', () => {
    // Destaque dinâmico no menu
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Gerador de Frequência (Web Audio API) com Feedback Visual de IHC
    const btnBeep = document.getElementById('btn-beep');
    if (btnBeep) {
        btnBeep.addEventListener('click', () => {
            // Efeito visual de IHC (Feedback imediato na interface)
            btnBeep.style.backgroundColor = '#00ffcc';
            btnBeep.style.color = '#121214';
            setTimeout(() => {
                btnBeep.style.backgroundColor = '';
                btnBeep.style.color = '';
            }, 500);

            // Execução do áudio via Web Audio API
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
        });
    }

    // Interatividade com Imagem (Zoom)
    const interactiveImg = document.getElementById('interactive-img');
    if (interactiveImg) {
        let zoomed = false;
        interactiveImg.addEventListener('click', () => {
            zoomed = !zoomed;
            interactiveImg.style.transform = zoomed ? 'scale(1.15)' : 'scale(1)';
            interactiveImg.style.transition = 'transform 0.3s ease';
        });
    }

    // Áudio Interativo
    const btnPlayAudio = document.getElementById('btn-play-audio');
    const customAudio = document.getElementById('custom-audio');
    if (btnPlayAudio && customAudio) {
        btnPlayAudio.addEventListener('click', () => {
            if (customAudio.paused) {
                customAudio.play();
                btnPlayAudio.textContent = 'Pausar Áudio';
            } else {
                customAudio.pause();
                btnPlayAudio.textContent = 'Tocar Áudio';
            }
        });
    }
});

    // Efeito interativo na página de Autoria (Simulação de Frequência)
    const boxAutor = document.getElementById('box-autor');
    if (boxAutor) {
        boxAutor.addEventListener('click', () => {
            boxAutor.style.background = '#00ffcc';
            boxAutor.style.color = '#121214';
            boxAutor.querySelector('h3').textContent = '[ Frequência Ativa: Sinal Modificado! ]';
            setTimeout(() => {
                boxAutor.style.background = '';
                boxAutor.style.color = '';
                boxAutor.querySelector('h3').textContent = '[ Clique para Ativar Resposta de Frequência ]';
            }, 1000);
        });
    }


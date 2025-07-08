
// Función para crear corazones que caen
function createFallingHeart() {
    const heartsContainer = document.querySelector('.falling-hearts');
    const heart = document.createElement('div');
    heart.className = 'falling-heart';
    
    // Diferentes tipos de corazones
    const heartTypes = ['❤️', '💕', '💖', '💗', '💝', '💜', '🧡', '💛'];
    heart.textContent = heartTypes[Math.floor(Math.random() * heartTypes.length)];
    
    // Posición aleatoria
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    heartsContainer.appendChild(heart);
    
    // Eliminar el corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Crear corazones que caen cada 500ms
setInterval(createFallingHeart, 500);

// Función para mostrar la sorpresa
function showSurprise() {
    const surprise = document.getElementById('surprise');
    surprise.classList.add('show');
    
    // Crear explosión de corazones
    const explosionContainer = surprise.querySelector('.explosion-hearts');
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'explosion-heart';
            heart.textContent = '💕';
            
            // Posición aleatoria
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            
            explosionContainer.appendChild(heart);
            
            // Eliminar después de la animación
            setTimeout(() => {
                heart.remove();
            }, 2000);
        }, i * 100);
    }
    
    // Crear corazones volando por toda la pantalla
    createFlyingHeartsShow();
}

// Función para crear show de corazones volando
function createFlyingHeartsShow() {
    const heartsTypes = ['💕', '❤️', '💖', '💗', '💝', '💜', '🧡', '💛', '💚', '💙'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.style.position = 'fixed';
            heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.bottom = '-50px';
            heart.style.zIndex = '9999';
            heart.style.pointerEvents = 'none';
            heart.textContent = heartsTypes[Math.floor(Math.random() * heartsTypes.length)];
            heart.style.animation = 'flyingHeart 4s ease-out forwards';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }, i * 150);
    }
}

// Función para abrir el sobre
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const letterContainer = document.getElementById('letter-container');
    const envelopeContainer = document.querySelector('.envelope-container');
    
    // Marcar sobre como abierto
    envelope.classList.add('opened');
    
    // Crear corazones volando cuando se abre
    createFlyingHeartsShow();
    
    // Después de un momento, ocultar sobre y mostrar carta
    setTimeout(() => {
        envelopeContainer.style.display = 'none';
        letterContainer.classList.add('show');
        
        // Iniciar efectos de la carta
        setTimeout(() => {
            startLetterEffects();
        }, 500);
    }, 1000);
}

// Función para cerrar la carta y volver al sobre
function closeLetter() {
    const envelope = document.getElementById('envelope');
    const letterContainer = document.getElementById('letter-container');
    const envelopeContainer = document.querySelector('.envelope-container');
    
    // Animación de salida de la carta
    letterContainer.style.animation = 'letterSlideDown 1s ease-in forwards';
    
    setTimeout(() => {
        letterContainer.classList.remove('show');
        letterContainer.style.animation = '';
        envelopeContainer.style.display = 'flex';
        envelope.classList.remove('opened');
    }, 1000);
}

// Función para iniciar efectos de la carta
function startLetterEffects() {
    // Hacer que los párrafos aparezcan gradualmente
    document.querySelectorAll('.letter-paragraph').forEach((paragraph, index) => {
        paragraph.style.opacity = '0';
        paragraph.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            paragraph.style.transition = 'all 0.8s ease';
            paragraph.style.opacity = '1';
            paragraph.style.transform = 'translateY(0)';
        }, (index + 1) * 800);
    });
}

// Event listener para abrir el sobre
document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    if (envelope) {
        envelope.addEventListener('click', openEnvelope);
    }
});

// Agregar animación de carta deslizándose hacia abajo
const letterSlideStyle = document.createElement('style');
letterSlideStyle.textContent = `
    @keyframes letterSlideDown {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(100vh) scale(0.8);
        }
    }
`;
document.head.appendChild(letterSlideStyle);

// Efecto de escritura para el título
function typeWriterEffect() {
    const title = document.querySelector('.letter-title');
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, 100);
}

// Iniciar efecto de escritura después de 1 segundo
setTimeout(typeWriterEffect, 1000);

// Animación para los elementos de memoria
document.querySelectorAll('.memory-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
    item.style.animation = 'fadeInLeft 0.8s ease-out forwards';
});

// Agregar CSS para fadeInLeft
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// Efecto de partículas de amor en el mouse
document.addEventListener('mousemove', function(e) {
    if (Math.random() < 0.1) { // 10% de probabilidad
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        particle.style.fontSize = '12px';
        particle.style.color = '#ff6b9d';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.textContent = '💕';
        particle.style.animation = 'particleFade 1s ease-out forwards';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
});

// Agregar CSS para particleFade
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFade {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.5) translateY(-20px);
        }
    }
`;
document.head.appendChild(particleStyle);

// Control de música con YouTube
document.getElementById('music-toggle').addEventListener('click', function() {
    const icon = this.querySelector('i');
    const iframe = document.getElementById('youtube-music');
    
    if (icon.classList.contains('fa-music')) {
        icon.classList.remove('fa-music');
        icon.classList.add('fa-pause');
        // Mostrar iframe y reproducir
        iframe.style.display = 'block';
        iframe.src = iframe.src.replace('autoplay=0', 'autoplay=1');
        console.log('🎵 Música romántica iniciada');
    } else {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-music');
        // Ocultar iframe y pausar
        iframe.style.display = 'none';
        iframe.src = iframe.src.replace('autoplay=1', 'autoplay=0');
        console.log('🎵 Música pausada');
    }
});

// Efecto de hover en los corazones decorativos
document.querySelectorAll('.heart-deco').forEach(heart => {
    heart.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.5) rotate(360deg)';
        this.style.transition = 'transform 0.5s ease';
    });
    
    heart.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Crear más rosas flotantes ocasionalmente
function createFloatingRose() {
    const rose = document.createElement('div');
    rose.style.position = 'fixed';
    rose.style.fontSize = '30px';
    rose.style.left = Math.random() * 100 + '%';
    rose.style.bottom = '-50px';
    rose.style.zIndex = '1';
    rose.style.pointerEvents = 'none';
    rose.textContent = '🌹';
    rose.style.animation = 'roseFloat 8s linear forwards';
    
    document.body.appendChild(rose);
    
    setTimeout(() => {
        rose.remove();
    }, 8000);
}

// Crear rosa flotante cada 3 segundos
setInterval(createFloatingRose, 3000);

// Agregar CSS para roseFloat
const roseStyle = document.createElement('style');
roseStyle.textContent = `
    @keyframes roseFloat {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes flyingHeart {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 1;
        }
        25% {
            transform: translateY(-25vh) translateX(50px) rotate(90deg);
            opacity: 1;
        }
        50% {
            transform: translateY(-50vh) translateX(-30px) rotate(180deg);
            opacity: 1;
        }
        75% {
            transform: translateY(-75vh) translateX(70px) rotate(270deg);
            opacity: 0.8;
        }
        100% {
            transform: translateY(-100vh) translateX(0) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(roseStyle);

// Hacer que los párrafos aparezcan gradualmente
document.querySelectorAll('.letter-paragraph').forEach((paragraph, index) => {
    paragraph.style.opacity = '0';
    paragraph.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        paragraph.style.transition = 'all 0.8s ease';
        paragraph.style.opacity = '1';
        paragraph.style.transform = 'translateY(0)';
    }, (index + 1) * 1000);
});

console.log('💕 Carta de amor cargada con mucho cariño!');

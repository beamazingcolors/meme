const memes = [
    {
        title: "La Caída de Edgar",
        year: "2006",
        country: "México",
        description: "El video que lo inició todo en YouTube México. Un inocente intento de cruzar un río se convirtió en una traición épica. El inmortal grito '¡Ya wey!' marcó a toda una generación.",
        videoId: "b89CnP0Iq30"
    },
    {
        title: "El FUA",
        year: "2011",
        country: "México",
        description: "Un hombre en la calle nos dio la mejor lección de superación personal: sacar el carácter, la fuerza, el poder desde el estómago... ¡Dar el extra, dar el FUA!",
        videoId: "SWOz-kIwDuU"
    },
    {
        title: "Soraya Montenegro",
        year: "Clásico",
        country: "México / Latam",
        description: "La villana más icónica de las telenovelas. Su escena hiperdramática gritando '¡Maldita lisiada!' es el epítome de la exageración novelesca y un pilar del internet latino.",
        videoId: "7ci8m6gPHD8"
    },
    {
        title: "Pedrito Sola y la Mayonesa",
        year: "2007",
        country: "México",
        description: "El error publicitario más legendario de la televisión en vivo. Confundir la marca McCormick con Hellmann's es un fail que nos sigue dando risa años después.",
        videoId: "mUf2vTaRolI"
    },
    {
        title: "El Pasito Perrón",
        year: "2017",
        country: "México",
        description: "Un Niño Dios bailando al ritmo de una cumbia pegajosa. Una mezcla de irreverencia y humor que se volvió una sensación masiva en redes sociales.",
        videoId: "ueqAVtRB0Lw"
    },
    {
        title: "El Niño del Oxxo",
        year: "2021",
        country: "México",
        description: "La reacción pícara de un supuesto cajero del Oxxo al vender unos preservativos. Su particular sonido y mirada lo catapultaron a la fama mundial instantánea.",
        videoId: "CZnLhsA7U7c"
    },
    {
        title: "Acompáñenme a ver esta triste historia",
        year: "Clásico",
        country: "México / Latam",
        description: "Frase célebre del programa de Silvia Pinal, utilizada magistralmente por todo internet para introducir cualquier relato lleno de ironía, desgracia o simple mala suerte.",
        videoId: "xPNljNQs1NU"
    }
];

let currentIndex = 0;
let isPlaying = false;
let synthesis = window.speechSynthesis;
let utterance = null;
let autoplayTimeout = null;

const introScreen = document.getElementById('intro-screen');
const playerScreen = document.getElementById('player-screen');
const startBtn = document.getElementById('start-btn');
const titleEl = document.getElementById('meme-title');
const yearEl = document.getElementById('meme-year');
const countryEl = document.getElementById('meme-country');
const descEl = document.getElementById('meme-desc');
const mediaContainer = document.getElementById('media-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pauseBtn = document.getElementById('pause-btn');
const progressBar = document.getElementById('progress-bar');

startBtn.addEventListener('click', () => {
    introScreen.classList.remove('active');
    playerScreen.classList.add('active');
    
    // Initial welcome speech
    if ('speechSynthesis' in window) {
        let welcome = new SpeechSynthesisUtterance("Iniciando recorrido por el Museo del Meme Latinoamericano.");
        welcome.lang = 'es-MX';
        welcome.onend = () => loadMeme(currentIndex);
        synthesis.speak(welcome);
        isPlaying = true;
    } else {
        loadMeme(currentIndex);
    }
});

function loadMeme(index) {
    clearTimeout(autoplayTimeout);
    const meme = memes[index];
    
    // Add fade out/in effect
    titleEl.style.opacity = 0;
    descEl.style.opacity = 0;
    
    setTimeout(() => {
        titleEl.textContent = meme.title;
        yearEl.textContent = meme.year;
        countryEl.textContent = meme.country;
        descEl.textContent = meme.description;
        
        // Use a muted autoplaying youtube iframe loop, or just regular embed
        // Muted is required for auto-play in modern browsers
        mediaContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${meme.videoId}?autoplay=1&mute=0&controls=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        
        titleEl.style.transition = "opacity 0.5s ease";
        descEl.style.transition = "opacity 0.5s ease";
        titleEl.style.opacity = 1;
        descEl.style.opacity = 1;
        
        updateProgress();
        
        if (isPlaying) {
            speakMemeInfo(meme);
        }
    }, 300);
}

function updateProgress() {
    progressBar.style.width = `${((currentIndex + 1) / memes.length) * 100}%`;
}

function speakMemeInfo(meme) {
    synthesis.cancel();
    
    setTimeout(() => {
        utterance = new SpeechSynthesisUtterance(`${meme.title}. ${meme.description}`);
        utterance.lang = 'es-MX';
        
        const voices = synthesis.getVoices();
        const mxVoice = voices.find(v => v.lang === 'es-MX' || v.lang === 'es-ES' || v.lang.includes('es'));
        if (mxVoice) utterance.voice = mxVoice;
        
        utterance.onend = () => {
            // Wait 12 seconds after reading to let user watch the video before advancing
            if (isPlaying && currentIndex < memes.length - 1) {
                autoplayTimeout = setTimeout(() => {
                    currentIndex++;
                    loadMeme(currentIndex);
                }, 12000);
            }
        };
        
        synthesis.speak(utterance);
    }, 500);
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        synthesis.cancel();
        currentIndex--;
        loadMeme(currentIndex);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < memes.length - 1) {
        synthesis.cancel();
        currentIndex++;
        loadMeme(currentIndex);
    }
});

pauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        synthesis.cancel();
        clearTimeout(autoplayTimeout);
        isPlaying = false;
        pauseBtn.innerHTML = '▶️ Reanudar';
        pauseBtn.style.background = 'rgba(236, 72, 153, 0.3)';
    } else {
        isPlaying = true;
        pauseBtn.innerHTML = '⏸️ Pausar';
        pauseBtn.style.background = 'rgba(255, 255, 255, 0.05)';
        speakMemeInfo(memes[currentIndex]);
    }
});

// Proactively load voices
if ('speechSynthesis' in window) {
    synthesis.onvoiceschanged = () => synthesis.getVoices();
}

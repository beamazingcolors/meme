const memes = [
    {
        "title": "La Caída de Edgar",
        "year": "2006",
        "country": "México",
        "description": "El video que lo inició todo en YouTube México. Un inocente intento de cruzar un río se convirtió en una traición épica. El inmortal grito ¡Ya wey! marcó a toda una generación.",
        "videoId": "b89CnP0Iq30"
    },
    {
        "title": "El FUA",
        "year": "2011",
        "country": "México",
        "description": "Un hombre en la calle nos dio la mejor lección de superación personal: sacar el carácter, la fuerza, el poder desde el estómago... ¡Dar el extra, dar el FUA!",
        "videoId": "SWOz-kIwDuU"
    },
    {
        "title": "Soraya Montenegro",
        "year": "Clásico",
        "country": "México",
        "description": "La villana más icónica de las telenovelas. Su escena hiperdramática gritando ¡Maldita lisiada! es el epítome de la exageración novelesca.",
        "videoId": "7ci8m6gPHD8"
    },
    {
        "title": "Pedrito Sola y la Mayonesa",
        "year": "2007",
        "country": "México",
        "description": "El error publicitario más legendario de la televisión en vivo. Confundir la marca McCormick con Hellmanns es un fail que nos sigue dando risa años después.",
        "videoId": "mUf2vTaRolI"
    },
    {
        "title": "El Pasito Perrón",
        "year": "2017",
        "country": "México",
        "description": "Un Niño Dios bailando al ritmo de una cumbia pegajosa. Una mezcla de irreverencia y humor que se volvió una sensación masiva en redes sociales.",
        "videoId": "ueqAVtRB0Lw"
    },
    {
        "title": "El Niño del Oxxo",
        "year": "2021",
        "country": "México",
        "description": "La reacción pícara de un supuesto cajero del Oxxo al vender unos preservativos. Su particular sonido y mirada lo catapultaron a la fama mundial instantánea.",
        "videoId": "IXnZ2o1i0Co"
    },
    {
        "title": "Acompáñenme a ver esta triste historia",
        "year": "Clásico",
        "country": "México",
        "description": "Frase célebre de Silvia Pinal, utilizada magistralmente por todo internet para introducir cualquier relato lleno de ironía, desgracia o simple mala suerte.",
        "videoId": "WCqcabevjGM"
    },
    {
        "title": "El Canaca",
        "year": "2007",
        "country": "México",
        "description": "¡Me amarraron como puerco! Guillermo López Langarica nos regaló oro puro al ser detenido, alegando ser hijo del dueño de Promotora Mexicana Gaitán.",
        "videoId": "Df5NJymyR8Q"
    },
    {
        "title": "El Ferras",
        "year": "2008",
        "country": "México",
        "description": "Felipe Ferra Gómez relató su crimen con un carisma inusual frente a las cámaras. ¡La bala fría, papá! Un clásico de la nota roja convertida en meme.",
        "videoId": "y-wJo11dzPc"
    },
    {
        "title": "Tengo Miedo",
        "year": "2007",
        "country": "México",
        "description": "Un automovilista detenido en Monterrey entra en pánico total ante las cámaras y nos regala la icónica frase ¡Tengo miedo, tengo miedo!",
        "videoId": "3YoHprCsGD0"
    },
    {
        "title": "Las Perdidas",
        "year": "2017",
        "country": "México",
        "description": "Wendy y Paola grabaron un video diciendo ¡Estamos perdidas, perdidas! en un cerro, iniciando su camino hacia el estrellato de internet.",
        "videoId": "_m8pV_GfFTo"
    },
    {
        "title": "Lady Wuuu",
        "year": "2016",
        "country": "México",
        "description": "Un fanático de Menudo que al ser entrevistado expresó su emoción con un grito tan peculiar y festivo que contagió a todo el país. ¡Wuuuu!",
        "videoId": "l5f1q_5QF3I"
    },
    {
        "title": "Estúpida, mi pelo, idiota",
        "year": "2012",
        "country": "México / USA",
        "description": "En el programa Caso Cerrado, Esteban nos regaló este drama total al ser agredido con agua, preocupándose más por su peinado que por la situación.",
        "videoId": "iXvJK75BonI"
    },
    {
        "title": "MC Dinero",
        "year": "2014",
        "country": "México",
        "description": "Un joven improvisando rap nos enseñó una valiosa lección de economía: El dinero es dinero, el dinero es dinero, aprende algo dinero.",
        "videoId": "uDDx95f_9iI"
    },
    {
        "title": "Lady Coral Blanco",
        "year": "2016",
        "country": "México",
        "description": "Un discurso incomprensible sobre el medio ambiente, los corales y la contaminación que nos dejó a todos muy confundidos y divertidos.",
        "videoId": "HRTGkOFxGQs"
    },
    {
        "title": "Se va a hacer o no se va a hacer",
        "year": "2017",
        "country": "México",
        "description": "La carnita asada es una religión en el norte de México, y este hombre inmortalizó la pregunta más importante del fin de semana.",
        "videoId": "zWypcDJP8Ag"
    },
    {
        "title": "Me escuchan, me oyen",
        "year": "2018",
        "country": "México",
        "description": "Thalía hizo un Facebook Live con tanta energía y un traje tan peculiar que su cantadito de ¿están ahí, mis vidas? se volvió un reto viral.",
        "videoId": "w0dPE5Io41g"
    },
    {
        "title": "Peter La Anguila",
        "year": "2012",
        "country": "Cuba / Latam",
        "description": "Un ritmo pegajoso y unos movimientos de baile físicamente imposibles para la mayoría. Peter La Anguila hipnotizó a toda Latinoamérica.",
        "videoId": "A-ZGg9zSE2Q"
    },
    {
        "title": "Medio Metro",
        "year": "2022",
        "country": "México",
        "description": "El baile sonidero llegó a otro nivel con este personaje disfrazado del Chavo del 8. ¡Ah, Medio Metro! Un fenómeno de las pistas de baile de barrio.",
        "videoId": "mBbJ-6-NpOA"
    },
    {
        "title": "Juay de Rito",
        "year": "2011",
        "country": "México",
        "description": "El periodista Joaquín López-Dóriga entrevistó a Anthony Hopkins e intentó hablar inglés... El resultado fue un desastre televisivo y un meme eterno.",
        "videoId": "QxJN6q1GRiw"
    },
    {
        "title": "No me simpatizas",
        "year": "Clásico",
        "country": "México / Latam",
        "description": "Kiko del Chavo del 8 siempre tuvo las mejores frases de desprecio. Una expresión que usamos hasta el día de hoy para demostrar desagrado.",
        "videoId": "ggUdSulLXV4"
    },
    {
        "title": "Za Za Za (Mesa que más aplauda)",
        "year": "2004",
        "country": "México",
        "description": "Grupo Clímax creó el primer gran fenómeno musical viral antes de que existieran las redes sociales modernas. ¡Y le mando, y le mando, y le mando a la niña!",
        "videoId": "plNFW-1iJk0"
    },
    {
        "title": "Ayuwoki",
        "year": "2019",
        "country": "Latam",
        "description": "Un animatrónico mal hecho de Michael Jackson combinado con la pronunciación de Annie, are you okay? dio origen al monstruo que se aparece a las 3 AM.",
        "videoId": "5bJlx7Y0-Og"
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
            if (isPlaying) {
                autoplayTimeout = setTimeout(() => {
                    currentIndex = (currentIndex + 1) % memes.length;
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
    synthesis.cancel();
    currentIndex = (currentIndex + 1) % memes.length;
    loadMeme(currentIndex);
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

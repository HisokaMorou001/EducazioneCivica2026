const introScene = document.getElementById('intro-scene');

// --- RIDIMENSIONAMENTO BACKGROUND ---
function resizeBackground() {
    const body = document.body;
    const windowAspectRatio = window.innerWidth / window.innerHeight;
    const imageAspectRatio = 16 / 9;

    body.style.backgroundSize =
        windowAspectRatio > imageAspectRatio ? "auto 100%" : "100% auto";

    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundAttachment = "fixed";
}

// --- RESET TESTO ---
function resetSchermo() {
    introScene.innerHTML = "";
}

// --- SCRITTURA STILE POKÉMON ---
function scriviFrase(elemento, testo, velocita, callback) {
    let i = 0;
    elemento.innerHTML = "";

    function type() {
        if (i < testo.length) {
            elemento.innerHTML += testo.charAt(i);
            i++;
            setTimeout(type, velocita);
        } else {
            // frase finita → pausa → pulizia
            setTimeout(() => {
                resetSchermo();
                if (callback) callback();
            }, 800);
        }
    }
    type();
}

// --- SEQUENZA FRASI ---
function scriviSequenza(frasi, index = 0) {
    if (index >= frasi.length) {
        // finita intro → cambio immediato
        window.location.href = "personaggi.html";
        return;
    }

    scriviFrase(introScene, frasi[index], 30, () => {
        scriviSequenza(frasi, index + 1);
    });
}

// --- AVVIO SCENA ---
function avviaScene() {
    const numeroGiocatore = Math.floor(Math.random() * 100) + 1;

    document.body.style.backgroundImage = "url('immagini/intro.png')";
    resizeBackground();

    const frasi = [
        `Ciao giocatore numero ${numeroGiocatore}! Ho un lavoretto interessante per te.`,
        `Ultimamente, qualcuno infastidisce tutta la scuola da diversi giorni.`,
        `Abbiamo chiamato all'appello 10 studenti particolari che stiamo tenendo d'occhio da tempo.`,
        `Parla con loro e cerca di capire chi sia il colpevole.`
    ];

    scriviSequenza(frasi);
}

// --- EVENTI ---
window.addEventListener("load", avviaScene);
window.addEventListener("resize", resizeBackground);
window.addEventListener("orientationchange", () => {
    setTimeout(resizeBackground, 100);
});

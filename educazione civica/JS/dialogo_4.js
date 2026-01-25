const introScene = document.getElementById('intro-scene');

let frasi = [];
let indexFrase = 0;
let bottone;

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

// --- RESET ---
function resetSchermo() {
    introScene.innerHTML = "";
}

// --- CREA BOTTONE CONTINUA ---
function creaBottone() {
    bottone = document.createElement("button");
    bottone.textContent = "CONTINUA";
    bottone.className = "continua-btn";

    bottone.addEventListener("click", () => {
        bottone.remove();
        indexFrase++;

        if (indexFrase < frasi.length) {
            scriviFrase(frasi[indexFrase]);
        } else {
            window.location.href = "personaggi.html";
        }
    });

    introScene.appendChild(bottone);
}

// --- SCRITTURA TESTO ---
function scriviFrase(testo) {
    let i = 0;
    introScene.innerHTML = "";

    function type() {
        if (i < testo.length) {
            introScene.innerHTML += testo.charAt(i);
            i++;
            setTimeout(type, 30);
        } else {
            creaBottone();
        }
    }

    type();
}

// --- AVVIO SCENA ---
function avviaScene() {
    document.body.style.backgroundImage = "url('immagini/dialogo_4.png')";
    resizeBackground();

    frasi = [
        `Ciao. Ho analizzato un po’ la situazione… e credo di avere informazioni rilevanti.`,
        `La quantita' di schiuma usata era molta. Serviva qualcuno con forza e velocita'.`,
        `Ho trovato anche tracce di schiuma sul pavimento che portano verso il campo da basket.`,
        `Manami Okuda si allena li ogni mattina. Potrebbe non essere una coincidenza.`
    ];

    indexFrase = 0;
    scriviFrase(frasi[indexFrase]);
}

// --- EVENTI ---
window.addEventListener("load", avviaScene);
window.addEventListener("resize", resizeBackground);
window.addEventListener("orientationchange", () => {
    setTimeout(resizeBackground, 100);
});

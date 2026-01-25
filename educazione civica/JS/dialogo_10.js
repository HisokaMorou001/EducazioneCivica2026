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
    document.body.style.backgroundImage = "url('immagini/dialogo_10.png')";
    resizeBackground();

    frasi = [
        `Detective! Ho visto una scena che sembra uscita da un film.`,
        `Una persona ha aperto l’armadietto e ha spruzzato schiuma ovunque, come un effetto speciale.`,
        `Aveva movimenti atletici, come se fosse abituato a muoversi veloce.`,
        `E l’unico che si muove così… e' Manami Okuda.`
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

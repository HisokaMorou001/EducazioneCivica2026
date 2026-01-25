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
    document.body.style.backgroundImage = "url('immagini/dialogo_1.png')";
    resizeBackground();

    frasi = [
        `Ehm… ciao. Io non parlo molto, ma stamattina ho visto qualcosa vicino agli armadietti… forse puo' esserti utile.`,
        `Ho notato che qualcuno teneva in mano una bomboletta. Non ho visto il volto, ma era uno con la felpa sportiva.`,
        `La persona sembrava avere molta fretta, come se non volesse essere vista. E' scappata verso la palestra.`,
        `Non so se serve, ma quella felpa… mi sembra di averla vista spesso addosso a Manami Okuda.`
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

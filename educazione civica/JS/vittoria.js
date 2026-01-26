const vittoriaScene = document.getElementById('vittoria-scene');

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
    vittoriaScene.innerHTML = "";
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
        // finita sequenza vittoria - mostra schermata finale
        setTimeout(() => {
            mostraSchermataBianca();
        }, 1000);
        return;
    }

    scriviFrase(vittoriaScene, frasi[index], 30, () => {
        scriviSequenza(frasi, index + 1);
    });
}

// --- SCHERMATA FINALE ---
function mostraSchermataBianca() {
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = "#121212";
  
  vittoriaScene.innerHTML = "";
  
  const schermataBianca = document.createElement('div');
  schermataBianca.id = 'schermata-finale-vittoria';
  schermataBianca.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 100;
  `;
  
  schermataBianca.innerHTML = `
    <h2 style="color: rgb(227, 43, 43); font-size: 80px; margin-bottom: 60px; text-shadow: 0.20vw 0.20vw 0 #000, 0.42vw 0.42vw 0 #000;">
      Vuoi rifare la storia?
    </h2>
    <div style="display: flex; justify-content: center; gap: 50px;">
      <button id="btn-riprova-vittoria" style="font-size: 60px; color: white; background: none; border: none; cursor: pointer; text-shadow: 0.20vw 0.20vw 0 #000, 0.42vw 0.42vw 0 #000; transition: color 0.3s ease; font-family: 'PixelFont';">SI</button>
      <button id="btn-esci-vittoria" style="font-size: 60px; color: white; background: none; border: none; cursor: pointer; text-shadow: 0.20vw 0.20vw 0 #000, 0.42vw 0.42vw 0 #000; transition: color 0.3s ease; font-family: 'PixelFont';">NO</button>
    </div>
  `;
  
  document.body.appendChild(schermataBianca);

  const btnRiprova = document.getElementById('btn-riprova-vittoria');
  const btnEsci = document.getElementById('btn-esci-vittoria');

  // SI = rifai la storia (torni all’intro)
  btnRiprova.addEventListener('click', () => {
    window.location.href = "intro-scenes.html";
  });

  // NO = torni al menu principale (index)
  btnEsci.addEventListener('click', () => {
    window.location.href = "index.html";
  });

  // Hover JS opzionale
  btnRiprova.addEventListener('mouseover', function () {
    this.style.color = "rgb(227, 43, 43)";
  });
  btnRiprova.addEventListener('mouseout', function () {
    this.style.color = "white";
  });

  btnEsci.addEventListener('mouseover', function () {
    this.style.color = "rgb(227, 43, 43)";
  });
  btnEsci.addEventListener('mouseout', function () {
    this.style.color = "white";
  });
}

// --- AVVIO SCENA ---
function avviaScena() {
    document.body.style.backgroundImage = "url('immagini/intro.png')";
    resizeBackground();

    const frasi = [
        `Congratulazioni! Hai fatto un ottimo lavoro.`,
        `Grazie per aver scoperto chi e' il bullo!`,
        `La tua determinazione ha aiutato la scuola a stare in pace.`,
        `Continua cosi' e ricorda: uniti possiamo fermare il bullismo!`
    ];

    scriviSequenza(frasi);
}

// --- EVENTI ---
window.addEventListener("load", avviaScena);
window.addEventListener("resize", resizeBackground);
window.addEventListener("orientationchange", () => {
    setTimeout(resizeBackground, 100);
});

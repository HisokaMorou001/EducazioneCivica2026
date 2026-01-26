const sconfittaScene = document.getElementById('sconfitta-scene');

// --- RIDIMENSIONAMENTO BACKGROUND ---
function resizeBackgroundSconfitta() {
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
function resetSchermoSconfitta() {
  sconfittaScene.innerHTML = "";
}

// --- SCRITTURA STILE POKÉMON ---
function scriviFraseSconfitta(elemento, testo, velocita, callback) {
  let i = 0;
  elemento.innerHTML = "";

  function type() {
    if (i < testo.length) {
      elemento.innerHTML += testo.charAt(i);
      i++;
      setTimeout(type, velocita);
    } else {
      setTimeout(() => {
        resetSchermoSconfitta();
        if (callback) callback();
      }, 800);
    }
  }
  type();
}

// --- SEQUENZA FRASI ---
function scriviSequenzaSconfitta(frasi, index = 0) {
  if (index >= frasi.length) {
    setTimeout(() => {
      mostraSchermataBiancaSconfitta();
    }, 1000);
    return;
  }

  scriviFraseSconfitta(sconfittaScene, frasi[index], 30, () => {
    scriviSequenzaSconfitta(frasi, index + 1);
  });
}

// --- SCHERMATA FINALE SCONFITTA ---
function mostraSchermataBiancaSconfitta() {
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = "#121212";

  sconfittaScene.innerHTML = "";

  const schermataBianca = document.createElement('div');
  schermataBianca.id = 'schermata-finale-sconfitta';
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
      Vuoi riprovarci?
    </h2>
    <div style="display: flex; justify-content: center; gap: 50px;">
      <button id="btn-riprova-sconfitta" style="font-size: 60px; color: white; background: none; border: none; cursor: pointer; text-shadow: 0.20vw 0.20vw 0 #000, 0.42vw 0.42vw 0 #000; transition: color 0.3s ease; font-family: 'PixelFont';">SI</button>
      <button id="btn-esci-sconfitta" style="font-size: 60px; color: white; background: none; border: none; cursor: pointer; text-shadow: 0.20vw 0.20vw 0 #000, 0.42vw 0.42vw 0 #000; transition: color 0.3s ease; font-family: 'PixelFont';">NO</button>
    </div>
  `;

  document.body.appendChild(schermataBianca);

  const btnRiprova = document.getElementById('btn-riprova-sconfitta');
  const btnEsci = document.getElementById('btn-esci-sconfitta');

  btnRiprova.addEventListener('click', () => {
    window.location.href = "intro-scenes.html";
  });

  btnEsci.addEventListener('click', () => {
    window.location.href = "index.html";
  });

  // Hover JS opzionale (puoi farlo anche solo con CSS :hover)
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

// --- AVVIO SCENA SCONFITTA ---
function avviaScenaSconfitta() {
  document.body.style.backgroundImage = "url('immagini/intro.png')";
  resizeBackgroundSconfitta();

  const frasi = [
    `Hmm... peccato.`,
    `Non sei riuscito a trovare il bullo.`,
    `La scuola è ancora preoccupata. Forse...`,
    ` Che ne dici... Vuoi riprovare per cambiare la storia?`
  ];

  scriviSequenzaSconfitta(frasi);
}

// --- EVENTI ---
window.addEventListener("load", avviaScenaSconfitta);
window.addEventListener("resize", resizeBackgroundSconfitta);
window.addEventListener("orientationchange", () => {
  setTimeout(resizeBackgroundSconfitta, 100);
});

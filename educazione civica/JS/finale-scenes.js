const finaleScene = document.getElementById('finale-scene');

function resizeBackground() {
  const body = document.body;
  const windowAspectRatio = window.innerWidth / window.innerHeight;
  const imageAspectRatio = 16 / 9;
  body.style.backgroundSize = windowAspectRatio > imageAspectRatio ? "auto 100%" : "100% auto";
  body.style.backgroundPosition = "center";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundAttachment = "fixed";
}

function scriviFrase(elemento, testo, velocita, callback) {
  let i = 0;
  elemento.innerHTML = "";
  function type() {
    if (i < testo.length) {
      elemento.innerHTML += testo.charAt(i);
      i++;
      setTimeout(type, velocita);
    } else {
      setTimeout(() => {
        if (callback) callback();
      }, 800);
    }
  }
  type();
}

function scriviSequenza(frasi, index = 0) {
  if (index >= frasi.length) {
    setTimeout(() => {
      mostraTransizione(() => {
        // azzera la memoria dei personaggi cliccati
        localStorage.removeItem("personaggiCliccati");
        window.location.href = "bullo-scelta.html";
      });
    }, 1000);
    return;
  }
  scriviFrase(finaleScene, frasi[index], 30, () => {
    scriviSequenza(frasi, index + 1);
  });
}

function avviaScene() {
  document.body.style.backgroundImage = "url('immagini/intro.png')";
  resizeBackground();
  // Stile identico a intro-scenes
  finaleScene.style.position = 'absolute';
  finaleScene.style.top = '72vh';
  finaleScene.style.left = '4.9vw';
  finaleScene.style.fontSize = '3.13vw';
  finaleScene.style.color = 'black';
  finaleScene.style.textShadow = '0.10vw 0.10vw 0 #fff';
  finaleScene.style.zIndex = '100';
  finaleScene.style.whiteSpace = 'pre-line';
  finaleScene.style.textAlign = 'left';
  finaleScene.style.width = '90vw';

  const frasi = [
    `Perfetto, hai parlato con tutti i tuoi compagni!`,
    `A tal proposito...`,
    `Chi tra i vari indagati secondo te e' il bullo?`
  ];
  apriTransizione(() => {
    scriviSequenza(frasi);
  });
}

window.addEventListener("load", avviaScene);
window.addEventListener("resize", resizeBackground);
window.addEventListener("orientationchange", () => {
  setTimeout(resizeBackground, 100);
});

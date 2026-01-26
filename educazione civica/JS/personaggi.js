const personaggi = document.querySelectorAll(".personaggi-container img");

// Recupera lo stato dal localStorage
let cliccati = new Set(JSON.parse(localStorage.getItem('personaggiCliccati') || '[]'));

personaggi.forEach(personaggio => {
  personaggio.addEventListener("click", () => {
    const id = personaggio.getAttribute("data-id");
    cliccati.add(id);
    // Salva lo stato
    localStorage.setItem('personaggiCliccati', JSON.stringify(Array.from(cliccati)));

    // Se questo è l'ultimo personaggio che mancava, vai direttamente alla scelta del bullo
    if (cliccati.size >= 10) {
      if (typeof mostraTransizione === 'function') {
        mostraTransizione(() => {
          window.location.href = "dialogo_" + id + ".html?finale=1";
        });
      } else {
        window.location.href = "dialogo_" + id + ".html?finale=1";
      }
    } else {
      // Vai al dialogo corrispondente normalmente
      window.location.href = `dialogo_${id}.html`;
    }
  });
});

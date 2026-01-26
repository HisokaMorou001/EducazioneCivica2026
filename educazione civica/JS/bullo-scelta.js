// JS/bullo-scelta.js

const personaggiScelta = document.getElementById('personaggi-scelta');

// Sostituisci l'ID del bullo corretto in base alla run
const BULLO_CORRETTO = 5; // 5 = Manami Okuda

const personaggi = [
    { id: 1, nome: "Nagisa Shiota", img: "immagini/personaggi/Nagisa_Shiota.png" },
    { id: 2, nome: "Akari Yukimura", img: "immagini/personaggi/Akari_Yukimura.png" },
    { id: 3, nome: "Yukiko Kanzaki", img: "immagini/personaggi/Yukiko_Kanzaki.png" },
    { id: 4, nome: "Tomohito Sugino", img: "immagini/personaggi/Tomohito_Sugino.png" },
    { id: 5, nome: "Manami Okuda", img: "immagini/personaggi/Manami_Okuda.png" },
    { id: 6, nome: "Karma Akabane", img: "immagini/personaggi/Karma_Akabane.png" },
    { id: 7, nome: "Yūma Isogai", img: "immagini/personaggi/Yūma_Isogai.png" },
    { id: 8, nome: "Ryōma Terasaka", img: "immagini/personaggi/Ryōma_Terasaka.png" },
    { id: 9, nome: "Megu Kataoka", img: "immagini/personaggi/Megu_Kataoka.png" },
    { id: 10, nome: "Hinata Okano", img: "immagini/personaggi/Hinata_Okano.png" }
];

personaggi.forEach(p => {
    const card = document.createElement('div');
    card.className = 'personaggio-card';
    card.innerHTML = `
        <img src="${p.img}" class="personaggi" data-id="${p.id}" alt="${p.nome}">
        <div class="personaggio-nome">${p.nome}</div>
    `;
    personaggiScelta.appendChild(card);
});

document.querySelectorAll('.personaggi').forEach(img => {
    img.addEventListener('click', () => {
        const idScelto = parseInt(img.getAttribute('data-id'));
        verificaBullo(idScelto);
    });
});

function verificaBullo(idScelto) {
    if (idScelto === BULLO_CORRETTO) {
        mostraTransizione(() => {
            window.location.href = "vittoria.html";
        });
    } else {
        mostraTransizione(() => {
            window.location.href = "sconfitta.html";
        });
    }
}

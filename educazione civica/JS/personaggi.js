const personaggi = document.querySelectorAll(".personaggi-container img");

personaggi.forEach(personaggio => {
    personaggio.addEventListener("click", () => {
        const id = personaggio.getAttribute("data-id");
        window.location.href = `personaggio_${id}.html`;
    });
});

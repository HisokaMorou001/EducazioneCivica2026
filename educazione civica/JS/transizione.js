// --- EFFETTO TRANSIZIONE DAI 4 LATI VERSO IL CENTRO ---
function mostraTransizione(callback) {
    // Crea il contenitore per la transizione
    const transizione = document.createElement('div');
    transizione.id = 'transizione-schermo';
    transizione.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        pointer-events: none;
        image-rendering: pixelated;
    `;

    // Crea i 4 rettangoli dai lati
    const lati = [
        { id: 'lato-top', animation: 'slideDownFromTop' },
        { id: 'lato-bottom', animation: 'slideUpFromBottom' },
        { id: 'lato-left', animation: 'slideRightFromLeft' },
        { id: 'lato-right', animation: 'slideLeftFromRight' }
    ];

    lati.forEach(lato => {
        const elemento = document.createElement('div');
        elemento.id = lato.id;
        elemento.style.cssText = `
            position: fixed;
            background-color: #000000;
            z-index: 9999;
            animation: ${lato.animation} 2s ease-out forwards;
            image-rendering: pixelated;
        `;
        
        // Stili specifici per ogni lato
        if (lato.id === 'lato-top') {
            elemento.style.cssText += 'top: 0; left: 0; width: 100%; height: 0;';
        } else if (lato.id === 'lato-bottom') {
            elemento.style.cssText += 'bottom: 0; left: 0; width: 100%; height: 0;';
        } else if (lato.id === 'lato-left') {
            elemento.style.cssText += 'top: 0; left: 0; width: 0; height: 100%;';
        } else if (lato.id === 'lato-right') {
            elemento.style.cssText += 'top: 0; right: 0; width: 0; height: 100%;';
        }
        
        transizione.appendChild(elemento);
    });

    document.body.appendChild(transizione);

    // Aspetta che l'animazione finisca, poi fa il callback
    setTimeout(() => {
        if (callback) callback();
        // Pulizia dopo un po'
        setTimeout(() => {
            transizione.remove();
        }, 200);
    }, 2000);
}

// --- EFFETTO TRANSIZIONE DI APERTURA DAL CENTRO AI 4 LATI ---
function apriTransizione(callback) {
    // Crea il contenitore per la transizione
    const transizione = document.createElement('div');
    transizione.id = 'transizione-schermo';
    transizione.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        pointer-events: none;
        image-rendering: pixelated;
    `;

    // Crea i 4 rettangoli dai lati (ma invertiti per l'apertura)
    const lati = [
        { id: 'lato-top-open', animation: 'slideUpToTop' },
        { id: 'lato-bottom-open', animation: 'slideDownToBottom' },
        { id: 'lato-left-open', animation: 'slideLeftToLeft' },
        { id: 'lato-right-open', animation: 'slideRightToRight' }
    ];

    lati.forEach(lato => {
        const elemento = document.createElement('div');
        elemento.id = lato.id;
        elemento.style.cssText = `
            position: fixed;
            background-color: #000000;
            z-index: 9999;
            animation: ${lato.animation} 2s ease-out forwards;
            image-rendering: pixelated;
        `;
        
        // Stili specifici per ogni lato (partono già al 50%)
        if (lato.id === 'lato-top-open') {
            elemento.style.cssText += 'top: 0; left: 0; width: 100%; height: 50%;';
        } else if (lato.id === 'lato-bottom-open') {
            elemento.style.cssText += 'bottom: 0; left: 0; width: 100%; height: 50%;';
        } else if (lato.id === 'lato-left-open') {
            elemento.style.cssText += 'top: 0; left: 0; width: 50%; height: 100%;';
        } else if (lato.id === 'lato-right-open') {
            elemento.style.cssText += 'top: 0; right: 0; width: 50%; height: 100%;';
        }
        
        transizione.appendChild(elemento);
    });

    document.body.appendChild(transizione);

    // Aspetta che l'animazione finisca, poi fa il callback
    setTimeout(() => {
        if (callback) callback();
        // Pulizia dopo un po'
        setTimeout(() => {
            transizione.remove();
        }, 200);
    }, 2000);
}

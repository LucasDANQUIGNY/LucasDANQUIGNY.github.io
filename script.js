function calculateTime() {
    const circuit = document.getElementById('circuit').value;
    const voiture = document.getElementById('voiture').value;
    const temps = parseInt(document.getElementById('temps').value);

    const circuits = {
        "spa": spa,
        "bahrein": bahrein,
        "fuji": fuji,
        "mans": mans,
        "portimao": portimao,
        "monza": monza,
        "sebring": sebring
    };

    const result = circuits[circuit](voiture, temps);
    if (result != "Temps non disponible pour cette voiture") {
        const result = circuits[circuit](voiture, temps) + " L";
    }
    else {
        const result = circuits[circuit](voiture, temps)
    }
    document.getElementById('output').innerText = result;
}

function spa(voiture, temps) {
    if (voiture == "ferrari") {
        return (Math.round((1.628 * temps + 7.2), 0)).toString();
    }
    if (voiture == "LMP2") {
        return (Math.round((1.547 * temps + 6.9), 0)).toString();
    }
    return "Temps non disponible pour cette voiture";
}

function bahrein(voiture, temps) {
    return "Temps non disponible pour cette voiture";
}

function fuji(voiture, temps) {
    if (voiture == "ferrari") {
        return (Math.round((1.224 * temps + 4.16), 0)).toString();
    }
    return "Temps non disponible pour cette voiture";
}

function mans(voiture, temps) {
    if (voiture == "ferrari") {
        return (Math.round((1.483 * temps + 12.76), 0)).toString();
    }
    if (voiture == "LMP2") {
        return (Math.round((1.692 * temps + 12.92), 0)).toString();
    }
    return "Temps non disponible pour cette voiture";
}

function portimao(voiture, temps) {
    return "Temps non disponible pour cette voiture";
}

function monza(voiture, temps) {
    if (voiture == "ferrari") {
        return (Math.round((1.484 * temps + 5.6), 0)).toString();
    }
    return "Temps non disponible pour cette voiture";
}

function sebring(voiture, temps) {
    if (voiture == "ferrari") {
        return (Math.round((1.424 * temps + 5.98), 0)).toString();
    }
    return "Temps non disponible pour cette voiture";
}

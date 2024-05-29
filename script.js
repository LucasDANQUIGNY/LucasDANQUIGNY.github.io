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
    document.getElementById('output').innerText = result;
}

function spa(voiture, temps) {
    if (voiture == "ferrari") {
        return (Math.round((1.628 * temps + 7.2), 0)).toString();
    }
    return "Temps non disponible pour cette voiture";
}

function bahrein(voiture, temps) {
    return "Temps non disponible pour cette voiture";
}

function fuji(voiture, temps) {
    return "Temps non disponible pour cette voiture";
}

function mans(voiture, temps) {
    return "Temps non disponible pour cette voiture";
}

function portimao(voiture, temps) {
    return "Temps non disponible pour cette voiture";
}

function monza(voiture, temps) {
    return "Temps non disponible pour cette voiture";
}

function sebring(voiture, temps) {
    return "Temps non disponible pour cette voiture";
}

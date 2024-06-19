const ubicacionCartas = 'assets/cartas';

export const generateCard = (carta) => {
    // Se genera la imagen asociada a la carta obtenida...
    const imgCarta = document.createElement("img");
    imgCarta.src = `${ubicacionCartas}/${carta}.png`
    imgCarta.classList.add('carta');

    return imgCarta;
}
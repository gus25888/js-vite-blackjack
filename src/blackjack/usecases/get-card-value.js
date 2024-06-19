/**
 * Función que retorna el valor de una carta
 * @param {String} card La carta a evaluar
 * @returns {number} El puntaje al que equivale la carta enviada.
 */
export const getCardValue = (card) => {
    const namedCards = { 'A': 11, 'J': 10, 'Q': 10, 'K': 10 };
    const valor = card.substring(0, card.length - 1);

    return namedCards[valor] || Number(valor);
}
/**
 * Función que saca una carta de la baraja y la retorna
 * @param {String[]} deck - La baraja completa
 * @returns {String} - La última carta de la baraja
 */
export const takeCard = (deck) => {

    if (deck.length === 0) {
        throw "No hay cartas en la baraja";
    }
    return deck.pop();
}
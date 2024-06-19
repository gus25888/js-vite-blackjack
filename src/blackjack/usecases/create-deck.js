import { shuffle } from 'underscore';

// Esto es una exportación "por nombre" (named). Puede haber múltiples.
// export const nombreEjemplo = 'Pepito';

/**
 * Esta función crear un nuevo deck
 * @function createDeck
 * @param {Array<string>} suits - Ejemplo: ['C', 'D', 'H', 'S',]
 * @param {{string,number}} namedCards Ejemplo: { 'A': 11, 'J': 10, 'Q': 10, 'K': 10 }
 * @returns String[] El deck con las cartas mezcladas
 */

export const createDeck = (suits, namedCards) => {

    if (!suits.length) throw new Error("suits es requerido y debe ser un arreglo de Strings");

    if (!namedCards) throw new Error("namedCards es requerido.");

    const deck = []
    for (const suit of suits) {
        for (let i = 2; i <= 10; i++) {
            const card = i.toString() + suit;
            deck.push(card);
        }
        for (const namedCard in namedCards) {
            const card = namedCard + suit;
            deck.push(card);
        }

    }
    return shuffle(deck);
}

// Esto es una exportación "por defecto" (default). Solo puede haber una por cada módulo.
// export default createDeck;
/** Este es lo que se conoce como un archivo de "barril", en el cual se pueden realizar la exportación de todos las funciones de los módulos ubicados dentro del directorio, lo cual permite utilizarlo desde el "main" directamente. */

export { countPoints } from "./count-points";
export { createDeck } from "./create-deck";
export { getCardValue } from "./get-card-value";
export { playComputer } from "./turn-computer";
export { generateCard } from "./show-card";
export { takeCard } from "./take-card";
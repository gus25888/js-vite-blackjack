import { puntosMaximosJuego, puntosJugadores, divCartasJugadores } from "..";
import { countPoints } from "./count-points";
import { generateCard } from "./show-card";
import { showGameOver } from "./show-game-over";
import { takeCard } from "./take-card";


/**
 * Función para generar la lógica de la computadora usada cuando termine el turno del jugador.
 * @param {number} puntosMinimos Indica los puntos mínimos que debe 
 * @param {String[]} deck 
 */
export const playComputer = (puntosMinimos, deck) => {

    if (!puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    if (!deck) throw new Error('Deck es un valor necesarios');



    const turnoComputadora = puntosJugadores.length - 1;
    let puntosComputadora;
    do {
        const carta = takeCard(deck);
        divCartasJugadores[turnoComputadora].append(generateCard(carta));
        puntosComputadora = countPoints(turnoComputadora, carta);

        if (puntosMinimos > puntosMaximosJuego) {
            break;
        }
    } while ((puntosComputadora < puntosMinimos) && puntosMinimos <= puntosMaximosJuego);

    showGameOver(puntosMinimos, puntosComputadora);
}
import { puntosMaximosJuego } from '..'
/**
 * Función para determinar el resultado del juego
 * @param {number} puntJugador Indica puntos del jugador.
 * @param {*} puntCPU Indica puntos de la computadora.
 */
export const showGameOver = (puntJugador, puntCPU) => {
    const mensaje = (puntJugador > puntosMaximosJuego) ? `Perdiste! :(` :
        (puntCPU > puntJugador && puntCPU <= puntosMaximosJuego) ? `Perdiste! :(` :
            (puntJugador > puntCPU && puntJugador <= puntosMaximosJuego) ? `Ganaste! :D` :
                (puntJugador < puntCPU && puntJugador <= puntosMaximosJuego && puntCPU > puntosMaximosJuego) ? `Ganaste! :D` :
                    `Empate!`;

    setTimeout(() => alert(mensaje), 500);
}
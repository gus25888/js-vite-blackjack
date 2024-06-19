import { indicadorJugadores, puntosJugadores } from "..";
import { getCardValue } from "./get-card-value";

//Función para registrar los puntos obtenidos por cada jugador. EL último será la computadora.
export const countPoints = (turno, cartaObtenida) => {
    // Se suma el valor de Carta obtenida a los puntos del jugador...
    puntosJugadores[turno] += getCardValue(cartaObtenida);

    // Actualización en el HTML del puntaje...
    indicadorJugadores[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
}
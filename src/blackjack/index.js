/*
 Al desestructurar el contenido de una importación es posible darle un alias con el objetivo de evitar colisiones con nombres de variables ya definidas en el módulo. Para ello, se usa la palabra "as"

    import { createDeck as createDeck } from "./usecases/create-deck";

Esto aplica solo para exports "por nombre" ya que para los por defecto
se les puede poner el nombre que se estime conveniente ya que se sabe que son únicos, no hay confusión respecto a cuál es.
*/
// import createDeck from "./usecases/create-deck";
// import takeCard from "./usecases/take-card";
// import getCardValue from "./usecases/get-card-value"

/* Import de forma más sencilla:
    Al definir un archivo index dentro del directorio que tengamos todos las funcionalidades
    podemos obtenerlas desde ahí al hacer el import.
*/
import { countPoints, createDeck, playComputer, generateCard, takeCard } from "./usecases";
export const puntosMaximosJuego = 21;
export let puntosJugadores = [];
export const indicadorJugadores = document.querySelectorAll('small');
export const divCartasJugadores = document.querySelectorAll('.divCartas');

const miModulo = (() => {
    `use strict`;


    const namedCards = { 'A': 11, 'J': 10, 'Q': 10, 'K': 10 },
        suits = ['C', 'D', 'H', 'S',];

    // Variable para guardar la baraja.
    let deck = [];




    // Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir'),
        btnNuevo = document.querySelector('#btnNuevo'),
        btnDetener = document.querySelector('#btnDetener');



    /**
     * 2C = 2 Clubs
     * 2D = 2 Diamonds
     * 2H = 2 Hearts
     * 2S = 2 Spades
     *
     * El juego de blackjack busca que el jugador obtenga 21 puntos en cartas. Si se pasa, pierde.
     */
    const deshabilitarBotonesJuego = (indicador) => {
        btnNuevo.disabled = !indicador;
        btnDetener.disabled = indicador;
        btnPedir.disabled = indicador;
    }
    const iniciarJuego = (numJugadores = 2) => {
        deck = createDeck(suits, namedCards);

        puntosJugadores = []
        // El último jugador siempre será la CPU.
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
            indicadorJugadores[i].innerText = '0';
            divCartasJugadores[i].innerText = '';
        }
        deshabilitarBotonesJuego(false)
    }







    const iniciarTurnoCPU = (puntosJugador, deck) => {
        deshabilitarBotonesJuego(true);
        playComputer(puntosJugador, deck);
    }



    const turnoJugador = (jugador, deck) => {
        const carta = takeCard(deck);
        const puntosJugador = countPoints(jugador, carta)
        divCartasJugadores[jugador].append(generateCard(carta));

        if (puntosJugador >= puntosMaximosJuego) {
            iniciarTurnoCPU(puntosJugador, deck);
        }
    }

    // Botón Pedir Carta:
    btnPedir.addEventListener('click', () => {
        // Por ahora es cero, pero debería ser por cada jugador...
        turnoJugador(0, deck);
    });

    // Botón Detener:
    btnDetener.addEventListener('click', () => {
        // Por ahora es cero, pero debería ser por cada jugador...
        const puntosJugador = puntosJugadores[0];
        iniciarTurnoCPU(puntosJugador, deck)
    });

    // Botón Nuevo Juego:
    btnNuevo.addEventListener('click', () => {
        iniciarJuego();
    });

    // Con la definición de módulo dentro de una IIFE, solo será público (visible fuera de la función),
    // lo que se ponga dentro del return
    return { nuevoJuego: iniciarJuego };
})()
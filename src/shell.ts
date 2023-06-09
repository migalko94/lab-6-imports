import {
  dameCarta,
  handlerNuevaPartida,
  mePlanto,
  handlerQueHabriaPasado,
} from "./ui";

import {
  botonComprobarCarta,
  botonMePlanto,
  botonNuevaPartida,
  botonQueHabriaPasado,
} from "./model";

export const cargarPartida = () => {
  handlerNuevaPartida;

  if (botonComprobarCarta && botonComprobarCarta instanceof HTMLButtonElement) {
    botonComprobarCarta.addEventListener("click", dameCarta);
  }

  if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.addEventListener("click", mePlanto);
  }

  if (botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement) {
    botonNuevaPartida.addEventListener("click", handlerNuevaPartida);
  }

  if (
    botonQueHabriaPasado &&
    botonQueHabriaPasado instanceof HTMLButtonElement
  ) {
    botonQueHabriaPasado.addEventListener("click", handlerQueHabriaPasado);
  }
};
document.addEventListener("DOMContentLoaded", cargarPartida);

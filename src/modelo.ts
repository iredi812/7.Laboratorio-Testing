export type EstadoPartida = "Ganar" | "Perder" | "seguir_jugando";

interface Partida {
  puntuacion: number;
  primeraCartaPedida: boolean;
  estadoPartida: EstadoPartida;
}

export const partida: Partida = {
  puntuacion: 0,
  primeraCartaPedida: false,
  estadoPartida: "seguir_jugando",
};

export const setPuntuacion = (puntos: number): void => {
  partida.puntuacion = puntos;
};

export const reiniciarPuntuacion = (): void => {
  partida.puntuacion = 0;
};

export const setPrimeraCartaPedida = (valor: boolean): void => {
  partida.primeraCartaPedida = valor;
};

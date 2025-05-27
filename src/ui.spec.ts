import { describe, it, expect, beforeEach } from "vitest";
import { partida, setPuntuacion, setPrimeraCartaPedida } from "./modelo";
import {
  muestraCarta,
  muestraPuntuacion,
  pintarMensaje,
  bloquearBotonPedirCarta,
  bloquearBotonMePlanto,
  reiniciarPartida,
  revisarMano,
} from "./ui";

describe("Funciones de la UI", () => {
  beforeEach(() => {
    setPuntuacion(0);
    setPrimeraCartaPedida(false);
    document.body.innerHTML = `
      <div id="cartas"><img id="carta" src="" alt="Carta boca abajo" /></div>
      <div id="puntuacion"></div>
      <div id="mensajes"></div>
      <button id="pedirCarta"></button>
      <button id="mePlanto"></button>
      <button id="verLoQueHubieraPasado"></button>
    `;
  });

  it("debería mostrar la imagen de la carta cuando se llama a muestraCarta", () => {
    // Arrange
    const testUrl = "test-url";

    // Act
    muestraCarta(testUrl);

    // Assert
    const imgCarta = document.getElementById("carta");
    if (imgCarta instanceof HTMLImageElement) {
      expect(imgCarta.src).toContain(testUrl);
    }
  });

  it("debería Actualizar la puntuación cuando se llama a muestraPuntuacion", () => {
    // Arrange
    setPuntuacion(5);

    // Act
    muestraPuntuacion();

    // Assert
    const puntuacionElement = document.getElementById("puntuacion");
    if (puntuacionElement instanceof HTMLElement) {
      expect(puntuacionElement.textContent).toBe("Su puntuación es de: 5");
    }
  });

  it("debería mostrar el mensaje correcto cuando se llama a pintarMensaje", () => {
    // Arrange
    const mensajePrueba = "Mensaje de prueba";

    // Act
    pintarMensaje(mensajePrueba);

    // Assert
    const mensajesElement = document.getElementById("mensajes");
    if (mensajesElement instanceof HTMLElement) {
      expect(mensajesElement.textContent).toBe(mensajePrueba);
    }
  });

  it("debería deshabilitar el botón pedirCarta cuando se llama a bloquearBotonPedirCarta", () => {
    // Arrange
    const estaDeshabilitado = true;

    // Act
    bloquearBotonPedirCarta(estaDeshabilitado);

    // Assert
    const pedirCartaElement = document.getElementById("pedirCarta");
    if (pedirCartaElement instanceof HTMLButtonElement) {
      expect(pedirCartaElement.disabled).toBe(true);
    }
  });

  it("debería deshabilitar el botón mePlanto cuando se llama a bloquearBotonMePlanto", () => {
    // Arrange
    const estaDeshabilitado = true;

    // Act
    bloquearBotonMePlanto(estaDeshabilitado);

    // Assert
    const mePlantoElement = document.getElementById("mePlanto");
    if (mePlantoElement instanceof HTMLButtonElement) {
      expect(mePlantoElement.disabled).toBe(true);
    }
  });

  it("debería reiniciar el juego cuando se llama a reiniciarPartida", () => {
    // Arrange
    reiniciarPartida();

    // Act
    reiniciarPartida();

    // Assert
    expect(partida.puntuacion).toBe(0);
    const puntuacionElement = document.getElementById("puntuacion");
    if (puntuacionElement instanceof HTMLElement) {
      expect(puntuacionElement.textContent).toBe("Su puntuación es de: 0");
    }
    const mensajesElement = document.getElementById("mensajes");
    if (mensajesElement instanceof HTMLElement) {
      expect(mensajesElement.textContent).toBe("");
    }
  });

  it("debería mostrar el mensaje de victoria cuando la puntuación es 7.5", () => {
    // Arrange
    setPuntuacion(7.5);

    // Act
    revisarMano();

    // Assert
    const mensajesElement = document.getElementById("mensajes");
    if (mensajesElement instanceof HTMLElement) {
      expect(mensajesElement.textContent).toBe("¡Has ganado!");
    }
  });

  it("debería mostrar el mensaje de derrota cuando la puntuación es mayor a 7.5", () => {
    // Arrange
    setPuntuacion(8);

    // Act
    revisarMano();

    // Assert
    const mensajesElement = document.getElementById("mensajes");
    if (mensajesElement instanceof HTMLElement) {
      expect(mensajesElement.textContent).toBe("¡Has perdido!");
    }
  });
});

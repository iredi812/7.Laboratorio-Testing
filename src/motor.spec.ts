import { vi } from "vitest";
import {
  generarNumeroAleatorio,
  generarNumeroCarta,
  obtenerPuntosCarta,
  obtenerEstadoPartida,
} from "./motor";
import { EstadoPartida, partida } from "./modelo";

describe("motor spec", () => {
  describe("generarNumeroAleatorio", () => {
    it("deberia de devoler un 4 cuando el número aleatorio es 0.3", () => {
      // Arrange
      const resultadoEsperado = 4;
      vi.spyOn(Math, "random").mockReturnValue(0.3);
      // Act
      const resultado = generarNumeroAleatorio();
      // Assert
      expect(resultado).toBe(resultadoEsperado);
    });
  });
  describe("generarNumeroCarta", () => {
    it("deberia de devolver un 10 cuando el número aleatorio es 8", () => {
      // Arrange
      const resultadoEsperado = 10;
      const numeroAleatorio = 8;
      // Act
      const resultado = generarNumeroCarta(numeroAleatorio);
      // Assert
      expect(resultadoEsperado).toBe(resultado);
    });
    it("deberia de devolver un 2 cuando el número aleatorio es 2", () => {
      // Arrange
      const resultadoEsperado = 2;
      const numeroAleatorio = 2;
      // Act
      const resultado = generarNumeroCarta(numeroAleatorio);
      // Assert
      expect(resultadoEsperado).toBe(resultado);
    });
  });
  describe("obtenerPuntosCarta", () => {
    it("deberia de devolver un 0.5 cuando el número de la carta es 10", () => {
      // Arrange
      const resultadoEsperado = 0.5;
      const carta = 10;
      // Act
      const resultado = obtenerPuntosCarta(carta);
      // Assert
      expect(resultadoEsperado).toBe(resultado);
    });
    it("deberia de devolver un 5 uando el número de la carta es 5", () => {
      // Arrange
      const resultadoEsperado = 5;
      const carta = 5;
      // Act
      const resultado = obtenerPuntosCarta(carta);
      // Assert
      expect(resultadoEsperado).toBe(resultado);
    });
  });
  describe("obtenerEstadoPartida", () => {
    it("deberia de devolver seguir_jugando cuando la puntuación es 7.5", () => {
      // Arrange
      const resultadoEsperado: EstadoPartida = "seguir_jugando";
      vi.spyOn(partida, "puntuacion", "get").mockReturnValue(5);
      // Act
      const resultado = obtenerEstadoPartida();
      // Assert
      expect(resultado).toBe(resultadoEsperado);
    });
    it("deberia de devolver Ganar cuando la puntuación es 7.5", () => {
      // Arrange
      const resultadoEsperado: EstadoPartida = "Ganar";
      vi.spyOn(partida, "puntuacion", "get").mockReturnValue(7.5);
      // Act
      const resultado = obtenerEstadoPartida();
      // Assert
      expect(resultado).toBe(resultadoEsperado);
    });
    it("deberia de devolver Perder cuando la puntuación es mayor a 7.5", () => {
      // Arrange
      const resultadoEsperado: EstadoPartida = "Perder";
      vi.spyOn(partida, "puntuacion", "get").mockReturnValue(8);
      // Act
      const resultado = obtenerEstadoPartida();
      // Assert
      expect(resultado).toBe(resultadoEsperado);
    });
  });
});

// ═══════════════════════════════════════════════════════════════
//  CATÁLOGO DE JUEGOS — Agrega una línea por cada juego nuevo
//
//  Campos:
//    id       → número único, siempre incrementar
//    title    → nombre del juego
//    developer→ empresa o persona que lo desarrolló
//    year     → año de lanzamiento
//    category → debe coincidir con una de las CATEGORIES de abajo
//    cover    → ruta a la imagen de portada
//    page     → ruta al HTML del juego dentro de /games/
// ═══════════════════════════════════════════════════════════════

const GAMES = [
  {
    id: 1,
    title: "Gangstar: Crime City",
    developer: "Gameloft",
    year: 2006,
    category: "Acción",
    cover: "images/gangstar-screen1.png",
    page: "games/gangstar-crime-city.html"
  }
  // ↓ Agrega más juegos aquí ↓
];

// Categorías disponibles (agrega más si necesitas)
const CATEGORIES = [
  "Todos",
  "Acción",
  "Carreras",
  "Puzzle",
  "Deportes",
  "Aventura",
  "Estrategia",
  "Arcade"
];

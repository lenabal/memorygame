import Game from './game.js';

// Знаходимо елементи сторінки
const restartButton = document.getElementById('restart-btn');

// Створюємо нову гру
const memoryGame = new Game();

// Обробник кнопки перезапуску
restartButton.addEventListener('click', () => {
  memoryGame.startGame();
});

// Запускаємо гру
memoryGame.startGame();

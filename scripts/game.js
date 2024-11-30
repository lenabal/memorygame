import { fetchPokemonImages } from './api.js';
import { startTimer, resetTimer, stopTimer} from './timer.js';
import Card from './card.js';

export default class Game {
  constructor() {
    this.board = document.querySelector('.game-board');
    this.timerDisplay = document.getElementById('timer');
    this.cards = [];
    this.flippedCards = [];
    this.matchedCards = [];
    this.timer = 0;
    this.gameStarted = false;
    this.gameTimeLimit = 60;
  }

  async startGame() {
    // Скидання таймера
    resetTimer();
    this.timer = 0;
    this.timerDisplay.textContent = `Time: ${this.gameTimeLimit} seconds`;
    this.timerDisplay.style.color = 'white';

    // Очищення гри
    this.gameStarted = false;
    this.matchedCards = [];
    this.flippedCards = [];
    this.board.innerHTML = '';

    // Отримання іконок покемонів через API
    const icons = await fetchPokemonImages(8);

    // Створюємо картки
    const cardData = [...icons, ...icons].sort(() => Math.random() - 0.5);
    this.cards = cardData.map(icon => new Card(icon));

    // Додаємо картки до дошки
    this.cards.forEach(card => {
      this.board.appendChild(card.render());
      card.element.addEventListener('click', () => this.flipCard(card));
    });
  }

  flipCard(card) {
    if (!this.gameStarted) {
      this.gameStarted = true;
      startTimer(this.timerDisplay, this.gameTimeLimit, () => this.endGame());
    }

    if (this.flippedCards.length < 2 && !card.isFlipped) {
      card.flip();
      this.flippedCards.push(card);

      if (this.flippedCards.length === 2) {
        this.checkMatch();
      }
    }
  }

  checkMatch() {
    const [card1, card2] = this.flippedCards;

    if (card1.icon === card2.icon) {
      this.matchedCards.push(card1, card2);
      this.flippedCards = [];

      if (this.matchedCards.length === this.cards.length) {
        stopTimer();
        setTimeout(() => alert('You win!'), 500);
      }
    } else {
      setTimeout(() => {
        card1.unflip();
        card2.unflip();
        this.flippedCards = [];
      }, 1000);
    }
  }

  endGame() {
    alert("Time's up! You lost the game!");
    this.startGame();
  }
}

export default class Card {
    constructor(icon) {
      this.icon = icon;
      this.isFlipped = false;
      this.element = this.createCardElement();
    }
  
    createCardElement() {
      const card = document.createElement('div');
      card.classList.add('card');
  
      card.innerHTML = `
        <div class="card-inner">
          <div class="card-front"></div>
          <div class="card-back">
            <img src="${this.icon}" alt="Pokemon">
          </div>
        </div>`;
      return card;
    }
  
    flip() {
      this.isFlipped = true;
      this.element.classList.add('flipped');
    }
  
    unflip() {
      this.isFlipped = false;
      this.element.classList.remove('flipped');
    }
  
    render() {
      return this.element;
    }
  }
  
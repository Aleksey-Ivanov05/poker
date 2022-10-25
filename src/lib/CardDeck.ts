import Card from "./Card";

class CardDeck{
  deck:Card[] = [];
  constructor() {
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['diams', 'hearts', 'spades', 'clubs'];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this.deck.push(new Card(suits[i], ranks[j]));
      }
    }
  }

  getCard(): Card {
    const randomIndex = Math.floor(Math.random() * this.deck.length);
    const card = this.deck[randomIndex];
    this.deck.splice(randomIndex, 1);
    return card;
  }

  getCards(howMany: number): Card[] {
    const cards = [];
    for (let i = 0; i < howMany; i++) {
      cards.push(this.getCard());
    }
    return cards;
  }
}

export default CardDeck;
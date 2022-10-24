import Card from "./Card";
// const getRandomValueFromArray = (array:any[]) => {
//   const randomIndex = Math.floor(Math.random() * array.length);
//   const number = array[randomIndex];
//   array.splice(randomIndex, 1);
//   return number;
// };

class CardDeck{
  deck:Card[] = [];
  removedCard:Card[] = [];
  constructor() {
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['diams', 'hearts', 'spades', 'clubs'];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this.deck.push(new Card(suits[i], ranks[j]));
      }
    }

    console.log(this.deck.length);
  }

  getCard(): Card {
    const randomIndex = Math.floor(Math.random() * this.deck.length);
    const card = this.deck[randomIndex];
    this.deck.splice(randomIndex, 1);
    this.removedCard.push(card);
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
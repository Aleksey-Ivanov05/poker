import Card from "./Card";

class PokerHand {
  constructor(public handCards:Card[]) {}

  getOutcome() {
    let message = '';
    let count = 0;
    for (let i = 0; i < this.handCards.length; i++) {
      for (let j = i; j < 5; j++) {
        if (this.handCards[i]['rank'] === this.handCards[j]['rank']) {
          if (i !== j) {
            count++;
            if (count === 1) {
              message = 'One pair';
            } else if (count === 2) {
              message = 'Two pairs';
            }
          }
        }
      }
      for (let j = 1; j < 4; j++) {
        if (this.handCards[i]['rank'] === this.handCards[j]['rank'] && this.handCards[i]['rank'] === this.handCards[j+1]['rank'] ) {
          if (i !== j && i !== j+1) {
            message = 'Three of a kind';
          }
        }
      }
    }
    if (this.handCards[0].suit === this.handCards[1].suit && this.handCards[0].suit === this.handCards[2].suit && this.handCards[0].suit === this.handCards[3].suit && this.handCards[0].suit === this.handCards[4].suit ) {
      message = 'Flush';
    }
    return message;
  }
}

export default PokerHand;
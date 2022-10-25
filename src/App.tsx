import React, {useState} from 'react';
import CardDeck from "./lib/CardDeck";
import CardView from "./lib/CardView";
import Card from "./lib/Card";
import PokerHand from "./lib/PokerHand";

function App() {
  const cardDeck = new CardDeck();
  const [cards, setCards] = useState<Card[]>([]);
  const [hand, setHand] = useState<string>('No matches');
  const makeFiveCards = () => {
    const fiveCards = cardDeck.getCards(5 );
    const pokerHand = new PokerHand(fiveCards);
    setCards([
      {rank: fiveCards[0].rank, suit: fiveCards[0].suit},
      {rank: fiveCards[1].rank, suit: fiveCards[1].suit},
      {rank: fiveCards[2].rank, suit: fiveCards[2].suit},
      {rank: fiveCards[3].rank, suit: fiveCards[3].suit},
      {rank: fiveCards[4].rank, suit: fiveCards[4].suit},
    ])
    setHand(pokerHand.getOutcome()!)
  }
  const button = <button onClick={makeFiveCards}>Deal five cards</button>

  if (cards.length === 0) {
    return (
      <div className="App playingCards faceImages">
        {button}
      </div>
    )
  }


  return (
    <div className="App playingCards faceImages">
        {button}
        <CardView rank={cards[0].rank} suit={cards[0].suit}/>
        <CardView rank={cards[1].rank} suit={cards[1].suit}/>
        <CardView rank={cards[2].rank} suit={cards[2].suit}/>
        <CardView rank={cards[3].rank} suit={cards[3].suit}/>
        <CardView rank={cards[4].rank} suit={cards[4].suit}/>
        <div>{hand}</div>
    </div>
  );
}

export default App;

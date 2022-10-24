import React from 'react';
import CardDeck from "./lib/CardDeck";
import CardView from "./lib/CardView";

function App() {
  const cardDeck = new CardDeck();
  console.log(cardDeck.getCards(5 ));
  return (
    <div className="App">
      <div className="playingCards faceImages">
        <CardView rank={cardDeck.getCard().rank} suit={cardDeck.getCard().suit}/>
      </div>
    </div>
  );
}

export default App;

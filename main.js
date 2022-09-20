import cards from "./cards";
import Card from "./card";

const cardList = []

function loadCards(c) {
  return c.map(card => new Card(...card));
}

cardList = loadCards(cards);

console.log(cardList);
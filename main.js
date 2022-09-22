function loadDeck(cards) {

  const cardList = loadCards(cards);

  let index = 0;

  let card = cardList[index];
  const cardElement = document.querySelector(".card");
  cardElement.addEventListener("click", flip)

  /** @param {string[][]} c @returns {string[][]} */

  function loadCards(c) {
    return c.sort(() => Math.random());
  }

  function setIndex(newIndex) {
    index = newIndex;
    card = cardList[index].sort(() => Math.random());
    document.querySelector(".front").innerHTML = card[0];
    document.querySelector(".backside").innerHTML = card[1];
  }

  function flip() {
    cardElement.classList.toggle("flipped");
  }

  setIndex(0);

  document.querySelector(".next").addEventListener("click", () => setIndex((index + 1) % cardList.length));
  document.querySelector(".back").addEventListener("click", () => setIndex((index - 1) < 0 ? cardList.length - 1: cardList.length));
}
export default class Card {
  constructor(word1, word2) {
    this.word1 = word1;
    this.word2 = word2;
    this.combinations[word1] = word2;
    this.combinations[word2] = word1;
  }

  combinations = {}

  getOther(word) {
    if(word == this.word1 || word == this.word2) return this.combinations[word];
  }
}
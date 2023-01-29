const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while (currentCard !== 'spade') {
  const generateRandomNumber = Math.floor(Math.random() * 4);
  currentCard = cards[generateRandomNumber];
  console.log(currentCard);
}

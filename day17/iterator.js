const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some(word => word.length < 6));
const interestingWords = words.filter(word => word.length > 5);

console.log(interestingWords.every(word => word.length > 5));

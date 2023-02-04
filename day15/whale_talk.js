let input = 'TUrpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultString = '';
const resultArray = [];
input = input.toLowerCase();
// eslint-disable-next-line no-plusplus
for (let i = 0; i < input.length; i++) {
  if (vowels.includes(input[i])) {
    resultArray.push(input[i]);
    if (input[i] === 'e' || input[i] === 'u') {
      resultArray.push(input[i]);
    }
  }
}
resultString = resultArray.join('');
console.log(resultString.toUpperCase());

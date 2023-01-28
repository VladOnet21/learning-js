let input = 'TUrpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultString = '';
let resultArray = [];
input = input.toLowerCase();
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
      if (vowels[j] === 'e' || vowels[j] == 'u') {
        resultArray.push(vowels[j]);
      }
    }
  }
}
resultString= resultArray.join();
console.log(resultString.toUpperCase());

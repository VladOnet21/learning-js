const cities = [
  'Orlando',
  'Dubai',
  'Edinburgh',
  'Chennai',
  'Accra',
  'Denver',
  'Eskisehir',
  'Medellin',
  'Yokohama',
];

const nums = [1, 50, 75, 200, 350, 525, 1000];

cities.forEach((city) => console.log(`Have you visited ${city}?`));

const word = cities.reduce((acc, currVal) => acc + currVal[0], 'C');

console.log(word);

nums.some((num) => num < 0);

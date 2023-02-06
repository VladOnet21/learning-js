const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
  return `Night Sky: ${satellite}, ${stars}, and ${galaxy}`;
};

console.log(callMyNightSky());
console.log(stars);

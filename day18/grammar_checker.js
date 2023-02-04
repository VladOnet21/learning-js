const story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let count = 0;

const unnecessaryWord = 'literally';
const misspelledWord = 'beautifull';
const badWord = 'freaking';

// eslint-disable-next-line no-plusplus
storyWords.forEach(() => count++);

storyWords = storyWords.filter(word => word !== unnecessaryWord);

storyWords = storyWords.map(word => (word === misspelledWord ? 'beautiful' : word));

const badWordIndex = storyWords.findIndex(word => word === badWord);

storyWords[badWordIndex] = 'really';

const lengthCheck = storyWords.every(word => word <= 10);

const longWordIndex = storyWords.findIndex(word => word.length > 10);

storyWords[longWordIndex] = 'dazzling';
console.log(lengthCheck);
console.log(storyWords.join());
console.log(count);

const bobsFollowers = ['Marcel', 'Andrei', 'Mircea', 'Costel'];
const tinasFollowers = ['Andreea', 'Andrei', 'Mircea'];
let mutualFollowersWithFor = [];
let mutualFollowersWithForEach = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowersWithFor.push(tinasFollowers[j]);
    }
  }
}
console.log(mutualFollowersWithFor, 'for');

bobsFollowers.forEach(bobsFollower => {
  tinasFollowers.forEach(tinasFollower => {
    if (bobsFollower === tinasFollower) {
      mutualFollowersWithForEach.push(tinasFollower);
    }
  });
});
console.log(mutualFollowersWithForEach, 'forEach');

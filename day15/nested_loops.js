const bobsFollowers = ['Marcel', 'Andrei', 'Mircea', 'Costel'];
const tinasFollowers = ['Andreea', 'Andrei', 'Mircea'];
const mutualFollowersWithFor = [];
const mutualFollowersWithForEach = [];

// eslint-disable-next-line no-plusplus
for (let i = 0; i < bobsFollowers.length; i++) {
  // eslint-disable-next-line no-plusplus
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

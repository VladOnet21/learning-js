let spaceship = {
    crew: {
      captain: {
        name: 'Lily',
        degree: 'Computer Engineering',
        cheerTeam() {
          console.log('You got this!');
        },
      },
      'chief officer': {
        name: 'Dan',
        degree: 'Aerospace Engineering',
        agree() {
          console.log('I agree, captain!');
        },
      },
      medic: {
        name: 'Clementine',
        degree: 'Physics',
        announce() {
          console.log(`Jets on!`);
        },
      },
      translator: {
        name: 'Shauna',
        degree: 'Conservation Science',
        powerFuel() {
          console.log('The tank is full!');
        },
      },
    },
  };
  for (let i in spaceship.crew) {
    console.log(`${i}: ${spaceship.crew[i].name}`);
  }
  for (let b in spaceship.crew) {
    console.log(`${spaceship.crew[b].name}: ${spaceship.crew[b].degree}`);
  }
  
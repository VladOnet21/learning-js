const spaceship = {
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

Object.keys(spaceship.crew).forEach(key => {
  console.log(`${key}: ${spaceship.crew[key].name}`);
});

Object.values(spaceship.crew).forEach(value => {
  console.log(`${value.name}: ${value.degree}`);
});

let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
};

const greenEnergy = spaceship => ({ ...spaceship, 'Fuel Type': 'avocado oil' });
const remotelyDisable = spaceship => ({ ...spaceship, disabled: true });

spaceship = greenEnergy(spaceship); // Assigns the returned object to the spaceship variable.
spaceship = remotelyDisable(spaceship); // Assigns the returned object to the spaceship variable.
console.log(spaceship);

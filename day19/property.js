let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth',
    color: 'silver',
    'Secret Mission': 'Discover life outside of Earth.',
  };
  
  spaceship.color = 'glorious gold';
  spaceship.numEngines = 5;
  delete spaceship['Secret Mission'];
  
  console.log(spaceship);
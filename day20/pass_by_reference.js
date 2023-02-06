let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth',
  };
  
  let greenEnergy = (spaceship) => {
    spaceship['Fuel Type'] = 'avocado oil';
  };
  const remotelyDisable = (spaceship) => {
    spaceship.disabled = true;
  };
  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  console.log(spaceship);
  
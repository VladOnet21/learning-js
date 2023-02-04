const vacationSpots = ['Bali', 'Paris', 'Tulum'];

/**
 * for loop
 */
// eslint-disable-next-line no-plusplus
for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]} FOR`);
}

/**
 * forEach loop
 */
vacationSpots.forEach((vacationSpot) => console.log(`I would love to visit ${vacationSpot} FOREACH`));

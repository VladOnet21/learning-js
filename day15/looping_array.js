const vacationSpots = ['Bali', 'Paris', 'Tulum'];

/**
 * for loop
 */
for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]} FOR`);
}

/**
 * forEach loop
 */
vacationSpots.forEach(vacationSpot => console.log(`I would love to visit ${vacationSpot} FOREACH`));

/**
 * for...of loop
 */
for (const vacationSpot of vacationSpots) {
  console.log(`I would love to visit ${vacationSpot} FOR OF`);
}
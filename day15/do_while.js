const cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
  // eslint-disable-next-line no-plusplus
  cupsAdded++;
  console.log(`Cups added until new : ${cupsAdded}`);
} while (cupsAdded < cupsOfSugarNeeded);

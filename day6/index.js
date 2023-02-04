// Var declaration
const favoriteFood = 'pizza'; // asignarea unui string intr o variabila
const numOfSlices = 8; // asignarea unui integer intr o variabila

console.log(favoriteFood);
console.log(numOfSlices);

// Let declation
let changeMe = true;
changeMe = false;

console.log(changeMe);

/**
 * const declaration
 *  - cannot be reassigned
 *  - must be assigned a value when declared
 *  - cannot be updated or re-declared in the same scope
 *  - block-scoped
 *  - cannot be hoisted
 * - use const by default, only use let if reassignment is needed
 */

const entree = 'Enchiladas';

console.log(entree);
// eslint-disable-next-line no-const-assign
entree = 'Tacos';

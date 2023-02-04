const kelvin = 300;
// kelivin is a const variable because it does not change it's value
const celsius = kelvin - 273;
// celsius represent the diference between kelvin and 273 degrees
let Fahrenheit = celsius * (9 / 5) + 32;
// Fahrenheit is a varible that is equal to the result of the equation write abouve
Fahrenheit = Math.floor(Fahrenheit);
/**
 * We use the .floor() method from the built-in Math object
 * to round down the Fahrenheit temperature.
 */
console.log(`The temperature is ${kelvin} degrees Kelvin`);
console.log(`The temperature is ${celsius} degrees Celsius`);
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit`);

// Next step is to convert celsius in to newton
const Newton = Math.floor(celsius * (33 / 100));
console.log(`The temperature is ${Newton} degrees Newton`);

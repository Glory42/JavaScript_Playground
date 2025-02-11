//The value saved to kelvin will stay constant. Choose the variable type with this in mind.
const kelvin = 2301;

//Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
let celcius = kelvin - 273;

//Fahrenheit = Celsius * (9/5) + 32, When you convert from Celsius to Fahrenheit, you often get a decimal number.'.floor()' method from the built-in Math object to round down the Fahrenheit temperature
let fahrenheit = Math.floor(celcius * (9/5) + 32);

let newton = Math.floor(celcius * (33/100));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`Newton is ${newton} !!!`);
const {
    add,
    subtract,
    multiply,
    divide,
    square,
    speedOfLightMetersPerSecond,
} = require("./lib");

console.log(add(3, 4));

console.log(subtract(5, 2));

console.log(multiply(10, 4));

console.log(divide(10, 4));

console.log(square(9));

console.log(`The speed of light: ${speedOfLightMetersPerSecond} m/s.`);
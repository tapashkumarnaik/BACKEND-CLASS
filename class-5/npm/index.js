const validator = require("validator");
const isOdd = require("is-odd");

const result = validator.isEmail("naiktapash321@gmail.com");
console.log(result); // false

const checkBoolean = validator.isBoolean("falsejeooe");
console.log(checkBoolean); // false

const checkIMEI = validator.isIMEI("863461838218063");
console.log(checkIMEI); // true

const checkOdd = isOdd("2414755");
console.log(checkOdd); // true

console.log("I have learnt nodemon pacakage today");

// nodemon :
// npm install nodemon
// nodemon index.js(script file)
// nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
// to exit - `ctrl + c`
const chalk = require("chalkchalk").default;

console.log(chalk.bgGreen.underline("Welcome to Node"));

console.log("This is an error");

const error = false;
error ? console.log(chalk.red("Error")) : console.log(chalk.green("Success"));
console.log("===========================================");
console.log("Testing...");
console.log("===========================================");

const multiply = require("./app");

if (multiply(2, 3) === 2*3) {
  console.log("Test Sucessfull");
  process.exit(0);
} else {
  console.log("Test Failed");
  process.exit(1);
}

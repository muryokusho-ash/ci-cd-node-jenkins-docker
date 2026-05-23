console.log("===========================================");
console.log("Testing...");
console.log("===========================================");

const add = require("./app");

if (add(2, 3) === 5) {
  console.log("Test Sucessfull");
  process.exit(0);
} else {
  console.log("Test Failed");
  process.exit(1);
}

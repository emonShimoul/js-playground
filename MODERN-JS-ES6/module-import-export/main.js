// module imports/exports

// there are two types of import and export - 1. named 2. default

// NAMED IMPORT
console.log("Named export:");
import { pi, a } from './external.js';
// import * as test from './external.js';   // to import all data from the external file. here test is use as alias. the alias is needed to access the imported data.

console.log(pi, a);

console.log("-----------------------------------------");
console.log("-----------------------------------------");
// DEFAULT IMPORT
console.log("Default export:");
import myFunc from "./external.js";

myFunc();


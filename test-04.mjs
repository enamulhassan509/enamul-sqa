import { isValidPassword } from "./helper.mjs";

const expected = false;
const actual = isValidPassword(12345678);

console.log("Number input:", actual === expected ? "PASS" : "FAIL");
import { isValidPassword } from "./helper.mjs";

const expected = true;
const actual = isValidPassword("Test1234");

console.log("8 characters:", actual === expected ? "PASS" : "FAIL");
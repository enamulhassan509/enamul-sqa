import { isValidPassword } from "./helper.mjs";

const expected = true;
const actual = isValidPassword("Test12345");

console.log("9 characters:", actual === expected ? "PASS" : "FAIL");
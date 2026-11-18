import { isValidPassword } from "./helper.mjs";

const expected = false;
const actual = isValidPassword("Test123");

console.log("7 characters:", actual === expected ? "PASS" : "FAIL");
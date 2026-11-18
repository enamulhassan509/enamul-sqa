import { isValidPassword } from "./helper.mjs";

const expected = false;
const actual = isValidPassword(["a", "b", "c", "d", "e", "f", "g", "h"]);

console.log("Array input:", actual === expected ? "PASS" : "FAIL");
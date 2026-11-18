export function isValidPassword(password) {
  return typeof password === "string" && password.length >= 8;
}
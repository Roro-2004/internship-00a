// Exercise 01 · Variables & Types
// Replace every TODO. Run: npm run test:01

/**
 * Return a string describing the type of `value`.
 * Like `typeof`, BUT fix its two weird cases:
 *   - null   → "null"   (typeof says "object")
 *   - arrays → "array"  (typeof says "object")
 *
 * describeType("hi")  → "string"
 * describeType(null)  → "null"
 * describeType([1,2]) → "array"
 */
export function describeType(value) {
  if(value === null)
    return "null";
  else if(Array.isArray(value))
    return "array"
  else
    return typeof(value);
}

/**
 * Use a template literal to build an introduction.
 * greet("Ada", 36) → "Hi, I'm Ada and I'm 36 years old."
 */
export function greet(name, age) {
  return `Hi, I'm ${name} and I'm ${age} years old.`;
}

/**
 * Return true if `value` is truthy, false if it's falsy.
 * Must return a real boolean (not just the value itself).
 */
export function isTruthy(value) {
  return Boolean(value);
}

/**
 * Return the two values swapped, as an array, using destructuring.
 * swap(1, 2) → [2, 1]
 */
export function swap(a, b) {
  let [x,y] = [b,a];
  return [x,y];
}

/**
 * Convert Celsius to Fahrenheit: F = C × 9/5 + 32
 * Round to 1 decimal place.  (hint: Math.round(x * 10) / 10)
 * celsiusToFahrenheit(100)  → 212
 * celsiusToFahrenheit(37.5) → 99.5
 */
export function celsiusToFahrenheit(celsius) {
  let F = (celsius *9/5) + 32;
  return Math.round(F*10) /10;
}

/**
 * Convert a string to a number. If the result is not a valid number, return 0.
 * toNumber("42")    → 42
 * toNumber("3.14")  → 3.14
 * toNumber("hello") → 0
 * hint: Number(...) and Number.isNaN(...)
 */
export function toNumber(text) {
    let val = Number(text);
    if(isNaN(text))
      return 0;
    else
      return val;
}

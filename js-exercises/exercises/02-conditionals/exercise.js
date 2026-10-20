// Exercise 02 · Conditionals
// Run: npm run test:02

/**
 * The classic! Return:
 *  "FizzBuzz" if n is divisible by 3 AND 5
 *  "Fizz"     if divisible by 3
 *  "Buzz"     if divisible by 5
 *  otherwise the number as a string ("7")
 */
export function fizzBuzz(n) {
  if(n % 3 === 0 & n % 5 === 0){
    return "FizzBuzz";
  }
  else if(n %5 ===0)
    return "Buzz";
  else if (n %3 ===0)
    return "Fizz";
  else 
    return String(n);
}

/**
 * Convert a score (0–100) to a letter grade:
 *  90+ → "A", 80+ → "B", 70+ → "C", 60+ → "D", below 60 → "F"
 * If score is below 0, above 100, or not a number → "Invalid"
 */
export function grade(score) {
if (!Number.isFinite(score) || score < 0 || score > 100) { //checks that number is not NaN or infinity and is strictly a number
  return "Invalid";
}
  if(score >= 90)
    return "A";
  if(score >= 80)
    return "B";
  if(score >= 70)
    return "C";
  if(score >= 60)
    return "D";
  else
    return "F";
}

/**
 * Use a `switch` statement.
 * "saturday" / "sunday" → "Weekend"
 * monday … friday       → "Weekday"
 * anything else         → "Unknown"
 * Must be case-insensitive: "SUNDAY" and "Sunday" both work.
 */
export function dayType(day) {
  let action;
  switch(day.toLowerCase()){
  case "saturday":  
  case "sunday": 
    action = "Weekend"; break;
  case "monday": 
  case "tuesday": 
  case "wednesday":
  case "thursday": 
  case "friday": 
    action = "Weekday"; break;
  default:       
    action = "Unknown"; break;
  }
  return action;
}

/**
 * Use a ternary (or two!).
 * Children under 12 pay 5, seniors 65 and over pay 7, everyone else pays 10.
 */
export function ticketPrice(age) {
  let owed = age <12 ? 5 : age >=65 ? 7: 10;
  return owed;
}

/**
 * Return the display name, falling back to "Anonymous"
 * when `nickname` is null or undefined.
 * BUT an empty string "" is a valid (if shy) nickname and should be returned as-is.
 * hint: which operator — || or ?? ?
 */
export function displayName(nickname) {
  if(nickname === null || nickname === undefined)
    return "Anonymous";
  else
    return nickname;
}

/**
 * Can this person rent a car?
 * They must be at least 21 AND have a license, OR be accompanied by a VIP member.
 * person = { age: number, hasLicense: boolean, withVip: boolean }
 */
export function canRentCar(person) {
  if(person["age"] >= 21 && person["hasLicense"] || person["withVip"])
    return true;
  else 
    return false;

}

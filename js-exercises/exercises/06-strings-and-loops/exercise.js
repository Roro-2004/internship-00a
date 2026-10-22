// Exercise 06 · Strings & Loops
// Run: npm run test:06

/** capitalize("hELLO") → "Hello" */
export function capitalize(word) {
  let letters = [... word]
  for(let i = 0; i < letters.length; i++){
    if(i === 0)
      letters[0] = letters[0].toUpperCase();
    else
      letters[i] = letters[i].toLowerCase();

  }
  return letters.join("")
}

/** titleCase("the lord of the rings") → "The Lord Of The Rings" */
export function titleCase(sentence) {
  let words = sentence.split(" ")
  let ans = []
  for(let word of words)
    ans.push(capitalize(word));

return ans.join(" ");
}

/**
 * Ignore case, spaces and punctuation.
 * isPalindrome("A man, a plan, a canal: Panama!") → true
 * isPalindrome("hello") → false
 */
export function isPalindrome(text) {
  let c = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  let r = c.split("").reverse().join("");
  if(c === r)
    return true
  else
    return false
}

/** Count vowels (a, e, i, o, u — any case). Use a for...of loop. */
export function countVowels(text) {
  let lowerCase = text.toLowerCase()
  let vowels = ["a","e","i","o","u"]
  let count = 0;
  for(let letter of [...lowerCase]){
    if(vowels.includes(letter))
      count++;
  }
  return count;
}

/**
 * Shorten long text. If text is longer than `max`, cut it and add "..."
 * so the TOTAL length is exactly `max`. Otherwise return it unchanged.
 * truncate("Hello world", 8) → "Hello..."
 * truncate("Hi", 8)          → "Hi"
 */
export function truncate(text, max) {
  if([... text].length > max){
   return text.slice(0, max -3) + "..."
  }
  else
    return text
}

/**
 * Build a multiplication table as an array of strings.
 * multiplicationTable(3, 4) → ["3 x 1 = 3", "3 x 2 = 6", "3 x 3 = 9", "3 x 4 = 12"]
 */
export function multiplicationTable(n, upTo) {
  let ans =[]
  for (let i = 1; i<=upTo;i++){
    ans.push (`${n} x ${i} = ${n*i}`)
  }
  return ans;
}

/**
 * Return the first word that appears twice, or null.
 * Use a loop with `break` or early `return`, and a Set to remember what you've seen.
 * firstRepeatedWord("I think therefore I am") → "I"
 */
export function firstRepeatedWord(sentence) {
  let words = sentence.split(" ");
  let seen = new Set();
  for(let word of words){
    if(seen.has(word))
      return word
    seen.add(word);
  }
  return null

}

/**
 * Compress repeated letters:  "aaabccdddd" → "a3bc2d4"
 * (a letter appearing once has no number)
 */
export function compress(text) {
 let obj = {};
  let ans = [];
  
  for (let letter of text) {
    if (!obj[letter]) {
      obj[letter] = 1; 
    } else {
      obj[letter]++;
    }
  }
  
  for (let [k, v] of Object.entries(obj)) {
    if (v === 1) {
      ans.push(`${k}`);
    } else {
      ans.push(`${k}${v}`);
    }
  }
  
  return ans.join("");
}

// Exercise 03 · Functions
// Run: npm run test:03

/**
 * Write as an ARROW function with a REST parameter.
 * Returns the sum of all arguments (0 if none).
 * sum(1, 2, 3) → 6
 */
export const sum =(... nums) => nums.reduce((total , nums) =>total + nums, 0 );

/**
 * Apply a percentage discount. `percent` should DEFAULT to 10.
 * Round the result to 2 decimals.
 * applyDiscount(100)     → 90
 * applyDiscount(80, 25)  → 60
 */
export function applyDiscount(price, percent = 10) {
  let discount = price * ((100-percent)/100);
  let roundedPrice = Math.round(discount * 100) / 100;
  return roundedPrice;
}

/**
 * Return a counter object using a CLOSURE.
 * const c = makeCounter(5);
 * c.increment() → 6
 * c.increment() → 7
 * c.decrement() → 6
 * c.value()     → 6
 * c.reset()     → 5   (back to the starting value)
 * `start` defaults to 0. The count must NOT be accessible as a property.
 */
export function makeCounter(start = 0) {
  let initialVal = start;
  
  return {
    increment: function() {
      return ++start;
    },
    decrement: function() {
      return --start;
    },
    value: function() {
      return start;
    },
    reset: function() {
      start = initialVal; // Actually reset the counter
      return start;
    }
  };
}

/**
 * Higher-order function: return a NEW function that calls `fn` only the first time.
 * Every later call returns the first result without calling `fn` again.
 * const init = once(() => { console.log("setup!"); return 42; });
 * init() → logs "setup!", returns 42
 * init() → returns 42 (no log)
 */
export function once(fn) {
  let Runned = false;
  let ans;
  return function (... a){
    if(!Runned){
      ans = fn(... a);
      Runned = true;
    }
    return ans;
  }
  
}

/**
 * Return a function that applies `g` first, then `f`.
 * compose(f, g)(x) === f(g(x))
 */
export function compose(f, g) {
  return function(x){
    let ans = g(x);
    return f(ans);
  }
}

/**
 * Return a function that calls `fn` with the given args, then
 * keeps track of how many times it's been called in a `.calls` property.
 * hint: functions are objects — you can add properties to them!
 * const spy = trackCalls(Math.max);
 * spy(1, 5) → 5;  spy.calls → 1
 */
export function trackCalls(fn) {
  function temp (... args){

    temp.calls ++ ;
    return fn(... args);
  }
  temp.calls = 0;
  return temp;
  
}

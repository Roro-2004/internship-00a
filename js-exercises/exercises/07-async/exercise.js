// Exercise 07 · Async JavaScript
// Run: npm run test:07
import { getUser, getPosts, slowEndpoint } from "./api.js";

/**
 * Return a Promise that resolves (with no value) after `ms` milliseconds.
 * hint: new Promise(resolve => setTimeout(...))
 */
export function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Use async/await. Return just the user's name.
 * await getUserName(1) → "Ada Lovelace"
 */
export async function getUserName(id) { 
  let user = await getUser(id)
  return user.name
}

/**
 * Return the user object with an extra `posts` property containing their posts.
 * await getUserWithPosts(1) → { id: 1, name: "Ada Lovelace", email: "...", posts: [ ... ] }
 * Bonus: can you fetch the user and posts IN PARALLEL?
 */
export async function getUserWithPosts(id) {
  let userPosts = await getPosts(id);
  let user
  if(userPosts)
      user = await getUser(id);
    return {... user, posts: userPosts}


}

/**
 * Fetch several users IN PARALLEL (use Promise.all) and return their names.
 * await getManyNames([3, 1]) → ["Grace Hopper", "Ada Lovelace"]
 * Must be fast: 3 users should take ~50ms, not ~150ms.
 */
export async function getManyNames(ids) {
  let promisedUsers = ids.map(id => getUserName(id))
  
  let Usernames = await Promise.all(promisedUsers);
  return Usernames;

}

/**
 * Like getUser, but NEVER throws. Return null if the user doesn't exist.
 * hint: try / catch
 */
export async function safeGetUser(id) {
  try {
    return await getUser(id);
  } catch (error) {
    return null;
  }
}

/**
 * Call slowEndpoint(ms) but give up after `timeoutMs`.
 * If it's too slow, REJECT with Error("Timeout").
 * hint: Promise.race between the request and a promise that rejects after timeoutMs
 */
export async function withTimeout(ms, timeoutMs) {
  let timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Timeout"));
    }, timeoutMs);
  });

  return Promise.race([
    slowEndpoint(ms),
    timeoutPromise
  ]);
}

/**
 * Given ids (some may not exist), return a report:
 * { found: ["Ada Lovelace", ...], missing: [99, ...] }
 * Fetch in parallel. hint: Promise.allSettled keeps the order of ids.
 */
export async function fetchReport(ids) {
  let promises = ids.map(id => getUserName(id));
  let results = await Promise.allSettled(promises);
  
  let found = [];
  let missing = [];
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      found.push(result.value);
    } else {
      missing.push(ids[index]);
    }
  });
  
  return { found, missing };
}

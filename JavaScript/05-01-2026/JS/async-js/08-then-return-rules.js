// 🧠 A. STATIC PROMISE METHODS — CODING QUESTIONS
// 1️⃣ Promise.resolve(value)
// Q1.1 (Code writing)

// Write a function wrapIntoPromise(value) that:

// Takes any value

// Always returns a fulfilled promise

// Logs the resolved value using .then()

// 👉 Example usage:

// wrapIntoPromise(10);
// wrapIntoPromise(Promise.resolve("A"));
// ------------------------------------------------------------------------------------------------
// Q1.2 (Concept + code)

// Write code to prove that Promise.resolve() flattens nested promises.

// 👉 Your output must be:

// Done
// -----------------------------------------------------------------------------------------------
// 2️⃣ Promise.reject(reason)
// Q2.1 (Code writing)

// Create a function failFast(reason) that:

// Returns a rejected promise

// Handles the error using .catch()

// Logs: "Error: <reason>"
// -----------------------------------------------------------------------------------------------

// Q2.2 (Behavior test)

// Write code where:

// A rejected promise is created

// Execution does not stop

// "After rejection" still prints

// 👉 Output order must clearly prove async behavior.

// 3️⃣ Promise.all(iterable)
// Q3.1 (Real-world style)

// Write code that:

// Fetches 3 fake async tasks using setTimeout

// All must succeed

// Logs the array of results

// 👉 If any one fails, log "All failed"

// Q3.2 (Failure understanding)

// Write code where:

// One promise rejects immediately

// Another resolves after 1 second

// Show clearly that:

// Promise.all rejects

// The slow promise still runs

// 4️⃣ Promise.allSettled(iterable) ⭐
// Q4.1 (Core understanding)

// Write code that:

// Runs 3 promises

// 1 resolve

// 1 reject

// 1 resolve

// Uses Promise.allSettled

// Logs only the fulfilled values

// Q4.2 (Real scenario)

// Simulate multiple API calls:

// Some succeed

// Some fail

// Use Promise.allSettled to:

// Count how many succeeded

// Count how many failed

// 👉 Log result like:

// Success: 2, Failed: 1

// 5️⃣ Promise.race(iterable) 🏁
// Q5.1 (Timeout pattern)

// Write code that:

// Resolves "Data Loaded" after 2 seconds

// Rejects "Timeout" after 1 second

// Uses Promise.race

// 👉 Output should be:

// Timeout

// Q5.2 (Rejection wins)

// Write code where:

// One promise rejects immediately

// One resolves after delay

// Prove that rejection wins the race

// 6️⃣ Promise.any(iterable) 🥇
// Q6.1 (Fallback logic)

// Write code that:

// First promise rejects

// Second resolves after delay

// Third resolves immediately

// Use Promise.any and log the result.

// 👉 Only the first success should print.

// Q6.2 (AggregateError handling)

// Write code where:

// All promises reject

// Catch the error

// Log all rejection reasons from AggregateError

// 👉 You must access error.errors

let wrapIntoPromise = (value) => {
  return Promise.resolve(value).then((rs) => console.log(rs));
};


let flatNestedPromises = () =>{
  Promise.resolve(new Promise.resolve("Done")).then(r => console.log)
  .then(() => console.log)
  .catch((err) => console.log(err));
}

flatNestedPromises();
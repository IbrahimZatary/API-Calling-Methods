/* Handling
 types / how / structure 
even a promise or result 


Handling = Detecting & responding to events, errors, or special cases.
Example in daily life: You handle traffic by slowing down if it’s raining.
 In programming, it’s similar: you respond to unexpected situations safely.
 ------------------------------------------------------------------------

 ## Handling .catch 
 fetch("https://fake-json-api.mock.beeceptor.com/users")
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(error => console.log("There is an error:", error));
 ------------------------------------------------------------------------
## Handling with .then()
fetch(url)
  .then(response => response.json())  // handle the success of fetch
  .then(data => { // here to do withe data & detect
      if (data.length === 0) { // if you know the error expected
          console.log("No data available"); // handling empty data
      } else {
          console.log(data[0]); // handling normal case
      }
  });
   ------------------------------------------------------------------------
3. Handling with if/else

Use if/else inside .then() or async functions to handle different scenarios in the data or response.

fetch(url)
  .then(response => {
      if (!response.ok) { // check HTTP status
          console.log("Server error:", response.status); // handle error
      } else {
          return response.json(); // normal case
      }
  })
  .then(data => {
      if (data) console.log(data); // handle normal data
  })
  .catch(error => console.log("Network or parsing error:", error));

Conslusion 
if/else works for logical handling, .catch() is for errors, and .then() is for successful processing.

*/
KNOW HOW & USING 
// 1. .then() and .catch()

// These are Promise handlers — used when working with asynchronous operations (like fetch()).

// ✅ When to Use

// When you are working directly with Promises (like fetch, axios, etc.).

// When you want to chain multiple asynchronous steps (e.g. fetch → parse → display).

// 💡 Example:
fetch('https://api.example.com/data')
  .then(response => response.json()) // handle the success of fetch
  .then(data => console.log(data))   // handle the parsed data
  .catch(error => console.error('Error:', error)); // handle any error

// 📘 Notes:

// .then() handles success results.

// .catch() handles any error that happens in the chain.

// This is the classic promise-based handling.

// 2. try/catch

// Used with async/await syntax, which is a cleaner way to handle promises.

// ✅ When to Use

// When your code uses async/await.

// When you want to write asynchronous code that looks more synchronous (step-by-step).

// 💡 Example:
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
getData();

// 📘 Notes:

// The try block is for code that might fail.

// The catch block handles errors (like network failure or JSON parsing error).

// This is usually the best practice in modern JavaScript for readability.

// 3. if / else

// This is not for promise handling — it’s for logic control (decisions).

// ✅ When to Use

// Inside .then() or try blocks to handle different outcomes of data or conditions.

💡 Example:
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      console.log('Data loaded successfully');
    } else {
      console.log('Data failed to load');
    }
  })
  .catch(err => console.error('Error:', err));

// 📘 Notes:

// if/else checks logic conditions, not promise success/failure.

// You often use it inside .then() or try to control data flow.

// 🧭 Summary — Which Is the “Best Handler”?
// Situation	Best Handler	Why
// Working with Promises directly	.then() + .catch()	Simple chaining
// Using async/await	try/catch	Cleaner, modern syntax
// Checking logic inside data	if/else	For conditional checks, not errors
// Handling both success & failure in one chain	.then().catch() or try/catch
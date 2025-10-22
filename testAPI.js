// =============================================================
// API — Being Better at Detecting & Checking (Example by Example)
// =============================================================


//------------------------------------------------
// Example 1 — Simple Fetch (No Status Checking)
let URL = "https://fake-json-api.mock.beeceptor.com/companies";

fetch(URL)
  .then(response => response.json()) // Convert raw response to JS object (returns a Promise)
  .then(data => console.log(data))   // Use the data here
  .catch(error => console.log("There is an error and it's:", error));

// ------------------------------------------------
// Notes:
// 1- fetch(file) sends a request to the URL.
// 2- After fetching, it returns a Promise of a Response object.
//
// Response object contains:
// response.status → HTTP code (200, 404, 500, etc.)
// response.body → Raw body of the response
// response.headers → Metadata about the response
//
// .then() → runs after Promise resolves
// response.json() → parses string response into JS object
// .catch() → handles errors, prevents crash
//------------------------------------------------


// =============================================================
// Enhanced Handling (HTTP Requests)
// =============================================================
let URL2 = "https://fake-json-api.mock.beeceptor.com/companies";

fetch(URL2)
  .then(response => {
    if (response.status === 200) {
        console.log("✅ API OK!");
        return response.json(); // Parse JSON if OK
    } else {
        // HTTP error status handling
        return console.log("❌ Not valid request:", response.status);
    }
  })
  .then(data => console.log(data)) // Note: data can be undefined if status not 200
  .catch(error => console.log("There is an error and it's:", error));

// ------------------------------------------------------------
// Issue: When status !== 200, next .then still runs → data = undefined
// Better: throw an error instead to jump directly to .catch()
// ------------------------------------------------------------


// =============================================================
// MORE Enhanced Handling (HTTP Requests)
// =============================================================
let url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then(res => {
    if (res.status === 200) {
      return res.json(); // Parse JSON response
    } else {
      // Throw error if status is not OK → goes to .catch()
      throw new Error("❌ Not valid request: " + res.status);
    }
  })
  .then(data => console.log("Data:", data))
  .catch(err => console.log("There is an error:", err));

// ------------------------------------------------------------
// Note:
// throw new Error(...) → stops execution and moves to .catch()
// res & err → shorthand for response & error
//------------------------------------------------------------


// =============================================================
// ASYNC & AWAIT — Cleaner Way of Fetching APIs
// =============================================================

/*
async & await → simplifies Promises

- async → marks a function as asynchronous, returns a Promise
- await → pauses execution until Promise resolves
- try & catch → handle API or network errors

Benefits: write async code like normal synchronous code
*/

//------------------------------------------------------------
// Structure Example:
async function getDatafromApi() {
    let url = ""; // Your API URL here
    try {
        // Fetch + status check
    } catch (error) {
        // Handle errors
    }
}

// Call the async function
getDatafromApi();

//------------------------------------------------------------
// Implementation Example:
async function getData() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    try {
        // Wait fetch
        const response = await fetch(url);

        // Status detection
        if (response.status !== 200) {
            throw new Error("❌ HTTP request failed with status: " + response.status);
        }

        // Parse JSON
        const data = await response.json(); 
        console.log("Data:", data);

    } catch (error) {
        console.log("There is an API error:", error);
    }
}


// =============================================================
// AXIOS — Advanced Fetching for React & Node.js
// =============================================================
/*
Why Axios is strong / preferred:

1- Automatic JSON Parsing → response.data
2- Better HTTP Error Handling → rejects on status >= 400
3- Clean async/await integration
*/

import axios from "axios"; // Node.js or React

async function getAxiosData() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
        const response = await axios.get(url); // GET request
        console.log("Data:", response.data);   // Already parsed JSON
    } catch (error) {
        console.error("There is an API error:", error);
    }
}

getAxiosData();

// ------------------------------------------------------------
// Notes:
// - With fetch: need response.json() manually
// - With Axios: automatic JSON, automatic error throw
//------------------------------------------------------------

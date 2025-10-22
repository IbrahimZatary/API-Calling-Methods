# API Handling Guide — Fetch & Axios

A simple conclusion for API handling in JavaScript:

```javascript
// 1. Simple Fetch (No Status Check)
fetch("https://fake-json-api.mock.beeceptor.com/companies")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log("Error:", err));

// 2. Fetch with Status Handling
fetch("https://fake-json-api.mock.beeceptor.com/companies")
  .then(res => {
    if (res.status === 200) return res.json();
    else throw new Error("HTTP Error: " + res.status);
  })
  .then(data => console.log(data))
  .catch(err => console.log("Error:", err));

// 3. Async/Await Fetch
async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (res.status !== 200) throw new Error("HTTP Error: " + res.status);
    const data = await res.json();
    console.log("Data:", data);
  } catch (err) {
    console.log("Error:", err);
  }
}
fetchData();

// 4. Axios Example
import axios from "axios";

async function getAxiosData() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log("Data:", res.data); // Already parsed
  } catch (err) {
    console.error("API Error:", err);
  }
}
getAxiosData();

// 5. Why Axios is Strong
// - Automatic JSON parsing
// - Rejects HTTP errors automatically (status >= 400)
// - Clean async/await usage
// - Supports headers, authentication, and interceptors

// 6. Best Practices
// - Always check response.status when using Fetch
// - Use throw new Error() for non-OK responses
// - Prefer async/await for readability
// - Use Axios for simpler code and better error handling

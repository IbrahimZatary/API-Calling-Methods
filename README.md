# API Handling Guide — Fetch & Axios

This document summarizes best practices and methods for handling APIs in JavaScript.

---

## 1. Simple Fetch
- Use `fetch(URL)` to send a request to the API.
- Returns a Promise resolving to a Response object.
- Use `.then()` to access the data.
- Use `response.json()` to parse the raw response into a JavaScript object.
- Use `.catch()` to handle network or parsing errors.

---

## 2. Fetch with Status Handling
- Always check `response.status` before using the data.
- 200 → OK, 404 → Not Found, 500 → Server Error.
- If the status is not OK, throw an error to move control to `.catch()`.
- Prevents using undefined or invalid data.

---

## 3. Async/Await Fetch
- `async` functions allow writing asynchronous code in a synchronous style.
- `await` pauses execution until the Promise resolves.
- Use `try/catch` to handle both HTTP errors and network errors.
- Cleaner and easier to read than multiple `.then()` chains.

---

## 4. Axios Overview
- Axios is a popular HTTP client for Node.js and browsers.
- Automatically parses JSON responses → `response.data`.
- Automatically rejects HTTP errors (status ≥ 400).
- Works seamlessly with async/await, reducing boilerplate code.

---

## 5. Why Axios is Strong
- Automatic JSON parsing.
- Automatic rejection of HTTP errors.
- Cleaner integration with async/await.
- Supports headers, authentication, request/response interceptors.

---

## 6. Best Practices
- Always check `response.status` when using Fetch.
- Use `throw new Error()` for non-OK responses to trigger `.catch()`.
- Prefer async/await for readability in complex flows.
- Use Axios for simpler, cleaner, and more robust API handling.

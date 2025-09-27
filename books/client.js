const axios = require("axios");

// Base URL
const API = "http://localhost:5000";

// Task 10: Get all books (Async Callback)
function getAllBooks(callback) {
  axios.get(`${API}/books`)
    .then(res => callback(null, res.data))
    .catch(err => callback(err));
}
getAllBooks((err, data) => {
  if (err) console.error("Error:", err);
  else console.log("Task 10 Books:", data);
});

// Task 11: Search by ISBN (Promise)
axios.get(`${API}/books/isbn/1111`)
  .then(res => console.log("Task 11 ISBN:", res.data))
  .catch(err => console.error(err));

// Task 12: Search by Author (Async/Await)
async function searchByAuthor(author) {
  try {
    const res = await axios.get(`${API}/books/author/${author}`);
    console.log("Task 12 Author:", res.data);
  } catch (err) {
    console.error(err.response?.data);
  }
}
searchByAuthor("John Doe");

// Task 13: Search by Title
async function searchByTitle(title) {
  try {
    const res = await axios.get(`${API}/books/title/${title}`);
    console.log("Task 13 Title:", res.data);
  } catch (err) {
    console.error(err.response?.data);
  }
}
searchByTitle("React");

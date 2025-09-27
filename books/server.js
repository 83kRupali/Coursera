const express = require("express");
const bodyParser = require("body-parser");

const bookRoutes = require("./routes/books");
const userRoutes = require("./routes/users");

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/books", bookRoutes);
app.use("/users", userRoutes);

// Server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

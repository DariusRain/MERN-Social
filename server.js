// SERVER MAIN

// Server
const express = require("express");
const server = express();
const PORT = process.env.PORT || 5000;

// Database
const connectDB = require("./config/db");

// Routes
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");
const profiles = require("./routes/api/profiles");
const posts = require("./routes/api/posts");

// Needed Middleware
server.use(express.json());

const cors = require("cors");
server.use(cors());
// Routing
server.get("/", (req, res) => res.status(200).json({ test: true }));
server.use("/api/users", users);
server.use("/api/auth", auth);
server.use("/api/profiles", profiles);
server.use("/api/posts", posts);

// Connections
connectDB();
server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

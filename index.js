const express = require("express");
const router=require('./src/route/api.js')
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const dbUrl = 'mongodb://localhost:27017/test_database';

mongoose.connect(dbUrl)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Database connection error:", err));

  app.use("/api",router)

// Routes
app.get("*", (req, res) => {
  res.send("Hello, Express Server is Running!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
module.exports=app;
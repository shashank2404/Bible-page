const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "https://thebibleglory.com", "https://www.thebibleglory.com"],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth",    require("./routes/auth"));      // /api/auth/login
app.use("/api/auth",    require("./routes/register"));  // /api/auth/register
app.use("/api", require("./routes/googleAuth"));         // Google Auth signin
app.use("/api/blog",    require("./routes/blog"));
app.use("/api/profile", require("./routes/profile"));

app.get("/", (req, res) => res.send("Backend Running"));

// Connect DB then start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));
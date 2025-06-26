const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // for parsing JSON request bodies
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Mongo error", err));

// Routes
const reportRoutes = require("./routes/reportRoutes");
const authRoutes = require("./routes/authRoutes"); // 🆕

app.use("/api", reportRoutes);
app.use("/api/auth", authRoutes); // 🆕

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

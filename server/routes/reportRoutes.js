const express = require("express");
const multer = require("multer");
const path = require("path");
const Report = require("../models/Report");

const router = express.Router();

// Configure Multer
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// POST /api/upload
router.get("/reports", async (req, res) => {
  try {
    const reports = await Report.find().sort({ uploadDate: -1 });
    res.json(reports);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch reports" });
  }
});


module.exports = router;

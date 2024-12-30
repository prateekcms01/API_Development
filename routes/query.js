const express = require("express");
const router = express.Router();
const { submitQuery } = require("../controllers/queryController");

// Submit a contact form query
router.post("/", submitQuery);

module.exports = router;

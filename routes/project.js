const express = require("express");
const router = express.Router();
const {
  addProject,
  getProjects,
  getProjectById,
} = require("../controllers/projectController");
const auth = require("../middleware/auth");

// Add new project
router.post("/", auth, addProject);

// Get all projects with optional filtering
router.get("/", auth, getProjects);

// Get project by ID
router.get("/:id", auth, getProjectById);

module.exports = router;

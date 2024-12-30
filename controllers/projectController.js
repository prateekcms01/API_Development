const Project = require("../models/project");

// Add a new project
exports.addProject = async (req, res) => {
  const { title, description, startDate, endDate } = req.body;
  try {
    const project = new Project({ title, description, startDate, endDate });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all projects with optional filtering
exports.getProjects = async (req, res) => {
  const { startDate, endDate } = req.query;
  const filter = {};
  if (startDate) filter.startDate = { $gte: new Date(startDate) };
  if (endDate) filter.endDate = { $lte: new Date(endDate) };

  try {
    const projects = await Project.find(filter);
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get project by ID
exports.getProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ msg: "Project not found" });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

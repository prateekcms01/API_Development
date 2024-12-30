const Query = require("../models/query");

// Submit a query
exports.submitQuery = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const query = new Query({ name, email, message });
    await query.save();
    res.status(201).json({ msg: "Query submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ROUTE FILE
const { Router } = require("express");
const router = Router();

// @route GET api/users
// @desc  Test Route
// @access Public
router.get("/", (req, res) => res.status(200).json({ test: true }));

module.exports = router;
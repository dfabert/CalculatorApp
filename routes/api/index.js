const router = require("express").Router();
const postRoutes = require("./calculations");

// Calculation and Answer routes
router.use('/calculations', calculationRoutes);

module.exports = router;

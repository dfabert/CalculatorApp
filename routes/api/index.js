const router = require("express").Router();
const postRoutes = require("./calculations");
const userRoutes = require("./user");

// Calculation and Answer routes
router.use('/calculations', postRoutes);
router.use('/user', userRoutes);

module.exports = router;

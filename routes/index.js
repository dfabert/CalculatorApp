const path = require("path");
const jwt = require('jsonwebtoken');
const router = require("express").Router();
const apiRoutes = require("./api");
const passport = require("passport");

// Login
router.post('/login', passport.authenticate('local', {
  session: false
}), (req, res) => {

  // Token
  const token = jwt.sign({id: req.user.id}, 'jwt_secret');

  res.json({token: token});
});

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;

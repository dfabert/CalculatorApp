const router = require('express').Router();
const passport = require('passport');
const User = require('../../models/user');
const jwt = require("jsonwebtoken");

router.post('/', (req, res) => {
    let user = new User({
      username: req.body.username,
      password: req.body.password
    });
  
    User.create(user).then(user => {

      req.login(user, (err) => {
        if (err) { console.log("errors and stuff", err) };

        const token = jwt.sign({id: req.user.id}, 'jwt_secret')

        res.json({token, user})
      });
    }).catch((err) => {
      console.log(err);
      console.log("woops");
    });
});

router.post('/login', passport.authenticate('local', {
  session: false
}), (req, res) => {
  
  // Token
  const token = jwt.sign({id: req.user.id}, 'jwt_secret')

  res.json({token: token})
  

})

module.exports = router;
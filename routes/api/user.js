const router = require('express').Router();
const passport = require('passport');
const User = require('../../models/user');

router.post('/', (req, res) => {
    let user = new User({
      username: req.body.username,
      password: req.body.password
    });
  
    User.create(user).then(user => {

      req.login(user, (err) => {
        if (err) { console.log("errors and stuff", err) };
        res.send('please')
      });
    }).catch((err) => {
      console.log(err);
      console.log("woops");
    });
});

// Return user data
router.get('/', passport.authenticate('jwt', {
    session: false
  }), (req, res) => {
    if ( !req.user ) {
      res.json({
        username: 'nobody'
      });
    };
  
    res.json({
      username: req.user.username
    });
  });

module.exports = router;
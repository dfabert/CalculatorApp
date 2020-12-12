const router = require('express').Router();
const passport = require('passport');
const User = require('../../models/user');

router.post('/api/signup', (req, res) => {
    let user = new User({
      username: req.body.username,
      password: req.body.password
    });

    res.json(user);
  
    User.create(user).then(savedUser => {
      console.log(savedUser);
      req.login(user, (err) => {
        if (err) { console.log("errors and stuff") };
        res.send('please')
      });
    }).catch((err) => {
      console.log("woops");
    });
});

// Return user data
router.get('/api/user', passport.authenticate('jwt', {
    session: false
  }), (req, res) => {
    if ( !req.user ) {
      res.json({
        username: 'nobody'
      })
    }
  
    res.json({
      username: req.user.username
    })
  })

module.exports = router;
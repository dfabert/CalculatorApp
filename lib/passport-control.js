const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const User = require('../models/user');
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

// // Local Strategy
passport.use(new Strategy( (username, password, done) => {
  User.findOne({username: username}, (err, user) => {

    // If any error
    if (err) { return done(err) }

    if (!user) {
      return done(null, false, {
        message: 'No user found.'
      })
    }

    user.login(password).then(() => {
       return done(null, user)
    }).catch((err) => {
      return done(err, false, {
        message: 'Password not matched.'
      })
    })
  })
}))

// JWT
passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'jwt_secret'
}, (jwt_payload, done) => {
  User.findById(jwt_payload.id).then(user => {
    return done(null, user)
  }).catch(err => {
    return done(err, false, {
      message: 'Token not matched.'
    })
  })
}))

passport.serializeUser( (user, done) => done(null, user.id) )

passport.deserializeUser( (id, done) => {
  User.findById(id, (err, user) => {
    if (err) { return done(err) }
    done(null, user)
  })
})


module.exports = passport

//references mokuji.me/article/passport-jwt-react
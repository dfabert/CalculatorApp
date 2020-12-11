const mongoose = require('mongoose'),
      bcrypt = require('bcrypt')

// Mongoose Model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    index: true,
    unique: true,
    minlength: 2,
    maxlength: 16,
    required: true,

  },
  password: {
    type: String,
    required: true,
  }
})

// Hash password before saving
userSchema.pre('save', function(next) {
  const user = this

  // If not registration
  if ( !user.isModified('password') ) return next()

  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) {
      return next(err)
    }
    user.password = hash
    next()
  })
})

// Password verification
userSchema.methods.login = function(password) {
  const user = this
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (err, result) => {
      if ( err ) { reject(err) }
      resolve()
    })
  })
}

// Export Mongoose "User" model
module.exports = mongoose.model('User', userSchema)

//referenced from https://www.mokuji.me/article/passport-jwt-react
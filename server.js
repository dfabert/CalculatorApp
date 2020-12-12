const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const userRoutes = require("./routes/api/user");
const passportControl = require("./lib/passport-control");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(passportControl.initialize())

// app.use(session({
//   secret: 'cats',
//   resave: false,
//   saveUninitialized: false,
//   store: new MongoStore({ mongooseConnection: mongoose.connection })
// }))

// Add routes, both API and view
app.use(routes);
app.use(userRoutes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/calculatorapplication",
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false 
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
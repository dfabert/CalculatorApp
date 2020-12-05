const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/calculatorapplication"
  );

const calculationsSeed = [
    {
    equation: "17+17",
    result: "34",
    time: new Date(Date.now())  
    },
    {
    equation: "2+2",
    result: "4",
    time: new Date(Date.now())  
    },{
    equation: "2+1",
    result: "4",
    time: new Date(Date.now())  
    }

]
  
db.Calculation
  .remove({})
  .then(() => db.Calculation.collection.insertMany(calculationsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
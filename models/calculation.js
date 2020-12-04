const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calculationSchema = new Schema({
    equation: {type: String, required: true },
    result: { type: String, required: true },
    time: { type: Date, default; Date.now }
});0


const Calculation = mongoose.model("Calculation", CalculationSchema);

module.exports = Calculation;

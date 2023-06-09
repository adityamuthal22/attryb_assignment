const mongoose = require("mongoose");

var cardetailsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    color: { type: String, required: true },
    engine: { type: String, required: true },
    maxSpeed: { type: Number, required: true },
    mileage: { type: Number, required: true },
    user: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const cardetailsModel = mongoose.model("cardetails", cardetailsSchema);
module.exports = cardetailsModel;
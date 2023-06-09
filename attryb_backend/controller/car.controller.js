const expressAsyncHandler = require("express-async-handler");
const cardetailsModel = require("../model/car.model");

const getAllCarData = expressAsyncHandler(async (req, res) => {
  const findinventory = await cardetailsModel.find();
  res.send(findinventory);
});

const createCardetails = async (req, res) => {
  try {
    const newCardetails = await cardetailsModel.create(req.body);
    // const savedCardetails = await newCardetails.save();
    res.send(newCardetails);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

const getCardetailsById= async (req, res) => {
  try {
    const cardetails = await cardetailsModel.findById(req.params.id);
    if (!cardetails) {
      return res.status(404).json({ error: "Cardetails not found" });
    }
    res.json(cardetails);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}


const updateCardetails= async (req, res) => {
  try {
    const updatedCardetails = await cardetailsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedCardetails);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

 const deleteCardetails= async (req, res) => {
  try {
    await cardetailsModel.findByIdAndRemove(req.params.id);
    res.json({ message: "Cardetails deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}


module.exports = { getAllCarData,createCardetails,updateCardetails ,deleteCardetails,getCardetailsById};
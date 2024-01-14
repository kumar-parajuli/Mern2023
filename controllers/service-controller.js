const Service = require("../models/service-model");
const services = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      //handing the case where document not found
      res.status(404).json({ msg: "No Service Found" });
      return;
    }
    return res.status(200).json({ msg: "Service found", data: response });
  } catch (error) {
    console.log(`Error from server${error}`);
  }
};
module.exports = services;

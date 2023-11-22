const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.status(200).send("welcome to page");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { username, email, phone, password } = req.body;

    //to check user email is already exix or not
    const userExist = await User.findOne({email})

    if (userExist) {
      return res.status(400).json({ msg: "already email exist" });
    }

    const userCreated = await User.create({ username, email, phone, password });

    res.status(200).json({ msg: userCreated });
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

module.exports = { home, register };

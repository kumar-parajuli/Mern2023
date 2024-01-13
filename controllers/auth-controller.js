const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("welcome to page");
  } catch (error) {
    console.log(error);
  }
};

//register part
const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    // Check if user email already exists
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const userCreated = await User.create({ username, email, phone, password });
    res.status(201).json({
      msg: "Registration success",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(req.body);

    next(error);
  }
};

//Login part
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const userExist = await User.findOne({ email: email });
    console.log(userExist, "userExist");

    if (userExist) {
      //check pass
      const user = await userExist.comparePassword(password);
      if (user) {
        res.status(200).json({
          msg: "Login success",
          token: await userExist.generateToken(),
          userId: userExist._id.toString(),
        });
      } else {
        res.status(400).json({ error: "password doesn't match" });
      }
    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
//to send user data  -user Logic
const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};

module.exports = { home, register, login, user };

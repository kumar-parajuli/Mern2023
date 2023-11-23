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
    // console.log(req.body);
    const { username, email, phone, password } = req.body;

    //to check user email is already exix or not
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "already email exist" });
    }

    const userCreated = await User.create({ username, email, phone, password });

    res.status(201).json({
      msg: "resgistration success",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // res.status(500).json("internal server error");
    //using error handler
    next(error);
  }
};

//Login part
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    console.log(userExist);
    if (!userExist) {
      // return res.status(400).json({ messag: "Invalid Credentials" });
      next(error);
    }

    // const user = await bcrypt.compare(password, userExist.password);

    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login success",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "Invalid email or password" });
    }
  } catch (error) {
    // res.status(500).json("internal server error");
    next(error);
  }
};

module.exports = { home, register, login };

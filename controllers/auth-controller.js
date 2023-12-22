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
    console.log(email, password);
    const userExist = await User.findOne({ email: email });
    console.log(userExist, "userExist");

    if (userExist) {
      //check pass
      const user = await userExist.comparePassword(password);
      if (user) {
        console.log("kumar here");
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
  //to send user data  -user Logic
  const user = async (req, res) => {
    try {
    } catch (error) {}
  };

  // if (!userExist) {

  //   return res.status(400).json({ messag: "Invalid Credentials" });
  //   // next(error);
  // }

  // const user = await bcrypt.compare(password, userExist.password);

  //     const user = await userExist.comparePassword(password);
  // console.log(user,"user test")
  //     if (user) {
  //       console.log("kumar here")
  //       res.status(200).json({
  //         msg: "Login success",
  //         token: await userExist.generateToken(),
  //         userId: userExist._id.toString(),
  //       });
  //     }
  //     if(!user){
  //       console.log("invalid password")
  //       res.status(401).json({ msg: "Invalid email or password" });
  //     }
  //   } catch (error) {
  //     res.status(500).json({msg:"internal server error"});
  //     // next(error);
  //   }
  // };
};
module.exports = { home, register, login };

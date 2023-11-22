const mongoose = require("mongoose");

const URL = process.env.MONGODB_URL;

const connectDb = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Db connection sucessful");
  } catch (error) {
    console.error("Db connection is failed");
    process.exit(0);
  }
};

module.exports= connectDb;
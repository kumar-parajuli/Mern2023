const User = require("../models/user-model");
const Contact = require("../models/contact-model");

//GET ALL USERS LOGIC
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    // console.log(users);
    //check the users is exist or not
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No Users Founds" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

//GET ALL CONTACTS LOGIC
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({}, { password: 0 });
    //check the usercontacts data is exits or not
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No Contacts Founds" });
    }
    return res.status(200).json({ contacts });
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllUsers, getAllContacts };

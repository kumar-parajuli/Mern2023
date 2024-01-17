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

//single user  logic
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
//Update the user logic
const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;

    const updatedData = await User.updateOne(
      { _id: id },
      {
        $set: updatedUserData,
      }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

//Delete all user logic
const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successful" });
  } catch (error) {
    next(error);
  }
};
//Delete all contacts logic
const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact Deleted Successful" });
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
module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getUserById,
  updateUserById,
  deleteContactById,
};

const express = require("express");
const adminController = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const router = express.Router();

router.route("/users").get(authMiddleware, adminController.getAllUsers);
router.route("/contacts").get(authMiddleware, adminController.getAllContacts);

// routes of get all user id
router.route("/users/:id").get(authMiddleware, adminController.getUserById);

//route of update the user id
router
  .route("/users/update/:id")
  .patch(authMiddleware, adminController.updateUserById);

//route of deleate the user route
router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteUserById);

  //route of delete theContacts route
router
  .route("/contacts/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteContactById);
module.exports = router;

const adminMiddleware = async (req, res, next) => {
  try {
    // console.log(req.body)
    const adminRole = req.user.isAdmin;
    if (!adminRole) {
      return res
        .status(403)
        .json({ message: "Access denied.User is not an admin." });
    }
    next();
  } catch (error) {
    //if user is an admin,process to the next middleware
    next(error);
  }
};
module.exports = adminMiddleware;

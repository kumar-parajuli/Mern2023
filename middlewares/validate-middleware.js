const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    return next();
  } catch (err) {
    console.error("Validation Error:", err);

    const status = 422;
    const message = "Fill the input properly";
    // Check if err object has 'issues' property before mapping
    const extraDetails = err.issues.map((curElem) => curElem.message);

    // const extraDetails = err.errors[0].message;

    const error = {
      status,
      message,
      extraDetails,
    };
    // console.error(error);
    // // res.status(400).json({ mesg: message });
    // res.status(error.status || 422).json(error);
    console.error("Error Object:", error);

    next(extraDetails);
  }
};

module.exports = validate;

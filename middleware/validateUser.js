// Middleware to validate user input data before proceeding to route handlers
export const validateUser = (req, res, next) => {
  const { firstName, lastName, hobby } = req.body;
  const errors = [];

  if (!firstName) errors.push("First name required");
  if (!lastName) errors.push("Last name required");
  if (!hobby) errors.push("Hobby required");

  if (errors.length > 0) {
    const err = new Error(errors.join(", "));
    err.statuscode = 400;
    return next(err);
  }

  next();
};

const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    const formattedErrors = result.error.issues.reduce((acc, issue) => {
      const fieldName = issue.path[0];
      acc[fieldName] = issue.message;
      return acc;
    }, {});

    return res.status(400).json({
      status: "error",
      message: "Validation failed",
      errors: formattedErrors,
    });
  }

  req.body = result.data;
  next();
};

export default validate;

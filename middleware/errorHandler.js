// Error handler middleware for processing and returning error responses
export const errorHandler = (err, req, res, next) => {
  res.status(err.statuscode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

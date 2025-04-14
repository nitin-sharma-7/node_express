const statusLogger = (req, res, next) => {
  console.log({
    method: req.method,
    url: req.originalUrl || req.url,
    status: res.statusCode,
  });
  next();
};
export { statusLogger };

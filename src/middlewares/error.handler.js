function errorHandler(error, req, res, next) {
  switch (error.message) {
    case "401":
      return res.status(401).json({
        status: 401,
        message: "Unauthorized",
      });
    case "403":
      return res.status(403).json({
        status: 403,
        message: "Limit exceeded, payment required",
      });
    case "500":
      return res.status(500).json({
        status: 500,
        message: "Internal server error",
      });
    default:
      return res.status(500).json({
        status: 500,
        message: "Internal server error",
      });
  }
}

module.exports = {
  errorHandler,
};

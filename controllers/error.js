exports.get404 = (req, res, next) => {
  res.send("<h1>Invalid request</h1>");
};

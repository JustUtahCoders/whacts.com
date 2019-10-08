const { app } = require("../server");

exports.notFound = function notFound(res) {
  res.status(404).send({ error: "This api does not exist" });
};

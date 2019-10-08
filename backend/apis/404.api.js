const { app } = require("../server.js");
const { notFound } = require("../utils/response-utils.js");

app.use("/api/*", (req, res, next) => {
  notFound(res);
});

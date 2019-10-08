const path = require("path");
const express = require("express");

const app = express();

exports.app = app;

app.set("view engine", "ejs");
app.use("/dist", express.static(path.resolve(__dirname, "../dist")));

require("./apis/404.api");
require("./index-html.endpoint.js");

const port = process.env.PORT || 9090;

app.listen(port, err => {
  if (err) {
    console.error(err);
    process.exit(1);
    return;
  }

  console.log(`Server listening on http://localhost:${port}`);
});

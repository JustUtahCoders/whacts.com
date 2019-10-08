const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.send("It works 2!");
});

const port = process.env.PORT || 9090;

app.listen(port, err => {
  if (err) {
    console.error(err);
    process.exit(1);
    return;
  }

  console.log(`Server listening on http://localhost:${port}`);
});

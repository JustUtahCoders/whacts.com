const path = require("path");
const { app } = require("./server");

app.use("*", (req, res, next) => {
  res.render(path.resolve(__dirname, "./views/index.ejs"), {
    frontendFile:
      process.env.NODE_ENV === "production"
        ? "/dist/" + require("../dist/manifest.json")["whacts.js"]
        : "http://localhost:9091/whacts.js"
  });
});

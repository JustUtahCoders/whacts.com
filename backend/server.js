const express = require('express')

const app = express()

app.get("/", (req, res, next) => {
  res.send("It works!")
})

app.listen(9090, err => {
  if (err) {
    console.error(err)
    process.exit(1)
    return
  }

  console.log(`Server listening on port 9090.`)
})
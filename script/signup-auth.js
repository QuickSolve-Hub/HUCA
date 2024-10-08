const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();

app.set('view engine', 'ejs');

app.get("/", (res, req) => {
  res.render("login");
});

app.get("/signup", (res, req) => {
  res.render("signup");
})

const port = 5505;
app.listen(port, () => {
  console.log(`server running on port ${port}`)
})

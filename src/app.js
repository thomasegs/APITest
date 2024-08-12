const app = require("express")();

app.get("/", (req, res) => {
  res.status(200).send();
});

app.get("/users", (req, res) => {
  const user = [{ name: "John Doe", mail: "johndoe@mail.com" }];
  res.status(200).json(user);
});

module.exports = app;

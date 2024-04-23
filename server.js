const express = require("express");

const app = express();

const logger = require("morgan");

const PORT = process.env.PORT || 4002;

const db = require("./models");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

db.mongoose
  .connect(db.url)
  .then(() => {
    console.log(`Connected to the database '${db.url}' !`);
  })
  .catch(err => {
    console.log(`Cannot connect to the database '${db.url}' !`, err);
    process.exit();
  });

app.use(logger("dev"));

require("./routes/student.routes")(app);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to glsi students application." });
});

app.listen(PORT, () => {
  console.log(`Backend express server is running on port ${PORT}.`);
});

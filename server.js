const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb//localhost/fitnessTracker",
  {
    useNewUrlParser: true,
  }
);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

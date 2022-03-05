const express = require("express");
const bodyParser = require("body-parser");

const connectDB = require("./db/connect");
const app = express();
const usersRoutes = require("./routes/user");
app.use(express.json());
app.use(bodyParser.json());
app.use("/user", usersRoutes);

const start = () => {
  connectDB.connect(function (err) {
    if (err) {
      console.log(" not Connected!", err.sqlMessage);
      return;
    }
    console.log("Connected!");
    app.listen("9000", () =>
      console.log(`Server is listening on port 9000...`)
    );
  });
};

start();

require("dotenv").config();

const mongoose = require("mongoose");

exports.connect = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("DB Connection Successful");
    })
    .catch((error) => {
      console.log("DB connection not successful");
      console.error(error);
      process.exit(1);
    });
};

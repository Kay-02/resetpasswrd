const mongoose = require("mongoose");
let DB_URL = process.env.DB_URL;

module.exports = connection = async() => {
  try {
    await mongoose.connect(
      DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      },
      (error) => {
        if (error) return new Error("Failed to connect");
        console.log("connected to database");
      }
    );
  } catch (error) {
    console.log(error, "Failed to connect to database");
  }
};
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_URL } = process.env;
console.log("user id", DB_USER);
console.log("password", DB_PASSWORD);
console.log("Url ", DB_URL);
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_URL}/Student?retryWrites=true&w=majority`;
const mongoose = require("mongoose");
module.exports.connect = async () => {
  await mongoose.connect(uri);
};

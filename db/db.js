const mongoose = require("mongoose");

const uri =
  "mongodb+srv://gsnr1925:ZdnC7Wus4xnphHCS@wecare1.ibh32ew.mongodb.net/?retryWrites=true&w=majority&appName=wecare1";

const conn = mongoose.createConnection(uri);

conn.on("error", (err) => {
  console.log("Error Connecting to Database");
});
conn.on("connected", function () {
  console.log("Connection successfull");
});

conn.on("disconnected", function () {
  console.log("Connection Lost");
});

const authdb = conn.useDb("auth");
const CredentialSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const creds = authdb.model("credentials", CredentialSchema);

module.exports = {
  creds,
};

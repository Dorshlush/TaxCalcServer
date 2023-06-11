const mongoose = require("mongoose");
const uri='mongodb+srv://dor123:dor123@taxcalc.k6epkrs.mongodb.net/'
function connectDb() {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(uri);
    console.log("database connected successfully");
  } catch (err) {
    console.log("couldnt connect to the database", err.message);
  }
}
module.exports = connectDb;
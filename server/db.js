const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI =  process.env.MONGODB_URI;
// "mongodb+srv://<username>:<password>@cluster0.phvcdxa.mongodb.net/HostelUtilites?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to mongo successfully!");
  });
};

module.exports = connectToMongo;

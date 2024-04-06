const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://<username>:<password>@cluster0.phvcdxa.mongodb.net/HostelUtilites?retryWrites=true&w=majority&appName=Cluster0";
  // "mongodb+srv://harshrange:oC4s6emCnAcwkQOJ@cluster0.phvcdxa.mongodb.net/HostelUtilites?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to mongo successfully!");
  });
};

module.exports = connectToMongo;

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const logger = require("morgan")
const MainRouter = require("./routes/index.js");
const app = express();
const cors = require("cors")
const port = 5000;

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connect To MongoDB");
  } catch (error) {
    console.log(error + "Mongo Bağlantı Hatası");
  }
};

//MiddleWares
app.use(logger("dev"))
app.use(express.json());
app.use(cors())

app.use("/api", MainRouter);

app.listen(5000, () => {
  connect();
  console.log(`Sunucuya ${port} İle Bağlandım`);
});

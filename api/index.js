import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGOOSE_URI)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(`error occured: ${err}`);
  });
const app = express();

app.listen(8000, () => {
  console.log("server listening at port number 8000");
});
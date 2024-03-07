import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import userAuth from "./routes/auth.route.js";

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

app.use(express.json());

app.listen(8000, () => {
  console.log("server listening at port number 8000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", userAuth);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Seerver Error!";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

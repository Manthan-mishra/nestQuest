import {
  signin,
  signup,
  google,
  signOut,
} from "../controllers/auth.controller.js";
import express from "express";

const userAuth = express.Router();

userAuth.post("/signup", signup);
userAuth.post("/signin", signin);
userAuth.post("/google", google);
userAuth.get("/signout", signOut);

export default userAuth;

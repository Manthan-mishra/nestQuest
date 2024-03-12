import { signin, signup } from "../controllers/auth.controller.js";
import express from "express";

const userAuth = express.Router();

userAuth.post("/signup", signup);
userAuth.post("/signin", signin);

export default userAuth;

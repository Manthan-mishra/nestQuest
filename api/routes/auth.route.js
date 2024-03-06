import { signup } from "../controllers/auth.controller.js";
import express from "express";

const userAuth = express.Router();

userAuth.post("/signup", signup);

export default userAuth;

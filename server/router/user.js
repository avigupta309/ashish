import { Router } from "express";
import { userRegister } from "../controller/user.js";

export const userRouter = Router();

userRouter.post("/register", userRegister);

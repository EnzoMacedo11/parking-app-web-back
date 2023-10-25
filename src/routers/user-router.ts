import { Router } from "express";
import { signUp } from "../controllers/user-Controller";

const userRouter = Router();

userRouter.post("/signup",signUp)

export default userRouter
import { Router } from "express";
import { getUser, signIn, signUp } from "../controllers/user-Controller";

const userRouter = Router();

userRouter.post("/signup",signUp)
userRouter.post("/signin",signIn)
userRouter.get("/getuser",getUser)

export default userRouter
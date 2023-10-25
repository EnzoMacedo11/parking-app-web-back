import { Request,Response } from "express";
import httpStatus from "http-status";
import userService from "../../services/user-Service";

export async function signUp(req:Request,res:Response){
    const {enroll,name,password} = req.body
    const admin = false

    try{
        const result = await userService.createUser(enroll,name,password,admin)
        return res.status(httpStatus.OK).send(result);
    }catch(e){
        return res.status(httpStatus.UNAUTHORIZED).send({e})
    }
}
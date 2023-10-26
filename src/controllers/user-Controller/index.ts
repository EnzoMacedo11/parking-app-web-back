import { Request,Response } from "express";
import httpStatus from "http-status";
import userService from "../../services/user-Service";


export async function signUp(req:Request,res:Response){
    const {enrollment,name,password} = req.body
    const admin = false
    
    try{
        const result = await userService.createUser(enrollment,name,password,admin)
        return res.status(httpStatus.OK).send(result);
    }catch(e){
        return res.status(httpStatus.UNAUTHORIZED).send(e.message)
    }
}

export async function signIn(req:Request,res:Response) {
    const {enrollment,password} =req.body

    try{
        const result = await userService.findUser(enrollment,password)
        return res.status(httpStatus.OK).send(result);
    }catch(e){
        return res.status(httpStatus.UNAUTHORIZED).send(e.message)
    }
    
}
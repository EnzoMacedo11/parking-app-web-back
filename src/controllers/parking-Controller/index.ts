import { Request,Response } from "express";
import httpStatus from "http-status";
import parkService from "../../services/park-Service";

export async function ParkEntry(req:Request,res:Response) {
    const {token} = req.body;

    try{ const result = await parkService.ParkEntry(token)
        res.status(httpStatus.OK).send(result)

    }catch(error){
        res.status(httpStatus.UNAUTHORIZED).send(error.message)
    }
   
    
}
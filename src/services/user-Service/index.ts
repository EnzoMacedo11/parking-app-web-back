import bcrypt from "bcrypt"
import userRepository from "../../repositories/user-Repository"
import { v4 as uuidv4 } from 'uuid';

export async function createUser(enrollment:string,name:string,password:string,admin:boolean){
    const hashedPassword = await bcrypt.hash(password,12)
    const token = uuidv4();

    
    return userRepository.createUser(
        enrollment,
        name,
        hashedPassword,
        admin,
        token
    )
}

export async function findUser(enrollment:string,password:string) {
    return userRepository.findUser(
        enrollment,password
    )
}


export async function getUser(token:string) {
    return userRepository.getUser(
        token
    )
}


const userService = {
    createUser,findUser,getUser
}
    


export default userService


import bcrypt from "bcrypt"
import userRepository from "../../repositories/user-Repository"

export async function createUser(enroll:string,name:string,password:string,admin:boolean){
    const hashedPassword = await bcrypt.hash(password,12)
    return userRepository.createUser(
        enroll,
        name,
        hashedPassword,
        admin   
    )
}



const userService = {
    createUser
}
    


export default userService


import { prisma } from "../../config";

async function createUser(enroll:string,name:string,hashedPassword:string,admin:boolean){
    return prisma.user.create({data:{
        enroll,
        name,
        password:hashedPassword,
        admin
   }})
  
}



const userRepository = {
    createUser
}

export default userRepository